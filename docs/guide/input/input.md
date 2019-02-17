---
title: 'input'
pageClass: custom-page-class
---
<ClientOnly>
<Common-code-format>
  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      Input输入框
    </header>
    <p class="component-text">
      输入字符
    </p>
  </div>

  <div slot="description">
    <header class="vi-description-title">
      基础用法
    </header>
    <p class="vi-description-text">
     普通的输入框，支持<span class="add-color">v-model</span>双向绑定。
    </p>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Input-vi-input/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
     支持<span class="vi-paraStyle">v-model</span>双向绑定
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <vi-input placeholder="请输入内容" v-model="input"></vi-input> 
    <script>
      export default {
        data () {
          return {
            input: ''
          }
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
      禁用状态
    </header>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Input-vi-input-disabled/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
      通过<span class="vi-paraStyle">disabled</span>属性指定是否禁用input组件
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <vi-input placeholder="请输入内容" v-model="input" disabled></vi-input>
    <script>
      export default {
        data() {
          return {
            input1: ''
          }
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
      可清空
    </header>
    <p class="vi-description-text">
     使用<span class="add-color">clearable</span>属性指定输入框可以清空
    </p>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Input-vi-input-clearable/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
      <span class="vi-paraStyle">clearable</span>属性指定输入框可以清空
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <vi-input placeholder="请输入内容" v-model="input2" clearable suffix-icon="error"></vi-input>
    <script>
      export default {
        data() {
          return {
            input2: ''
          }
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
      带icon的输入框
    </header>
    <p class="vi-description-text">
      带有图标标记输入类型
    </p>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Input-vi-input-icon/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
      可以通过<span class="vi-paraStyle">prefix-icon</span>和<span class="vi-paraStyle">suffix-icon</span>属性在input组件首部和尾部添加icon图标。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <vi-input placeholder="请输入内容" suffix-icon="edit" v-model="input3"></vi-input>
    <vi-input placeholder="请输入内容" prefix-icon="search" v-model="input31"></vi-input>
    <vi-input placeholder="请输入内容" suffix-icon="edit" v-model="input32"></vi-input>
    <vi-input placeholder="请输入内容" prefix-icon="search" v-model="input33"></vi-input>
    <script>
      export default {
        data() {
          return {
            input3: '',
            input31: '',
            input32: '',
            input33: ''
          }
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
      只读输入框
    </header>
    <p class="vi-description-text">
      通过<span class="add-color">readonly</span>属性指定输入框只读。
    </p>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Input-vi-input-readonly/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
      属性<span class="vi-paraStyle">readonly</span>指定输入框只读。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <vi-input placeholder="请输入内容" v-model="input4" readonly></vi-input> 
    <script>
      export default {
        data() {
          return {
            input4: ''
          }
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
          <th class="formHeadCol">默认值</th>
      </tr>
  </thead>
  <tbody slot="form-body" class="formBody">
      <tr class="formBodyRow">
          <td class="formBodyCol">v-model</td>
          <td class="formBodyCol">双向绑定</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">disabled</td>
          <td class="formBodyCol">禁用</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
        <td class="formBodyCol">placeholder</td>
        <td class="formBodyCol">输入框占位文本</td>
        <td class="formBodyCol">string</td>
        <td class="formBodyCol">—</td>
        <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
        <td class="formBodyCol">clearable</td>
        <td class="formBodyCol">是否可清空</td>
        <td class="formBodyCol">boolean</td>
        <td class="formBodyCol">—</td>
        <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
        <td class="formBodyCol">readonly</td>
        <td class="formBodyCol">是否只读</td>
        <td class="formBodyCol">boolean</td>
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
      <tr class="formBodyRow">
        <td class="formBodyCol">prefix-icon</td>
        <td class="formBodyCol">输入框头部图标</td>
        <td class="formBodyCol">string</td>
        <td class="formBodyCol">—</td>
        <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
        <td class="formBodyCol">suffix-icon</td>
        <td class="formBodyCol">输入框尾部图标</td>
        <td class="formBodyCol">string</td>
        <td class="formBodyCol">—</td>
        <td class="formBodyCol">—</td>
      </tr>
  </tbody>
</Common-create-form>
</ClientOnly>