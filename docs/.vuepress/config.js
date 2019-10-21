module.exports = {
  title: 'tk Press',
  description: '这是一个 vuepress 构建的个人站点',
  base: '/',
  cache: false,
  port: '80',
  head:[
      ['link', {rel:'icon', href:'/images/favicon.ico'}]  // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
      displayAllHeaders: false, // 默认值：false
      activeHeaderLinks: true,  // 默认值：true
      sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
      lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
      repo: 'https://github.com/itianke/itianke.github.io/tree/itianke.github.io', // 你的 Git 项目地址，添加后会在导航栏的最后追加
      editLinks: true,  // 启用编辑
      editLinkText: '在 GitHub 上编辑此页', // 编辑按钮的 Text
      docsDir: 'docs',  // 编辑文档的所在目录
      docsBranch: 'itianke.github.io',  // 编辑文档的所在分支
      nav: [
          { text: '首页', link: '/' },
          { text: '资源', link: '/resource/article' }
      ],
      sidebar: {
        '/resource/': [
            'article'
        ]
      }
  },
  plugins: ['@vuepress/back-to-top'] 
}