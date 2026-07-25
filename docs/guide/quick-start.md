# 快速开始

这一页带你从零完成一次 API 调用。你只需要准备一个 DouDi.ai 账号和一个可以发送 HTTP 请求的工具，例如终端、Postman、Apifox、Cherry Studio、Lobe Chat 或任意 OpenAI 兼容客户端。

## 1. 注册或登录

打开 [https://doudi.ai](https://doudi.ai)，点击登录或注册。公开状态接口显示当前站点启用了密码登录和密码注册，并启用了 Turnstile 校验，所以注册时可能需要完成人机验证。

## 2. 进入控制台

登录后进入控制台。常用模块包括：

| 模块 | 用途 |
| --- | --- |
| API Keys | 创建、复制、启用、禁用或删除 API Key。 |
| Playground | 在线测试模型请求。 |
| Models | 查看登录后可用模型。 |
| Wallet | 查看余额、额度和充值记录。 |
| Usage Logs | 查看调用日志和扣费记录。 |

## 3. 创建 API Key

进入 `API Keys` 页面，创建一个新 Key。创建后请立即复制并妥善保存，因为很多平台只会在创建时完整展示一次密钥。

详细步骤见：[创建 API Key](/guide/create-api-key)。

## 4. 配置客户端

OpenAI 兼容客户端一般需要两个值：

| 配置项 | 推荐填写 |
| --- | --- |
| Base URL | `https://doudi.ai/v1` |
| API Key | 你在控制台创建的 Key |

如果客户端要求填写完整接口地址，可以使用：

```text
https://doudi.ai/v1/chat/completions
```

## 5. 发送一次请求

将 `YOUR_API_KEY` 替换成你自己的 API Key，将 `model` 替换成你账号可用的模型。

```bash
curl https://doudi.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.6",
    "messages": [
      { "role": "user", "content": "用一句话介绍 DouDi.ai" }
    ]
  }'
```

## 6. 查看调用结果

请求成功后，你可以回到控制台查看：

- `Usage Logs`：确认请求时间、模型、消耗额度和状态。
- `Wallet`：确认余额或额度变化。
- `Models`：确认当前账号能使用哪些模型和分组。

## 常见错误

| 现象 | 排查方向 |
| --- | --- |
| `401 Unauthorized` | API Key 未填写、填写错误，或 Key 已被禁用。 |
| 模型不可用 | 账号分组没有该模型权限，或模型名称填写错误。 |
| 余额不足 | 到 `Wallet` 查看余额和额度。 |
| 客户端连接失败 | 检查 Base URL 是否为 `https://doudi.ai/v1`，不要多写或少写 `/v1`。 |
