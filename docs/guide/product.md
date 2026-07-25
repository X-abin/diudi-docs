# 产品介绍

DouDi.ai 是一个统一的 AI API 网关与管理控制台。它把多个上游模型和供应商整理到同一个控制台中，让用户可以通过统一的 API 地址、统一的 API Key 和统一的额度体系来使用不同模型。

根据公开站点信息，DouDi.ai 的系统名称为“兜底 | DouDi.ai”，公开导航中启用了模型广场和控制台入口。控制台侧边栏包含 API Key、调用日志、充值钱包、模型、个人资料等模块；管理员侧还包含渠道、模型管理、用户、兑换码、订阅、系统设置等模块。

## 适合谁使用

- 想用一个 API Key 调用多个 AI 模型的开发者。
- 想把 OpenAI 兼容客户端接入统一网关的用户。
- 想查看模型倍率、可用分组和接口类型，再选择模型的团队。
- 需要记录调用日志、管理余额额度和控制 API Key 权限的使用者。

## 核心概念

| 概念 | 说明 |
| --- | --- |
| Base URL | DouDi.ai 的 API 服务地址，公开状态接口显示为 `https://doudi.ai`。OpenAI 兼容接口通常使用 `https://doudi.ai/v1`。 |
| API Key | 用于鉴权的密钥。请求时放在 `Authorization: Bearer YOUR_API_KEY` 中。 |
| 模型 | 调用时传入的 `model` 字段，例如公开价格接口中出现的 `gpt-5.6`、`gpt-5.5` 等。 |
| 分组 | 平台用来区分可用池和倍率的用户组，例如公开数据中包含 `Codex-Stable`、`Codex-Standard`。 |
| 倍率 | 模型和分组的计费权重。实际消耗会受模型倍率、输出倍率、缓存倍率、用户组倍率等因素影响。 |

## 官方入口

- 控制台入口：[https://doudi.ai](https://doudi.ai)
- 模型与价格：[https://doudi.ai/pricing](https://doudi.ai/pricing)
- 频道/渠道页：[https://doudi.ai/channels](https://doudi.ai/channels)
- 公开文档链接：站点状态接口当前返回 `https://docs.newapi.pro`

::: tip 说明
本文档是针对 DouDi.ai 当前公开页面和公开接口整理的使用文档，不替代平台后台中的实时配置。涉及余额、权限、可用模型时，请以登录后的控制台显示为准。
:::
