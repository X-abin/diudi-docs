# 创建 API Key

API Key 是你调用 DouDi.ai 接口时的身份凭证。它相当于账号的访问令牌，应当像密码一样保存。

## 创建步骤

1. 打开 [https://doudi.ai](https://doudi.ai) 并登录账号。
2. 进入控制台中的 `API Keys` 页面。
3. 点击创建按钮，填写名称、额度限制或权限配置。
4. 创建成功后复制 API Key。
5. 将 API Key 保存到本地密码管理器或服务器环境变量中。

## 请求中如何使用

API Key 需要放在 HTTP Header 中：

```http
Authorization: Bearer YOUR_API_KEY
```

完整示例：

```bash
curl https://doudi.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.6",
    "messages": [
      { "role": "user", "content": "Hello" }
    ]
  }'
```

## 管理建议

- 每个项目单独创建一个 API Key，便于排查和停用。
- 不要把 API Key 写进前端代码、公开仓库、截图或聊天记录。
- 生产环境建议通过环境变量读取，例如 `DOUDI_API_KEY`。
- 如果怀疑密钥泄露，立即禁用或删除旧 Key，再创建新 Key。
- 可以给测试 Key 设置较低额度，避免误调用造成大量消耗。

## 环境变量示例

在服务器或本地开发环境中设置：

```bash
DOUDI_BASE_URL=https://doudi.ai/v1
DOUDI_API_KEY=你的_API_Key
```

Node.js 中读取：

```ts
const baseURL = process.env.DOUDI_BASE_URL
const apiKey = process.env.DOUDI_API_KEY
```

::: warning 安全提醒
API Key 只应保存在可信环境中。浏览器前端代码会被用户看到，不适合直接保存长期有效的 Key。
:::
