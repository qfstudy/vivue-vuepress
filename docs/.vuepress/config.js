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
        ['./guide/icon/icon','icon 图标'],
        ['./guide/button/button','button 按钮'],
        ['./guide/input/input','input 输入框'],
        ['./guide/grid/grid','grid 布局'],
        ['./guide/layout/layout','layout 容器布局'],
        ['./guide/toast/toast','toast'],
        ['./guide/tab/tab','tab 标签'],
        ['./guide/popover/popover','popover 弹出框'],
        ['./guide/collapse/collapse','collapse 折叠面板']
      ],
      repo: 'qfstudy/vi-vue',
      repoLabel: 'Github',
      // editLinks: true,
      // 默认为 "Edit this page"
      // editLinkText: 'Edit this page'
    }
  
  
  }