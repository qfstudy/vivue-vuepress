---
title: button
pageClass: custom-page-class
---
<ClientOnly>
<Common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      Button按钮
    </header>
    <p class="component-text">
      基础组件，开发中比较常用的按钮。
    </p>
  </div>

  <div slot="description">
    <header class="vi-description-title">
      基础用法
    </header>
    <p class="vi-description-text">
      按钮类型有：默认按钮、主要按钮、成功按钮、信息按钮、警告按钮、危险按钮。通过设置<span class="add-color">type</span>属性值为<span class="add-color">primary</span>、<span class="add-color">success</span>、<span class="add-color">info</span>、<span class="add-color">warning</span>、<span class="add-color">danger</span>创建不同样式的按钮，默认值为<span class="add-color">default</span>。
    </p>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Button-vi-button/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
        属性:<span class="vi-paraStyle">type</span>属性值:<span class="vi-paraStyle">default</span>(默认值)、<span class="vi-paraStyle">primary</span>、<span class="vi-paraStyle">success</span>、<span class="vi-paraStyle">info</span>、<span class="vi-paraStyle">warning</span>、<span class="vi-paraStyle">danger</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <vi-button>默认按钮</vi-button>
    <vi-button type="primary">主要按钮</vi-button>
    <vi-button type="success">成功按钮</vi-button>
    <vi-button type="info">信息按钮</vi-button>
    <vi-button type="warning">警告按钮</vi-button>
    <vi-button type="danger">危险按钮</vi-button> 
  </highlight-code>
</Common-code-format>
</ClientOnly>

<ClientOnly>
<Common-code-format>
  <div slot="description">
    <header class="vi-description-title">
      禁用状态
    </header>
    <p class="vi-description-text">
      属性<span class="add-color">disabled</span>指定按钮为禁用状态。
    </p>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Button-vi-button-disabled/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
        属性:<span class="vi-paraStyle">disabled</span>属性值:<span class="vi-paraStyle">disabled</span>例如：<span class="vi-paraStyle">disabled:"disabled"</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <vi-button disabled="disabled">默认按钮</vi-button>
    <vi-button disabled="disabled" type="primary">主要按钮</vi-button>
    <vi-button disabled="disabled" type="success">成功按钮</vi-button>
    <vi-button disabled="disabled" type="info">信息按钮</vi-button>
    <vi-button disabled="disabled" type="warning">警告按钮</vi-button>
    <vi-button disabled="disabled" type="danger">危险按钮</vi-button>
  </highlight-code>
</Common-code-format>
</ClientOnly>

<ClientOnly>
<Common-code-format>
  <div slot="description">
    <header class="vi-description-title">
      圆形按钮
    </header>
    <p class="vi-description-text">
      属性<span class="add-color">circle</span>指定<span class="add-color">图标按钮</span>为圆形按钮。
    </p>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Button-vi-button-circle/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
        属性:<span class="vi-paraStyle">circle</span>属性值:<span class="vi-paraStyle">circle</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <vi-button icon-size="medium" icon-name="setting" circle="circle"></vi-button>
    <vi-button icon-size="medium" icon-name="upload" circle="circle"></vi-button>
    <vi-button icon-size="medium" icon-name="download" circle="circle"></vi-button>
    <vi-button icon-size="medium" icon-name="search" circle="circle"></vi-button>
  </highlight-code>
</Common-code-format>
</ClientOnly>

<ClientOnly>
<Common-code-format>
  <div slot="description">
    <header class="vi-description-title">
      图标按钮
    </header>
    <p class="vi-description-text">
      属性<span class="add-color">icon-name</span>指定icon图标类型，<span class="add-color">icon-size</span>设置图标的大小，<span class="add-color">icon-position</span>指定图标在按钮中的左右位置。
    </p>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Button-vi-button-icon/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
        属性:<span class="vi-paraStyle">icon-size</span>默认值:<span class="vi-paraStyle">small</span>，<span class="vi-paraStyle">icon-position</span>默认值:<span class="vi-paraStyle">left</span>。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
      <vi-button type="primary" icon-name="upload">上传</vi-button>
      <vi-button type="primary" icon-name="download">下载</vi-button>
      <vi-button type="primary" icon-name="search">搜索</vi-button>
      <vi-button type="primary" icon-name="share">分享</vi-button>
      <vi-button type="primary" icon-name="edit">编辑</vi-button>
      <vi-button type="primary" icon-name="delete">删除</vi-button>
      
      <vi-button type="primary" icon-name="upload" icon-position="right">上传</vi-button>
      <vi-button type="primary" icon-name="download" icon-position="right">下载</vi-button>
      <vi-button type="primary" icon-name="search" icon-position="right">搜索</vi-button>
      <vi-button type="primary" icon-name="share" icon-position="right">分享</vi-button>
      <vi-button type="primary" icon-name="edit" icon-position="right">编辑</vi-button>
      <vi-button type="primary" icon-name="delete" icon-position="right">删除</vi-button>
  </highlight-code>
</Common-code-format>
</ClientOnly>

<ClientOnly>
<Common-code-format>
  <div slot="description">
    <header class="vi-description-title">
      按钮组
    </header>
    <p class="vi-description-text">
      以按钮组的方式出现，多个单个按钮组合。
    </p>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Button-vi-button-group/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
        属性:<span class="vi-paraStyle">type</span>属性值:<span class="vi-paraStyle">default</span>(默认值)、<span class="vi-paraStyle">primary</span>、<span class="vi-paraStyle">success</span>、<span class="vi-paraStyle">info</span>、<span class="vi-paraStyle">warning</span>、<span class="vi-paraStyle">danger</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <vi-button-group>
      <vi-button type="primary" icon-name="left">上一页</vi-button>
      <vi-button type="primary" icon-name="right" icon-position="right">下一页</vi-button>
    </vi-button-group>
    <vi-button-group>
      <vi-button type="primary" icon-name="edit">编辑</vi-button>
      <vi-button type="primary" icon-name="share">分享</vi-button>
      <vi-button type="primary" icon-name="delete">删除</vi-button>
    </vi-button-group>
  </highlight-code>
</Common-code-format>
</ClientOnly>

<ClientOnly>
<Common-create-form>
  <thead slot="form-header" class="formHead">
      <tr class="formHeadRow">
          <th class="formHeadCol">参数</th>
          <th class="formHeadCol">说明</th>
          <th class="formHeadCol">类型</th>
          <th class="formHeadCol">可选值</th>
          <th class="formHeadCol">默认值值</th>
      </tr>
  </thead>
  <tbody slot="form-body" class="formBody">
      <tr class="formBodyRow">
          <td class="formBodyCol">type</td>
          <td class="formBodyCol">类型</td>
          <td class="formBodyCol">String</td>
          <td class="formBodyCol">primary / success / info / warning / danger</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">icon-name</td>
          <td class="formBodyCol">图标类名</td>
          <td class="formBodyCol">String</td>
          <td class="formBodyCol">按约定取值</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">icon-size</td>
          <td class="formBodyCol">图标尺寸</td>
          <td class="formBodyCol">String</td>
          <td class="formBodyCol">small / medium / large</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">icon-position</td>
          <td class="formBodyCol">图标位置</td>
          <td class="formBodyCol">String</td>
          <td class="formBodyCol">right / left</td>
          <td class="formBodyCol">left</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">circle</td>
          <td class="formBodyCol">是否圆形按钮</td>
          <td class="formBodyCol">String</td>
          <td class="formBodyCol">circle</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">disabled</td>
          <td class="formBodyCol">是否禁用状态</td>
          <td class="formBodyCol">String</td>
          <td class="formBodyCol">disabled</td>
          <td class="formBodyCol">—</td>
      </tr>
  </tbody>
</Common-create-form>
</ClientOnly>
