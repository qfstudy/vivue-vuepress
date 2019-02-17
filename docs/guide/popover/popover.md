---
title: 'popover'
pageClass: custom-page-class
---
<ClientOnly>
<Common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      popover弹出框
    </header>
    <p class="component-text">
      点击显示带有内容的方框。
    </p>
  </div>

  <div slot="description">
    <header class="vi-description-title">
      基础用法
    </header>
    <p class="vi-description-text">
      <span class="add-color">position</span>属性指定内容框位置，属性<span class="add-color">trigger</span>指定触发方式。
    </p>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Popover-vi-popover/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
      属性<span class="vi-paraStyle">position</span>属性值可选<span class="vi-paraStyle">top</span>，<span class="vi-paraStyle">bottom</span>，<span class="vi-paraStyle">left</span>，<span class="vi-paraStyle">right</span>。默认值为<span class="vi-paraStyle">top</span>。
      属性<span class="vi-paraStyle">trigger</span>，属性值有<span class="vi-paraStyle">click</span>，<span class="vi-paraStyle">hover</span>。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <vi-popover position="top">
        <template slot="content">
          <div>顶部内容</div>
        </template>
        <vi-button type="primary">点击</vi-button>
      </vi-popover>
      <vi-popover position="bottom">
        <template slot="content">
          <div>底部内容</div>
        </template>
        <vi-button>点击</vi-button>
      </vi-popover>
      <vi-popover position="left">
        <template slot="content">
          <div>左边内容</div>
        </template>
        <vi-button type="primary">点击</vi-button>
      </vi-popover>
      <vi-popover position="right">
        <template slot="content">
          <div>右边内容</div>
        </template>
        <vi-button type="primary">点击</vi-button>
      </vi-popover>

      <vi-popover trigger="hover">
        <template slot="content">
          <div>顶部内容</div>
        </template>
        <vi-button type="primary">点击</vi-button>
      </vi-popover>
      <vi-popover position="bottom" trigger="hover">
        <template slot="content" >
          <div>底部内容</div>
        </template>
        <vi-button>点击</vi-button>
      </vi-popover>
      <vi-popover position="left" trigger="hover">
        <template slot="content">
          <div>左边内容</div>
        </template>
        <vi-button type="primary">点击</vi-button>
      </vi-popover>
      <vi-popover position="right" trigger="hover">
        <template slot="content">
          <div>右边内容</div>
        </template>
        <vi-button type="primary">点击</vi-button>
      </vi-popover> 
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
          <td class="formBodyCol">position</td>
          <td class="formBodyCol">内容框位置</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">top / bottom / left / right</td>
          <td class="formBodyCol">top</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">trigger</td>
          <td class="formBodyCol">触发方式</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">click / hover</td>
          <td class="formBodyCol">click</td>
      </tr>
  </tbody>
</Common-create-form>
</ClientOnly>
