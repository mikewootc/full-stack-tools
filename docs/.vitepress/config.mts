import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "全栈工具集",
  description: "全栈工具集x",
  base: "/full-stack-tools",
  build: {
    outDir: 'docs/.vitepress/dist'   //构建产物输出目录
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sizebar: false,
    //sidebar: [
    //  {
    //    text: 'Examples',
    //    items: [
    //      { text: 'Home', link: '/' },
    //      { text: 'Markdown Examples', link: '/markdown-examples' },
    //      { text: 'Runtime API Examples', link: '/api-examples' }
    //    ]
    //  }
    //],
    outline: [2, 4], // 显示 h2 到 h4 的标题

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
