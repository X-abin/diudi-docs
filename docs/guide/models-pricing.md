# 模型与价格

::: tip 阅读方式
`model_ratio`、`completion_ratio`、`cache_ratio` 是平台公开返回的计费权重字段。实际扣费还会受到账号分组、额度余额、特殊计费规则和平台后台配置影响，请以登录后的控制台记录为准。
:::

## 数据来源

| 项目 | 当前值 |
| --- | --- |
| 系统名称 | 兜底 |
| 服务地址 | `https://doudi.ai` |
| 公开价格接口 | `https://doudi.ai/api/pricing` |
| 价格版本 | `a42d372ccf0b5dd13ecf71203521f9d2` |
| 模型数量 | 11 |
| 供应商数量 | 1 |
| 额度展示 | USD |
| 额度单位 | 500000 |
| 美元汇率字段 | 7.3 |

## 支持的接口类型

| 类型 | 方法 | 路径 |
| --- | --- | --- |
| `openai` | `POST` | `/v1/chat/completions` |
| `openai-response` | `POST` | `/v1/responses` |

## 用户组倍率

| 分组 | 倍率 | 说明 |
| --- | ---: | --- |
| `Codex-Pro` | 1 | Codex-Pro 兜底路由 |
| `default` | 0.3 | 默认分组 |
| `vip` | 1 | vip分组 |

## 模型列表

| 模型 | 供应商 | 描述 | 标签 | 输入倍率 | 输出倍率 | 缓存倍率 | 固定价格 | 可用分组 | 接口类型 |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| `gpt-5.4-openai-compact` | OpenAI | - | - | 37.5 | 6 | - | 0 | default | openai, openai-response |
| `gpt-5.6-terra` | OpenAI | - | - | 0.75 | 8 | - | 0 | default | openai, openai-response |
| `gpt-5.6-luna` | OpenAI | - | - | 0.35 | 8 | - | 0 | default | openai, openai-response |
| `codex-auto-review` | - | - | - | 2.5 | 30 | 0.1 | 0 | default | openai, openai-response |
| `gpt-5.3-codex-spark` | OpenAI | - | - | 0.875 | 8 | 0.1 | 0 | default | openai, openai-response |
| `gpt-5.5` | OpenAI | - | - | 0.09375 | 6 | 0.1 | 0 | default | openai, openai-response |
| `gpt-5.4-mini-openai-compact` | OpenAI | - | - | 37.5 | 6 | - | 0 | default | openai, openai-response |
| `gpt-5.6-sol` | OpenAI | - | - | 0.75 | 8 | 0.1 | 0 | default | openai, openai-response |
| `gpt-5.5-openai-compact` | OpenAI | - | - | 37.5 | 6 | - | 0 | default | openai, openai-response |
| `gpt-5.4-mini` | OpenAI | - | - | 0.1875 | 6 | 0.1 | 0 | default | openai, openai-response |
| `gpt-5.4` | OpenAI | - | - | 0.375 | 6 | 0.1 | 0 | default | openai, openai-response |
