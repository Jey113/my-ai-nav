import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的 AI 知识库", // 👈 这里改成你的名字
  description: "AI导航 · 学习笔记 · 软件分享",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '🤖 AI 导航', link: '/ai-nav' },     // 我们等下创建这个页面
      { text: '📝 学习笔记', link: '/notes' },      // 我们等下创建这个页面
      { text: '💾 软件下载', link: '/software' }    // 我们等下创建这个页面
    ],

    sidebar: [
      {
        text: '快捷菜单',
        items: [
          { text: 'AI 导航', link: '/ai-nav' },
          { text: '学习笔记', link: '/notes/' },
          { text: '软件下载', link: '/software' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' } // 以后可以改成你的
    ]
  }
})