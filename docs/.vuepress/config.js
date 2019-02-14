module.exports = {
    title: 'vivue',
    description: '一个基于vue的ui组件',
    themeConfig: {
      // displayAllHeaders: true ,
      nav: [
        {
          text: '指南',
          link: '/guide/install/install'
        }
      ],
      sidebar: [
        {
          title: '开发指南',
          collapsable: false,
          // children: [
          //   './guide/icon/icon'
          // ]
        },
        ['./guide/install/install','安装'],
        ['./guide/started/started','快速上手'],
        {
          title: '组件',
          collapsable: false
        },
        ['./guide/icon/icon','icon'],
        ['./guide/button/button','button'],
      ],
      repo: 'qfstudy/vi-vue',
      repoLabel: 'Github',
      // editLinks: true,
      // 默认为 "Edit this page"
      // editLinkText: 'Edit this page'
    }
  
  
  }