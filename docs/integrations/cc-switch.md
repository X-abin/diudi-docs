# CC Switch

CC Switch 常用于在不同 Claude Code 或代码代理配置之间切换。接入 DouDi.ai 时，建议把 DouDi.ai 作为一个单独配置保存。

## 配置思路

创建一个 DouDi.ai 配置项：

| 字段 | 值 |
| --- | --- |
| Name | `DouDi.ai` |
| Type | OpenAI Compatible |
| Base URL | `https://doudi.ai/v1` |
| API Key | DouDi.ai API Key |
| Model | 当前账号可用模型 |

## 使用流程

1. 在 CC Switch 中新增 DouDi.ai 配置。
2. 保存后切换到该配置。
3. 启动对应的代码代理或 CLI。
4. 发送一个简短请求确认连通性。

## 注意事项

- 如果目标工具本身只支持 Anthropic 原生格式，需要额外的格式转换代理。
- 如果目标工具支持 OpenAI Compatible，优先使用原生兼容方式。
- 每次切换配置后，先确认环境变量或配置文件是否已经刷新。
