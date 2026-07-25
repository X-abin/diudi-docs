# OpenAI Compatible

DouDi.ai 提供 OpenAI 兼容接口。大多数支持自定义 OpenAI 服务商的工具，都可以用同一组配置接入。

## 基础配置

| 配置项 | 填写内容 |
| --- | --- |
| API Host / Base URL | `https://doudi.ai/v1` |
| API Key | 在 DouDi.ai 控制台创建的 API Key |
| Chat Completions | `https://doudi.ai/v1/chat/completions` |
| Responses | `https://doudi.ai/v1/responses` |
| Authorization | `Bearer YOUR_API_KEY` |

## 请求示例

```bash
curl https://doudi.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.6",
    "messages": [
      { "role": "user", "content": "你好，介绍一下 DouDi.ai" }
    ]
  }'
```

## 接入检查

- Base URL 通常填 `https://doudi.ai/v1`，不要写成 `https://doudi.ai/v1/chat/completions`，除非工具明确要求完整接口地址。
- 模型名必须使用控制台或[模型与价格](/guide/models-pricing)中可用的模型。
- API Key 前面不要手动加 `Bearer`，除非工具要求填写完整 Header。
- 如果客户端支持代理、超时、重试，建议保留默认值，先确认基础请求能成功。
