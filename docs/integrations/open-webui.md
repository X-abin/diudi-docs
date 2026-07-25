# Open WebUI

Open WebUI 支持配置 OpenAI API 地址，因此可以接入 DouDi.ai 作为模型网关。

## Docker 环境变量

如果使用 Docker 部署 Open WebUI，可以设置：

```bash
OPENAI_API_BASE_URL=https://doudi.ai/v1
OPENAI_API_KEY=YOUR_API_KEY
```

如果你的版本使用复数形式变量，则按当前版本说明填写对应字段：

```bash
OPENAI_API_BASE_URLS=https://doudi.ai/v1
OPENAI_API_KEYS=YOUR_API_KEY
```

## 页面配置

1. 进入 Open WebUI 管理设置。
2. 找到 Connections 或 OpenAI API 配置。
3. 添加连接：
   - URL：`https://doudi.ai/v1`
   - Key：DouDi.ai API Key
4. 保存后刷新模型列表，或手动添加模型名。

## 排查

| 现象 | 处理 |
| --- | --- |
| 模型列表为空 | 手动填写模型名，或确认 Open WebUI 的模型列表接口配置。 |
| 401 | API Key 错误或 Key 被禁用。 |
| 404 | URL 拼接错误，检查是否重复 `/v1`。 |
| 连接慢 | 检查服务器网络到 `doudi.ai` 的连通性。 |
