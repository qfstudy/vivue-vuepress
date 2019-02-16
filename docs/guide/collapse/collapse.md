---
title: 'collapse'
pageClass: custom-page-class
---
<ClientOnly>
<Common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      collapse
    </header>
    <p class="component-text">
      提供了一套常用的图标集合以及能够更方便地添加自己想在页面中引用的图标，可以根据自己的实际需求对图标进行扩展。
    </p>
  </div>

  <div slot="description">
    <header class="vi-description-title">
      使用方法
    </header>
    <p class="vi-description-text">
      使用<span class="add-color">&ltvi-icon/&gt</span>组件需要全局或是在引入<span class="add-color">&ltvi-icon/&gt</span>组件的组件中引入<span class="add-color">js</span>文件，例如:<span class="add-color">import './packages/common/svg.js'</span>。
    </p>
    <p class="vi-description-text">
      这个<span class="add-color">js</span>文件是根据<a class="add-color" href="http://www.iconfont.cn" target="_black">阿里巴巴矢量图标库</a>的<span class="add-color">symbol引用</span>生成的<span class="add-color">js</span>文件。具体方法请访问：<a class="add-color"href="http://www.iconfont.cn" target="_black">阿里巴巴矢量图标库</a>。
    </p>
    <p class="vi-description-text">
      <span class="noteColor">需要注意的是：</span>在<a class="add-color" href="http://www.iconfont.cn" target="_black">阿里巴巴矢量图标库</a>创建图标项目时，需要对每一个icon重新命名。icon命名的格式类似于<span class="add-color">vi-xxx</span>的形式，必须以<span class="add-color">vi-</span>开头，<span class="add-color">xxx</span>可以自定义。例如：<span class="add-color">vi-search</span>表示搜索框图标。
    </p>
    <p class="vi-description-text">
      设置属性<span class="add-color">vi-icon-name</span>可以指定图标，其属性值就是上文提到的<span class="add-color">xxx</span>。例如：如果一个搜索图框的命名为<span class="add-color">vi-search</span>，可以这样引入图标：<span class="add-color">&ltvi-icon vi-icon-name="search"&gt&lt/vi-icon&gt</span>
    </p>
  </div>

  <div slot="showComponents" class="vi-show-component">
    <Collapse-vi-collapse/>
  </div>

  <section slot="paraDescription" class="vi-code-description">
    <p class="vi-paraStyle-wrapper">
      使用<span class="vi-paraStyle">vi-icon-name</span>属性选择图标。<span class="vi-paraStyle">vi-icon-size</span>指定Icon图标的尺寸，默认值为<span class="vi-paraStyle">default</span>，可选值有<span class="vi-paraStyle">small</span>、<span class="vi-paraStyle">medium</span>、<span class="vi-paraStyle">large</span>。
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <vi-icon vi-icon-name="left" vi-icon-size="small"></vi-icon>
    <vi-icon vi-icon-name="right" vi-icon-size="small"></vi-icon>
    <vi-icon vi-icon-name="download" vi-icon-size="small"></vi-icon>
    <vi-icon vi-icon-name="upload" vi-icon-size="small"></vi-icon>
    <vi-icon vi-icon-name="search" vi-icon-size="small"></vi-icon>
    <vi-icon vi-icon-name="setting" vi-icon-size="small"></vi-icon>   
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
          <td class="formBodyCol">vi-icon-name</td>
          <td class="formBodyCol">设置自定义图标</td>
          <td class="formBodyCol">String</td>
          <td class="formBodyCol">按组件约定设置图标名字</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">vi-icon-size</td>
          <td class="formBodyCol">尺寸</td>
          <td class="formBodyCol">String</td>
          <td class="formBodyCol">default/small/medium/large</td>
          <td class="formBodyCol">default</td>
      </tr>
  </tbody>
</Common-create-form>
</ClientOnly>
