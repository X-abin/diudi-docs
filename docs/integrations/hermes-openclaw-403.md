# Hermes / OpenClaw 403 代理

部分工具调用模型时可能遇到 403，常见原因是请求格式、目标接口或权限策略不匹配。Hermes / OpenClaw 这类代理层通常用于处理格式转换、请求转发或特定客户端兼容问题。

## 什么时候需要代理

- 工具只支持某一种固定供应商格式，无法直接配置 OpenAI Compatible。
- 工具固定请求某个接口路径，不能改成 `https://doudi.ai/v1`。
- 客户端侧存在 403，但用 curl 直接请求 DouDi.ai 可以成功。
- 需要把 Anthropic 风格请求转换为 OpenAI 兼容请求。

## 推荐排查顺序

1. 先用 curl 直接请求 DouDi.ai，确认 API Key、模型和余额正常。
2. 再检查客户端请求的 Base URL 是否正确。
3. 如果直连成功、客户端失败，再考虑代理层。
4. 在代理日志中查看实际转发到 DouDi.ai 的 URL、Header 和模型名。

## 代理配置要点

| 配置项 | 建议 |
| --- | --- |
| 上游地址 | `https://doudi.ai/v1` |
| 上游 Key | DouDi.ai API Key |
| 模型映射 | 把客户端模型名映射到 DouDi.ai 可用模型 |
| Header | 保留 `Authorization: Bearer YOUR_API_KEY` |

## 403 常见原因

- API Key 无权限或已禁用。
- 模型不在当前账号分组中。
- 客户端请求了 DouDi.ai 不支持的接口格式。
- 代理层把 Header 或路径改坏了。
- 工具侧默认启用了不兼容的供应商协议。
