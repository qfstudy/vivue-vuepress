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
        ['./guide/input/input','input'],
        ['./guide/grid/grid','grid'],
        ['./guide/layout/layout','layout'],
        ['./guide/toast/toast','toast'],
        ['./guide/tab/tab','tab'],
        ['./guide/popover/popover','popover'],
        ['./guide/collapse/collapse','collapse']
      ],
      repo: 'qfstudy/vi-vue',
      repoLabel: 'Github',
      // editLinks: true,
      // 默认为 "Edit this page"
      // editLinkText: 'Edit this page'
    }
  
  
  }