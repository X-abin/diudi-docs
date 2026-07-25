# Trae

Trae 接入 DouDi.ai 的方式与其他代码编辑器类似：添加自定义 OpenAI 兼容模型服务。

## 配置步骤

1. 打开 Trae 设置。
2. 找到 AI Provider、模型服务或 API 配置。
3. 选择 OpenAI Compatible。
4. Base URL 填写：`https://doudi.ai/v1`。
5. API Key 填写 DouDi.ai 控制台创建的 Key。
6. 模型名填写你的账号可用模型。

## 建议

- 先用简单问题测试连通性，再进行大型代码任务。
- 如果 Trae 支持不同任务使用不同模型，可以为聊天、代码补全、长任务分别选择模型。
- 定期查看 DouDi.ai `Usage Logs`，确认代码任务消耗是否合理。

## 常见错误

| 错误 | 处理 |
| --- | --- |
| 401 | API Key 无效或未保存。 |
| 403 | 当前账号、Key 或模型权限不足。 |
| 404 | Base URL 错误，通常是 `/v1` 拼接问题。 |
