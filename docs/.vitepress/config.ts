import { defineConfig } from 'vitepress'

const repoName = 'diudi-docs'

export default defineConfig({
  title: 'diudi文档',
  description: 'DouDi.ai 使用文档',
  lang: 'zh-CN',
  base: process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/',
  cleanUrls: true,
  lastUpdated: true,
  head: [['meta', { name: 'theme-color', content: '#ffffff' }]],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'diudi文档',
    nav: [
      { text: '指南', link: '/guide/product' },
      { text: '模型与价格', link: '/guide/models-pricing' },
      { text: 'DouDi.ai', link: 'https://doudi.ai' }
    ],
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '产品介绍', link: '/guide/product' },
          { text: '快速开始', link: '/guide/quick-start' },
          { text: '创建 API Key', link: '/guide/create-api-key' }
        ]
      },
      {
        text: '费用与模型',
        items: [
          { text: '模型与价格', link: '/guide/models-pricing' },
          { text: '计费与额度', link: '/guide/billing-quota' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/X-abin/diudi-docs' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: '本文档基于 DouDi.ai 公开页面与公开接口整理。',
      copyright: 'Copyright © 2026 diudi文档'
    },
    editLink: {
      pattern: 'https://github.com/X-abin/diudi-docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: '深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '语言',
    externalLinkIcon: true
  }
})
