# Codex CLI

Codex CLI 接入 DouDi.ai 时，建议使用 OpenAI 兼容配置。这样可以通过统一 Base URL 和 API Key 调用 DouDi.ai 上的模型。

## 环境变量

```bash
OPENAI_BASE_URL=https://doudi.ai/v1
OPENAI_API_KEY=YOUR_API_KEY
```

如果你的 Codex CLI 配置文件支持 Provider，请创建一个 OpenAI Compatible Provider：

```json
{
  "provider": "openai-compatible",
  "baseUrl": "https://doudi.ai/v1",
  "apiKey": "YOUR_API_KEY",
  "model": "gpt-5.6"
}
```

## 使用建议

- 编程代理会产生较多工具调用和上下文传输，建议关注 `Usage Logs`。
- 给 Codex CLI 单独创建一个 API Key，便于限额和排查。
- 如果遇到模型不支持某些响应格式，换用支持 `openai-response` 或 `openai` 类型的模型。

## 常见问题

| 现象 | 原因与处理 |
| --- | --- |
| 认证失败 | API Key 错误或没有传入环境变量。 |
| 模型不存在 | 模型名不在当前账号可用列表中。 |
| 请求超时 | 降低上下文，或切换响应更快的模型。 |
