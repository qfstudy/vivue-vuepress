---
title: 'tab'
pageClass: custom-page-class
---
<ClientOnly>
<Common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      tab标签
    </header>
    <p class="component-text">
      选择显示不同的内容。
    </p>
  </div>

  <div slot="description">
    <header class="vi-description-title">
      基础用法
    </header>
    <p class="vi-description-text">
      通过<span class="add-color">name</span>属性，可以实现点击不同的标签显示对应的内容。<span class="add-color">color</span>属性指定标签的背景颜色，<span class="add-color">line-color</span>属性指定标签下划线的颜色，<span class="add-color">space</span>属性指定标签之间的布局。
    </p>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Tab-vi-tab/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
      属性<span class="vi-paraStyle">space</span>，属性值<span class="vi-paraStyle">start</span>，<span class="vi-paraStyle">end</span>，<span class="vi-paraStyle">between</span>，<span class="vi-paraStyle">around</span>，<span class="vi-paraStyle">center</span>。默认值为<span class="vi-paraStyle">start</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <vi-tabs :selected.sync="selectedTab">
      <vi-tabs-bar color="teal" line-color="aqua">
        <vi-tabs-item name="education">教育</vi-tabs-item>
        <vi-tabs-item name="finance" >财经</vi-tabs-item>
        <vi-tabs-item name="sports" >体育</vi-tabs-item>
      </vi-tabs-bar>
      <vi-tabs-body>
        <vi-tabs-content name="education">教育的内容</vi-tabs-content>
        <vi-tabs-content name="finance">财经的内容</vi-tabs-content>
        <vi-tabs-content name="sports">体育的内容</vi-tabs-content>
      </vi-tabs-body>
    </vi-tabs>

    <vi-tabs :selected.sync="selectedTab">
      <vi-tabs-bar color="teal" space="around" line-color="aqua">
        <vi-tabs-item name="education">教育</vi-tabs-item>
        <vi-tabs-item name="finance" >财经</vi-tabs-item>
        <vi-tabs-item name="sports" >体育</vi-tabs-item>
      </vi-tabs-bar>
      <vi-tabs-body>
        <vi-tabs-content name="education">教育的内容</vi-tabs-content>
        <vi-tabs-content name="finance">财经的内容</vi-tabs-content>
        <vi-tabs-content name="sports">体育的内容</vi-tabs-content>
      </vi-tabs-body>
    </vi-tabs>

    <vi-tabs :selected.sync="selectedTab">
      <vi-tabs-bar color="teal" space="between" line-color="aqua">
        <vi-tabs-item name="education">教育</vi-tabs-item>
        <vi-tabs-item name="finance" >财经</vi-tabs-item>
        <vi-tabs-item name="sports" >体育</vi-tabs-item>
      </vi-tabs-bar>
      <vi-tabs-body>
        <vi-tabs-content name="education">教育的内容</vi-tabs-content>
        <vi-tabs-content name="finance">财经的内容</vi-tabs-content>
        <vi-tabs-content name="sports">体育的内容</vi-tabs-content>
      </vi-tabs-body>
    </vi-tabs>

    <vi-tabs :selected.sync="selectedTab">
      <vi-tabs-bar color="teal" space="center" line-color="aqua">
        <vi-tabs-item name="education">教育</vi-tabs-item>
        <vi-tabs-item name="finance" >财经</vi-tabs-item>
        <vi-tabs-item name="sports" >体育</vi-tabs-item>
      </vi-tabs-bar>
      <vi-tabs-body>
        <vi-tabs-content name="education">教育的内容</vi-tabs-content>
        <vi-tabs-content name="finance">财经的内容</vi-tabs-content>
        <vi-tabs-content name="sports">体育的内容</vi-tabs-content>
      </vi-tabs-body>
    </vi-tabs>

    <vi-tabs :selected.sync="selectedTab">
      <vi-tabs-bar color="teal" space="end" line-color="aqua">
        <vi-tabs-item name="education">教育</vi-tabs-item>
        <vi-tabs-item name="finance" >财经</vi-tabs-item>
        <vi-tabs-item name="sports" >体育</vi-tabs-item>
      </vi-tabs-bar>
      <vi-tabs-body>
        <vi-tabs-content name="education">教育的内容</vi-tabs-content>
        <vi-tabs-content name="finance">财经的内容</vi-tabs-content>
        <vi-tabs-content name="sports">体育的内容</vi-tabs-content>
      </vi-tabs-body>
    </vi-tabs>

    <script>
      data(){
        return{
          selectedTab:'sports'
        }
      }
    </script>  

    <style>
      .vi-tabs-item{
        color: black;
      }
      .vi-tabs-bar-wrapper{
        width: 500px;
      }
    </style> 
  </highlight-code>
</Common-code-format>
</ClientOnly>

<ClientOnly>
<Common-code-format>

  <div slot="description">
    <header class="vi-description-title">
      带有图标的tab标签
    </header>
    <p class="vi-description-text">
      使用<span class="add-color">icon-name</span>指定对应的图标，<span class="add-color">position</span>属性决定图标的位置。
    </p>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Tab-vi-tab-icon/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
      <span class="vi-paraStyle">position</span>属性值有<span class="vi-paraStyle">right</span>，<span class="vi-paraStyle">left</span>，默认值为<span class="vi-paraStyle">left</span>。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <vi-tabs :selected.sync="selectedTab">
      <vi-tabs-bar color="teal" line-color="aqua">
        <vi-tabs-item name="education">教育</vi-tabs-item>
        <vi-tabs-item name="finance" >财经</vi-tabs-item>
        <vi-tabs-item name="sports" >体育</vi-tabs-item>
      </vi-tabs-bar>
      <vi-tabs-body>
        <vi-tabs-content name="education">教育的内容</vi-tabs-content>
        <vi-tabs-content name="finance">财经的内容</vi-tabs-content>
        <vi-tabs-content name="sports">体育的内容</vi-tabs-content>
      </vi-tabs-body>
    </vi-tabs>

    <vi-tabs :selected.sync="selectedTab">
      <vi-tabs-bar color="teal" space="around" line-color="aqua">
        <vi-tabs-item name="education">教育</vi-tabs-item>
        <vi-tabs-item name="finance" >财经</vi-tabs-item>
        <vi-tabs-item name="sports" >体育</vi-tabs-item>
      </vi-tabs-bar>
      <vi-tabs-body>
        <vi-tabs-content name="education">教育的内容</vi-tabs-content>
        <vi-tabs-content name="finance">财经的内容</vi-tabs-content>
        <vi-tabs-content name="sports">体育的内容</vi-tabs-content>
      </vi-tabs-body>
    </vi-tabs>

    <vi-tabs :selected.sync="selectedTab">
      <vi-tabs-bar color="teal" space="between" line-color="aqua">
        <vi-tabs-item name="education">教育</vi-tabs-item>
        <vi-tabs-item name="finance" >财经</vi-tabs-item>
        <vi-tabs-item name="sports" >体育</vi-tabs-item>
      </vi-tabs-bar>
      <vi-tabs-body>
        <vi-tabs-content name="education">教育的内容</vi-tabs-content>
        <vi-tabs-content name="finance">财经的内容</vi-tabs-content>
        <vi-tabs-content name="sports">体育的内容</vi-tabs-content>
      </vi-tabs-body>
    </vi-tabs>

    <vi-tabs :selected.sync="selectedTab">
      <vi-tabs-bar color="teal" space="center" line-color="aqua">
        <vi-tabs-item name="education">教育</vi-tabs-item>
        <vi-tabs-item name="finance" >财经</vi-tabs-item>
        <vi-tabs-item name="sports" >体育</vi-tabs-item>
      </vi-tabs-bar>
      <vi-tabs-body>
        <vi-tabs-content name="education">教育的内容</vi-tabs-content>
        <vi-tabs-content name="finance">财经的内容</vi-tabs-content>
        <vi-tabs-content name="sports">体育的内容</vi-tabs-content>
      </vi-tabs-body>
    </vi-tabs>

    <vi-tabs :selected.sync="selectedTab">
      <vi-tabs-bar color="teal" space="end" line-color="aqua">
        <vi-tabs-item name="education">教育</vi-tabs-item>
        <vi-tabs-item name="finance" >财经</vi-tabs-item>
        <vi-tabs-item name="sports" >体育</vi-tabs-item>
      </vi-tabs-bar>
      <vi-tabs-body>
        <vi-tabs-content name="education">教育的内容</vi-tabs-content>
        <vi-tabs-content name="finance">财经的内容</vi-tabs-content>
        <vi-tabs-content name="sports">体育的内容</vi-tabs-content>
      </vi-tabs-body>
    </vi-tabs>

    <script>
      data(){
        return{
          selectedTab:'sports'
        }
      }
    </script>  

    <style>
      .vi-tabs-item{
        color: black;
      }
      .vi-tabs-bar-wrapper{
        width: 500px;
      }
    </style> 
  </highlight-code>
</Common-code-format>
</ClientOnly>

### VI-TABS-BAR

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
          <td class="formBodyCol">color</td>
          <td class="formBodyCol">背景uamse</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">line-colo</td>
          <td class="formBodyCol">底部横线颜色</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">space</td>
          <td class="formBodyCol">布局方式</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">start / end / between / around / center</td>
          <td class="formBodyCol">start</td>
      </tr>
  </tbody>
</Common-create-form>
</ClientOnly>

### VI-TABS-ITEM

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
          <td class="formBodyCol">name</td>
          <td class="formBodyCol">关联标签和内容</td>
          <td class="formBodyCol">string / number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">position</td>
          <td class="formBodyCol">图标位置</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">left / right</td>
          <td class="formBodyCol">left</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">icon-name</td>
          <td class="formBodyCol">选择图标</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">icon-size</td>
          <td class="formBodyCol">图标大小</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">small / medium / large</td>
          <td class="formBodyCol">small</td>
      </tr>
  </tbody>
</Common-create-form>
</ClientOnly>

### VI-TABS-CONTENT

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
          <td class="formBodyCol">name</td>
          <td class="formBodyCol">与标签一一对应</td>
          <td class="formBodyCol">string / number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
  </tbody>
</Common-create-form>
</ClientOnly>
