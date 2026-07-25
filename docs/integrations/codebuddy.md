# CodeBuddy

CodeBuddy 类工具通常用于代码生成、解释和项目问答。接入 DouDi.ai 时优先选择 OpenAI Compatible 或自定义 OpenAI Provider。

## 通用配置

| 配置项 | 填写内容 |
| --- | --- |
| Provider | OpenAI Compatible |
| Base URL | `https://doudi.ai/v1` |
| API Key | DouDi.ai API Key |
| Model | 当前账号可用模型 |

## 使用建议

- 给 CodeBuddy 单独创建 API Key，方便统计代码任务消耗。
- 大仓库问答会带入大量上下文，建议先限定文件范围。
- 如果工具支持模型能力标签，优先选择代码能力较强的模型。

## 排查

- 报认证失败：检查 API Key。
- 报模型不存在：换用 DouDi.ai 控制台可见模型。
- 报格式不兼容：切换到 OpenAI Compatible 模式。
