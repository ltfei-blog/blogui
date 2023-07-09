import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '一个适用于博客的组件库',
  description: '一个适用于博客的组件库',
  themeConfig: {
    sidebar: [
      {
        text: 'Button',
        link: 'zh-CN/component/button.md',
        collapsed: false
      }
    ]
  }
})
