# 模型与价格

本页由 `scripts/sync-doudi-data.ts` 从 DouDi.ai 公开接口异步生成，数据更新时间：`2026-07-25T09:12:56.898Z`。

::: tip 阅读方式
`model_ratio`、`completion_ratio`、`cache_ratio` 是平台公开返回的计费权重字段。实际扣费还会受到账号分组、额度余额、特殊计费规则和平台后台配置影响，请以登录后的控制台记录为准。
:::

## 数据来源

| 项目 | 当前值 |
| --- | --- |
| 系统名称 | 兜底 \| DouDi.ai |
| 服务地址 | `https://doudi.ai` |
| 公开价格接口 | `https://doudi.ai/api/pricing` |
| 价格版本 | `a42d372ccf0b5dd13ecf71203521f9d2` |
| 模型数量 | 10 |
| 供应商数量 | 12 |
| 额度展示 | USD |
| 额度单位 | 500000 |
| 美元汇率字段 | 7.3 |

## 支持的接口类型

| 类型 | 方法 | 路径 |
| --- | --- | --- |
| `method` | `POST` | `POST` |
| `openai` | `POST` | `/v1/chat/completions` |
| `openai-response` | `POST` | `/v1/responses` |
| `path` | `POST` | `/v1/chat/completions` |

## 用户组倍率

| 分组 | 倍率 | 说明 |
| --- | ---: | --- |
| `Claude-AWS` | 3 | 公开接口未返回说明 |
| `Claude-MAX` | 2.5 | 公开接口未返回说明 |
| `Codex-Stable` | 0.5 | ×20Pro池，核心生产 |
| `Codex-Standard` | 0.2 | Plus池，基础生产 |

## 模型列表

| 模型 | 供应商 | 描述 | 标签 | 输入倍率 | 输出倍率 | 缓存倍率 | 固定价格 | 可用分组 | 接口类型 |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| `gpt-5.5` | OpenAI | OpenAI 新一代旗舰通用大模型，适合复杂推理、长上下文、多场景高质量文本生成。 | 日常问答,代码工程,高质生成 | 0.09375 | 6 | - | 0 | Codex-Stable | path, method |
| `gpt-5.6-sol` | OpenAI | OpenAI 新一代旗舰通用大模型，适合复杂推理、长上下文、多场景高质量文本生成。 | 深度推理,逻辑分析,高质生成 | 1.25 | 8 | - | 0 | Codex-Stable | openai, openai-response |
| `gpt-5.4` | OpenAI | OpenAI 最新旗舰通用大模型，适合复杂推理、长上下文、多场景高质量文本生成。 | 日常问答,长文处理,代码工程 | 37.5 | 6 | - | 0 | Codex-Stable | openai, openai-response |
| `gpt-5.6` | OpenAI | OpenAI 新一代旗舰通用大模型，适合复杂推理、长上下文、多场景高质量文本生成。 | 深度推理,逻辑分析,高质生成 | 2.5 | 8 | 0.1 | 0 | Codex-Stable | openai, openai-response |
| `codex-auto-review` | OpenAI | 适配 Codex 自动审批功能的模型别名，实际请求会映射到 gpt-5.5。 | 代码审查,逻辑分析,代码工程 | 37.5 | 1 | - | 0 | Codex-Stable | openai, openai-response |
| `gpt-5.3-codex-spark` | OpenAI | OpenAI 面向编程与代码任务的轻快型 Codex 模型，适合代码补全、代理执行与工程场景。 | 快速轻量,代码工程,日常问答 | 0.875 | 8 | 0.1 | 0 | Codex-Stable | openai, openai-response |
| `gpt-5.4-mini` | OpenAI | gpt-5.4-mini模型的变体模型，只为了compact压缩而存在。 | 快速轻量,日常问答,逻辑分析 | 0.375 | 6 | - | 0 | Codex-Stable | method, path |
| `gpt-5.3-codex` | OpenAI | OpenAI 面向代码补全、代码编辑与工程任务的 Codex 系列模型，适合编程代理与代码生成。 | 代码审查,代码工程,长文处理 | 0.875 | 8 | 0.102857 | 0 | Codex-Stable | openai, openai-response |
| `gpt-5.6-terra` | OpenAI | OpenAI 新一代旗舰通用大模型，适合复杂推理、长上下文、多场景高质量文本生成。 | 深度推理,逻辑分析,长文处理 | 0.75 | 8 | - | 0 | Codex-Stable | method, path |
| `gpt-5.6-luna` | OpenAI | OpenAI 新一代旗舰通用大模型，适合复杂推理、长上下文、多场景高质量文本生成。 | 深度推理,长文处理,高质生成 | 0.35 | 8 | - | 0 | Codex-Stable | path, method |
