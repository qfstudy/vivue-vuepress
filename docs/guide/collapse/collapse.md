---
title: 'collapse'
pageClass: custom-page-class
---
<ClientOnly>
<Common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      collapse 折叠面板
    </header>
    <p class="component-text">
      通过折叠面板隐藏或显示内容区域
    </p>
  </div>

  <div slot="description">
    <header class="vi-description-title">
      基础用法
    </header>
    <p class="vi-description-text">
      每次只能展开一个面板
    </p>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Collapse-vi-collapse-single/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
      通过<span class="vi-paraStyle">single</span>属性来设置是否展示单个面板。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <vi-collapse :selected.sync="selected" single>
      <vi-collapse-item title="标题1" name="1">内容1</vi-collapse-item>
      <vi-collapse-item title="标题2" name="2">内容2</vi-collapse-item>
      <vi-collapse-item title="标题3" name="3">内容3</vi-collapse-item>
    </vi-collapse>

    <script>
      data(){
        return{
          selected: ['1']
        }
      }
    </script>
  </highlight-code>
</Common-code-format>
</ClientOnly>

<ClientOnly>
<Common-code-format>

  <div slot="description">
    <header class="vi-description-title">
      可同时展开多个面板，面板之间不影响
    </header>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Collapse-vi-collapse/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
      通过<span class="vi-paraStyle">single</span>属性来设置是否展示单个面板。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <vi-collapse :selected.sync="selected">
      <vi-collapse-item title="标题1" name="1">内容1</vi-collapse-item>
      <vi-collapse-item title="标题2" name="2">内容2</vi-collapse-item>
      <vi-collapse-item title="标题3" name="3">内容3</vi-collapse-item>
    </vi-collapse>

    <script>
      data(){
        return{
          selected: ['1','2']
        }
      }
    </script>
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
          <td class="formBodyCol">name</td>
          <td class="formBodyCol">标识符</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">title</td>
          <td class="formBodyCol">面板标题</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
  </tbody>
</Common-create-form>
</ClientOnly>
