import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Blog UI',
  description: '一个适用于博客的组件库',
  themeConfig: {
    sidebar: [
      {
        text: '基础组件',
        collapsed: false,
        items: [
          {
            link: 'zh-CN/component/button.md',
            text: 'Button 按钮'
          },
          {
            link: 'zh-CN/component/input.md',
            text: 'Input 输入框'
          },
          {
            link: 'zh-CN/component/image.md',
            text: 'Image 图片'
          }
        ]
      },
      {
        text: '组件',
        items: [
          {
            link: 'zh-CN/component/avatar.md',
            text: 'Avatar 头像'
          },
          {
            text: 'Card 文章卡片',
            link: 'zh-CN/component/card.md'
          },
          {
            text: 'Comment 评论',
            link: 'zh-CN/component/comment.md'
          },
          {
            text: 'Editor 编辑器(todo)'
          },
          {
            text: 'Infinite Scroll 无限滚动(todo)'
          },
          {
            text: 'UserInfo 用户信息(todo)'
          }
        ]
      },
      {
        text: '指令',
        collapsed: false,
        items: [
          {
            text: 'vPermission 权限(todo)'
          }
        ]
      }
    ]
  },
  markdown: {
    config: (md) => mdPlugin(md)
  }
})
