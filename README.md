# diudi文档

这是面向 DouDi.ai 的中文使用文档站，使用 VitePress 构建。

## 本地开发

```bash
pnpm install
pnpm run sync
pnpm run docs:dev
```

## 构建

```bash
pnpm run docs:build
```

## 数据同步

模型与价格页面由异步脚本生成：

```bash
pnpm run sync
```

脚本会读取：

- `https://doudi.ai/api/status`
- `https://doudi.ai/api/pricing`

并更新：

- `docs/public/data/doudi-status.json`
- `docs/public/data/doudi-pricing.json`
- `docs/guide/models-pricing.md`
