import { defineConfig } from 'vitepress'
import { resolve } from 'path'

export default defineConfig({
  title: 'Name-UI',
  description: 'Universal UI Component Library for Vue and React',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#1890ff' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      {
        text: '示例',
        items: [
          { text: 'Vue 示例', link: '/examples/vue' },
          { text: 'React 示例', link: '/examples/react' },
        ],
      },
      {
        text: '更多',
        items: [
          { text: '更新日志', link: '/changelog' },
          { text: '贡献指南', link: '/contributing' },
          { text: 'FAQ', link: '/faq' },
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          items: [
            { text: '快速开始', link: '/guide/' },
            { text: '安装', link: '/guide/installation' },
            { text: '架构设计', link: '/guide/architecture' },
          ],
        },
        {
          text: '进阶',
          items: [
            { text: '主题定制', link: '/guide/theming' },
            { text: '国际化', link: '/guide/i18n' },
            { text: '最佳实践', link: '/guide/best-practices' },
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: '组件总览', link: '/components/' },
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Input 输入框', link: '/components/input' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yechen123321/Name-Ui' },
    ],

    editLink: {
      pattern:
        'https://github.com/yechen123321/Name-Ui/edit/main/packages/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Name-UI Team',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
      level: [2, 3],
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },
  },

  vite: {
    resolve: {
      alias: {
        '@name-ui/core': resolve(__dirname, '../../core/dist'),
        '@name-ui/vue': resolve(__dirname, '../../vue/dist'),
        '@name-ui/theme': resolve(__dirname, '../../theme/dist'),
      },
    },
    define: {
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    },
    ssr: {
      noExternal: ['@name-ui/vue', '@name-ui/core', '@name-ui/theme'],
    },
  },

  markdown: {
    lineNumbers: true,
  },
})
