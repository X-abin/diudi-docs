# LangChain / SDK

在代码项目中接入 DouDi.ai，推荐使用 OpenAI 兼容 SDK。LangChain、OpenAI SDK 和许多第三方 SDK 都支持自定义 Base URL。

## OpenAI JavaScript SDK

```ts
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.DOUDI_API_KEY,
  baseURL: 'https://doudi.ai/v1'
})

const completion = await client.chat.completions.create({
  model: 'gpt-5.6',
  messages: [
    { role: 'user', content: '用一句话介绍 DouDi.ai' }
  ]
})

console.log(completion.choices[0]?.message?.content)
```

## OpenAI Python SDK

```python
from openai import OpenAI
import os

client = OpenAI(
    api_key=os.environ["DOUDI_API_KEY"],
    base_url="https://doudi.ai/v1",
)

completion = client.chat.completions.create(
    model="gpt-5.6",
    messages=[
        {"role": "user", "content": "用一句话介绍 DouDi.ai"}
    ],
)

print(completion.choices[0].message.content)
```

## LangChain JavaScript

```ts
import { ChatOpenAI } from '@langchain/openai'

const model = new ChatOpenAI({
  apiKey: process.env.DOUDI_API_KEY,
  model: 'gpt-5.6',
  configuration: {
    baseURL: 'https://doudi.ai/v1'
  }
})

const response = await model.invoke('用一句话介绍 DouDi.ai')
console.log(response.content)
```

## 环境变量

```bash
DOUDI_API_KEY=YOUR_API_KEY
OPENAI_API_KEY=YOUR_API_KEY
OPENAI_BASE_URL=https://doudi.ai/v1
```

## 生产建议

- 后端服务读取环境变量，不要把 Key 写进前端代码。
- 给不同业务单独创建 API Key，方便限额和审计。
- 记录模型名、请求耗时和业务请求 ID，方便排查账单。
- 对外部用户输入设置长度限制，避免异常消耗。
