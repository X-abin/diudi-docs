# Claude Code

Claude Code 接入 DouDi.ai 时，核心思路是让工具使用 OpenAI 兼容接口或可配置的代理层。不同版本的 Claude Code 配置项可能不同，请优先以工具当前设置页为准。

## 推荐配置

| 配置项 | 填写内容 |
| --- | --- |
| Base URL | `https://doudi.ai/v1` |
| API Key | DouDi.ai API Key |
| Model | 控制台中可用的模型 |

## 环境变量方式

如果你的运行方式支持 OpenAI 兼容环境变量，可以按下面方式配置：

```bash
OPENAI_BASE_URL=https://doudi.ai/v1
OPENAI_API_KEY=YOUR_API_KEY
```

然后在工具中选择对应的 OpenAI Compatible Provider。

## 排查重点

- Claude 系列或代理工具可能默认使用 Anthropic 格式；如果报格式错误，请确认是否切换到了 OpenAI Compatible 模式。
- 如果工具固定调用 Anthropic 接口路径，需要使用支持格式转换的代理层。
- 403、401、模型不存在这类问题，先到 DouDi.ai 控制台确认 Key、模型权限和余额。
