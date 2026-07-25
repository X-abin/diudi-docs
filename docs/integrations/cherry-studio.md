# Cherry Studio

Cherry Studio 支持添加自定义 OpenAI 兼容服务商。DouDi.ai 状态接口中也公开了 Cherry Studio 的快速配置入口，但手动配置最稳妥。

## 手动配置

1. 打开 Cherry Studio。
2. 进入设置中的模型服务商。
3. 添加 OpenAI Compatible 或自定义服务商。
4. API 地址填写：`https://doudi.ai/v1`。
5. API Key 填写 DouDi.ai 控制台创建的 Key。
6. 模型名填写你的账号可用模型。
7. 保存后点击测试。

## 推荐模型填写方式

如果客户端没有自动拉取模型列表，可以手动输入：

```text
gpt-5.6
```

也可以到[模型与价格](/guide/models-pricing)页面复制当前公开模型名。

## 排查

- 测试失败时，先确认 Base URL 没有多写 `/chat/completions`。
- 模型列表拉取失败不一定代表不能用，可以手动添加模型名。
- 如果聊天能发出但没有回复，查看 DouDi.ai 的 `Usage Logs` 是否有失败原因。
