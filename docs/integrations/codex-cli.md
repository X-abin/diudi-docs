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

## 频繁 Reconnect

如果 Codex Desktop 或 Codex CLI 经常出现 `Reconnect`、连接反复断开、请求刚开始就重连，优先检查本机代理配置。常见原因是系统浏览器能走代理，但 Codex 进程没有读取到正确的 `HTTP_PROXY` / `HTTPS_PROXY`。

处理步骤：

1. 先确认本机正在使用的代理协议和端口，例如 `http://127.0.0.1:7890`。不要照抄示例端口，要以你的代理软件实际端口为准。
2. 创建或编辑 `~/.codex/.env`。
3. 写入代理配置，并保留文件里已有的其他配置。

```bash
HTTP_PROXY="http://127.0.0.1:<HTTP 或 mixed 端口>"
HTTPS_PROXY="http://127.0.0.1:<HTTP 或 mixed 端口>"
```

Windows 路径通常是：

```text
C:\Users\你的用户名\.codex\.env
```

写好后完全退出 Codex Desktop，再重新打开。如果仍然频繁重连，检查代理软件是否开启了 HTTP 或 mixed 端口，并确认防火墙没有拦截本地代理连接。

## 常见问题

| 现象 | 原因与处理 |
| --- | --- |
| 认证失败 | API Key 错误或没有传入环境变量。 |
| 模型不存在 | 模型名不在当前账号可用列表中。 |
| 请求超时 | 降低上下文，或切换响应更快的模型。 |
| 频繁 Reconnect | 检查 `~/.codex/.env` 中的 `HTTP_PROXY` 和 `HTTPS_PROXY` 是否指向本机实际代理端口。 |
