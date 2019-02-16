<template>
    <div class="vi-button">
      <vi-button type="primary" icon-name="upload">上传</vi-button>
      <vi-button type="primary" icon-name="download">下载</vi-button>
      <vi-button type="primary" icon-name="search">搜索</vi-button>
      <vi-button type="primary" icon-name="share">分享</vi-button>
      <vi-button type="primary" icon-name="edit">编辑</vi-button>
      <vi-button type="primary" icon-name="delete">删除</vi-button>
      <hr>
      <vi-button type="primary" icon-name="upload" icon-position="right">上传</vi-button>
      <vi-button type="primary" icon-name="download" icon-position="right">下载</vi-button>
      <vi-button type="primary" icon-name="search" icon-position="right">搜索</vi-button>
      <vi-button type="primary" icon-name="share" icon-position="right">分享</vi-button>
      <vi-button type="primary" icon-name="edit" icon-position="right">编辑</vi-button>
      <vi-button type="primary" icon-name="delete" icon-position="right">删除</vi-button>
    </div>
</template>

<script>
import Button from '../../../../src/packages/button/src/button'
export default {
    components:{
        'vi-button': Button
    }
}
</script>
<style scoped>
    hr{
        border:none;
    }
</style>