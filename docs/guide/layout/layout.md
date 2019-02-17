---
title: 'layout'
pageClass: custom-page-class
---
<ClientOnly>
<Common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      layout布局
    </header>
    <p class="component-text">
    方便快速搭建页面的基本结构。
    </p>
  </div>

  <div slot="description">
    <header class="vi-description-title">
      基础用法
    </header>
    <p class="vi-description-text">
      <span class="add-color">&ltvi-container/&gt</span>外层容器。当子元素中不包含<span class="add-color">&ltvi-aside/&gt</span> 时，全部子元素会垂直上下排列，否则会水平左右排列。<span class="add-color">&ltvi-header/&gt</span>：顶栏容器。
      <span class="add-color">&ltvi-aside/&gt</span>：侧边栏容器。
      <span class="add-color">&ltvi-main/&gt</span>：主要区域容器。
      <span class="add-color">&ltvi-footer/&gt</span>：底栏容器。
      <h5>以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，&ltel-container&gt 的子元素只能是后四者，后四者的父元素也只能是 &ltel-container&gt。</h5>
    </p>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Layout-vi-layout/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
      使用<span class="vi-paraStyle">vi-icon-name</span>属性选择图标。<span class="vi-paraStyle">vi-icon-size</span>指定Icon图标的尺寸，默认值为<span class="vi-paraStyle">default</span>，可选值有<span class="vi-paraStyle">small</span>、<span class="vi-paraStyle">medium</span>、<span class="vi-paraStyle">large</span>。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <vi-container>
      <vi-header>header</vi-header>
      <vi-main>main</vi-main>
    </vi-container>
    
    <vi-container>
      <vi-header>header</vi-header>
      <vi-main>main</vi-main>
      <vi-footer>footer</vi-footer>
    </vi-container>
    
    <vi-container>
      <vi-aside width="200px">Aside</vi-aside>
      <vi-main>Main</vi-main>
    </vi-container>
    
    <vi-container>
      <vi-header>Header</vi-header>
      <vi-container>
        <vi-aside width="200px">Aside</vi-aside>
        <vi-main>Main</vi-main>
      </vi-container>
    </vi-container>
    
    <vi-container>
      <vi-header>Header</vi-header>
      <vi-container>
        <vi-aside width="200px">Aside</vi-aside>
        <vi-container>
          <vi-main>Main</vi-main>
          <vi-footer>Footer</vi-footer>
        </vi-container>
      </vi-container>
    </vi-container> 
    
    <vi-container>
      <vi-aside width="200px">Aside</vi-aside>
      <vi-container>
        <vi-header>Header</vi-header>
        <vi-main>Main</vi-main>
      </vi-container>
    </vi-container>
    
    <vi-container>
      <vi-aside width="200px">Aside</vi-aside>
      <vi-container>
        <vi-header>Header</vi-header>
        <vi-main>Main</vi-main>
        <vi-footer>Footer</vi-footer>
      </vi-container>
    </vi-container>

    <style>
      .vi-header, .vi-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
      }
      
      .vi-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
      }
      
      .vi-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
      }
      
      body > .vi-container {
        margin-bottom: 40px;
      }
    </style>
  </highlight-code>
</Common-code-format>
</ClientOnly>