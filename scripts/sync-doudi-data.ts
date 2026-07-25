import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const baseUrl = process.env.DOUDI_BASE_URL ?? 'https://doudi.ai'
const dataDir = path.join(process.cwd(), 'docs', 'public', 'data')
const modelsPage = path.join(process.cwd(), 'docs', 'guide', 'models-pricing.md')

type ApiResult<T> = {
  success: boolean
  message?: string
  data: T
}

type StatusData = {
  system_name?: string
  server_address?: string
  docs_link?: string
  display_in_currency?: boolean
  quota_display_type?: string
  quota_per_unit?: number
  usd_exchange_rate?: number
  custom_currency_symbol?: string
  custom_currency_exchange_rate?: number
}

type PricingModel = {
  model_name: string
  description?: string
  icon?: string
  tags?: string
  vendor_id?: number
  quota_type?: number
  model_ratio?: number
  model_price?: number
  completion_ratio?: number
  cache_ratio?: number
  create_cache_ratio?: number
  image_ratio?: number
  audio_ratio?: number
  audio_completion_ratio?: number
  enable_groups?: string[]
  supported_endpoint_types?: string[]
}

type Vendor = {
  id: number
  name: string
  icon?: string
}

type PricingData = {
  auto_groups?: string[]
  data: PricingModel[]
  group_ratio?: Record<string, number>
  pricing_version?: string
  supported_endpoint?: Record<string, { path: string; method: string }>
  usable_group?: Record<string, string>
  vendors?: Vendor[]
}

async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      accept: 'application/json'
    }
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Request failed: ${response.status} ${response.statusText} ${url}\n${body}`)
  }

  return response.json() as Promise<T>
}

function escapeCell(value: unknown): string {
  if (value === undefined || value === null || value === '') {
    return '-'
  }

  return String(value)
    .replaceAll('|', '\\|')
    .replaceAll('\n', '<br>')
}

function formatNumber(value: number | undefined): string {
  if (value === undefined) {
    return '-'
  }

  return Number.isInteger(value) ? String(value) : String(Number(value.toFixed(6)))
}

function joinList(values: string[] | undefined): string {
  if (!values?.length) {
    return '-'
  }

  return values.join(', ')
}

function vendorName(model: PricingModel, vendors: Vendor[]): string {
  const vendor = vendors.find((item) => item.id === model.vendor_id)
  return vendor?.name ?? model.icon ?? '-'
}

function renderGroupTable(pricing: PricingData): string {
  const groups = pricing.group_ratio ?? {}
  const usableGroup = pricing.usable_group ?? {}
  const rows = Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, ratio]) => `| \`${escapeCell(name)}\` | ${formatNumber(ratio)} | ${escapeCell(usableGroup[name] || '公开接口未返回说明')} |`)

  if (!rows.length) {
    return '公开接口未返回分组倍率。'
  }

  return ['| 分组 | 倍率 | 说明 |', '| --- | ---: | --- |', ...rows].join('\n')
}

function renderEndpointTable(pricing: PricingData): string {
  const endpoints = pricing.supported_endpoint ?? {}
  const rows = Object.entries(endpoints)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, endpoint]) => `| \`${escapeCell(name)}\` | \`${escapeCell(endpoint.method)}\` | \`${escapeCell(endpoint.path)}\` |`)

  if (!rows.length) {
    return '公开接口未返回接口类型。'
  }

  return ['| 类型 | 方法 | 路径 |', '| --- | --- | --- |', ...rows].join('\n')
}

function renderModelTable(pricing: PricingData): string {
  const vendors = pricing.vendors ?? []
  const rows = pricing.data.map((model) => {
    return [
      `\`${escapeCell(model.model_name)}\``,
      escapeCell(vendorName(model, vendors)),
      escapeCell(model.description),
      escapeCell(model.tags),
      formatNumber(model.model_ratio),
      formatNumber(model.completion_ratio),
      formatNumber(model.cache_ratio),
      formatNumber(model.model_price),
      escapeCell(joinList(model.enable_groups)),
      escapeCell(joinList(model.supported_endpoint_types))
    ].join(' | ')
  })

  return [
    '| 模型 | 供应商 | 描述 | 标签 | 输入倍率 | 输出倍率 | 缓存倍率 | 固定价格 | 可用分组 | 接口类型 |',
    '| --- | --- | --- | --- | ---: | ---: | ---: | ---: | --- | --- |',
    ...rows.map((row) => `| ${row} |`)
  ].join('\n')
}

function renderModelsPage(status: StatusData, pricing: PricingData): string {
  const modelCount = pricing.data.length
  const vendors = pricing.vendors?.length ?? 0

  return `# 模型与价格

::: tip 阅读方式
\`model_ratio\`、\`completion_ratio\`、\`cache_ratio\` 是平台公开返回的计费权重字段。实际扣费还会受到账号分组、额度余额、特殊计费规则和平台后台配置影响，请以登录后的控制台记录为准。
:::

## 数据来源

| 项目 | 当前值 |
| --- | --- |
| 系统名称 | ${escapeCell(status.system_name)} |
| 服务地址 | \`${escapeCell(status.server_address ?? baseUrl)}\` |
| 公开价格接口 | \`${baseUrl}/api/pricing\` |
| 价格版本 | \`${escapeCell(pricing.pricing_version)}\` |
| 模型数量 | ${modelCount} |
| 供应商数量 | ${vendors} |
| 额度展示 | ${escapeCell(status.quota_display_type)} |
| 额度单位 | ${escapeCell(status.quota_per_unit)} |
| 美元汇率字段 | ${escapeCell(status.usd_exchange_rate)} |

## 支持的接口类型

${renderEndpointTable(pricing)}

## 用户组倍率

${renderGroupTable(pricing)}

## 模型列表

${renderModelTable(pricing)}
`
}

async function main() {
  await mkdir(dataDir, { recursive: true })

  const [statusResult, pricing] = await Promise.all([
    getJson<ApiResult<StatusData>>(`${baseUrl}/api/status`),
    getJson<PricingData>(`${baseUrl}/api/pricing`)
  ])

  if (!statusResult.success) {
    throw new Error(statusResult.message || 'Failed to fetch status data')
  }

  await Promise.all([
    writeFile(path.join(dataDir, 'doudi-status.json'), `${JSON.stringify(statusResult.data, null, 2)}\n`, 'utf8'),
    writeFile(path.join(dataDir, 'doudi-pricing.json'), `${JSON.stringify(pricing, null, 2)}\n`, 'utf8'),
    writeFile(modelsPage, renderModelsPage(statusResult.data, pricing), 'utf8')
  ])

  console.log(`Synced ${pricing.data.length} models from ${baseUrl}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
