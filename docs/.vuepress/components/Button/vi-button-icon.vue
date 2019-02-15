<template>
    <div class="vi-button">
      <vi-button type="primary" icon-name="upload" >上传</vi-button>
      <vi-button type="primary" icon-name="upload" >上传</vi-button>
      <vi-button type="primary" icon-name="upload" >上传</vi-button>
      <vi-button type="primary" icon-name="upload" >上传</vi-button>
      <vi-button type="primary" icon-name="upload" >上传</vi-button>
      <vi-button type="primary" icon-name="upload" >上传</vi-button>
      <hr>
      <vi-button type="primary" icon-name="search" icon-position="right">搜索</vi-button>
      <vi-button type="primary" icon-name="search" icon-position="right">搜索</vi-button>
      <vi-button type="primary" icon-name="search" icon-position="right">搜索</vi-button>
      <vi-button type="primary" icon-name="search" icon-position="right">搜索</vi-button>
      <vi-button type="primary" icon-name="search" icon-position="right">搜索</vi-button>
      <vi-button type="primary" icon-name="search" icon-position="right">搜索</vi-button>
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