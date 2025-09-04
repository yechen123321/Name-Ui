import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Name-UI',
  description: 'Universal UI Component Library for Vue and React',

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Components', link: '/components/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [{ text: 'Getting Started', link: '/guide/' }],
        },
      ],
      '/components/': [
        {
          text: 'Components',
          items: [{ text: 'Overview', link: '/components/' }],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yechen123321/Name-Ui' },
    ],
  },
})
