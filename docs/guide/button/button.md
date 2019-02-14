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
      按钮类型有：默认按钮、主要按钮、成功按钮、信息按钮、警告按钮、危险按钮。通过设置<span class="add-color">type</span>为<span class="add-color">primary</span>、<span class="add-color">success</span>、<span class="add-color">info</span>、<span class="add-color">warning</span>、<span class="add-color">danger</span>创建不同样式的按钮，<span class="add-color">type</span>为<span class="add-color">default</span>是默认样式。
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
    <vi-button><span>默认按钮</span></vi-button>
    <vi-button type="primary"><span>主要按钮</span></vi-button>
    <vi-button type="success"><span>成功按钮</span></vi-button>
    <vi-button type="info"><span>信息按钮</span></vi-button>
    <vi-button type="warning"><span>警告按钮</span></vi-button>
    <vi-button type="danger"></span>危险按钮</span></vi-button>   
  </highlight-code>
</Common-code-format>
</ClientOnly>

<ClientOnly>
<Common-code-format>
  <div slot="description">
    <p class="vi-description-text">
      按钮类型有：默认按钮、主要按钮、成功按钮、信息按钮、警告按钮、危险按钮。通过设置<span class="add-color">type</span>为<span class="add-color">primary</span>、<span class="add-color">success</span>、<span class="add-color">info</span>、<span class="add-color">warning</span>、<span class="add-color">danger</span>创建不同样式的按钮，<span class="add-color">type</span>为<span class="add-color">default</span>是默认样式。
    </p>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Button-vi-button-disabled/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
        属性:<span class="vi-paraStyle">type</span>属性值:<span class="vi-paraStyle">default</span>(默认值)、<span class="vi-paraStyle">primary</span>、<span class="vi-paraStyle">success</span>、<span class="vi-paraStyle">info</span>、<span class="vi-paraStyle">warning</span>、<span class="vi-paraStyle">danger</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <vi-button disabled="disabled"><span>默认按钮</span></vi-button>
    <vi-button disabled="disabled" type="primary"><span>主要按钮</span></vi-button>
    <vi-button disabled="disabled" type="success"><span>成功按钮</span></vi-button>
    <vi-button disabled="disabled" type="info"><span>信息按钮</span></vi-button>
    <vi-button disabled="disabled" type="warning"><span>警告按钮</span></vi-button>
    <vi-button disabled="disabled" type="danger"></span>危险按钮</span></vi-button>
  </highlight-code>
</Common-code-format>
</ClientOnly>

<ClientOnly>
<Common-code-format>
  <div slot="description">
    <p class="vi-description-text">
      按钮类型有：默认按钮、主要按钮、成功按钮、信息按钮、警告按钮、危险按钮。通过设置<span class="add-color">type</span>为<span class="add-color">primary</span>、<span class="add-color">success</span>、<span class="add-color">info</span>、<span class="add-color">warning</span>、<span class="add-color">danger</span>创建不同样式的按钮，<span class="add-color">type</span>为<span class="add-color">default</span>是默认样式。
    </p>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Button-vi-button-circle/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
        属性:<span class="vi-paraStyle">type</span>属性值:<span class="vi-paraStyle">default</span>(默认值)、<span class="vi-paraStyle">primary</span>、<span class="vi-paraStyle">success</span>、<span class="vi-paraStyle">info</span>、<span class="vi-paraStyle">warning</span>、<span class="vi-paraStyle">danger</span>
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

<!-- <ClientOnly>
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
          <td class="formBodyCol">设置自定义图标</td>
          <td class="formBodyCol">String</td>
          <td class="formBodyCol">按组件约定设置图标名字</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">circle</td>
          <td class="formBodyCol">尺寸</td>
          <td class="formBodyCol">String</td>
          <td class="formBodyCol">default/small/medium/large</td>
          <td class="formBodyCol">default</td>
      </tr>
  </tbody>
</Common-create-form>
</ClientOnly> -->
