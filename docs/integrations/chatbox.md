# Chatbox

Chatbox 可以通过自定义 OpenAI API 接入 DouDi.ai。

## 配置步骤

1. 打开 Chatbox 设置。
2. 选择模型提供方为 OpenAI API 或自定义 OpenAI API。
3. API Host 填写：`https://doudi.ai/v1`。
4. API Key 填写你的 DouDi.ai API Key。
5. 模型名填写账号可用模型。
6. 新建会话并发送测试消息。

## 示例配置

| 配置项 | 值 |
| --- | --- |
| API Host | `https://doudi.ai/v1` |
| API Key | `sk-...` 或平台生成的 Key |
| Model | `gpt-5.6` |

## 常见问题

- 如果 Chatbox 把 `/v1` 自动拼接到 Host 后面，请改填 `https://doudi.ai`。
- 如果返回 404，通常是 Base URL 和客户端自动拼接规则重复了。
- 如果返回余额不足，到 DouDi.ai 的 `Wallet` 页面确认额度。
