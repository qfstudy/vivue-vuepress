<template>
    <div class="vi-button">
      <vi-button-group>
        <vi-button type="primary" icon-name="left">上一页</vi-button>
        <vi-button type="primary" icon-name="right" icon-position="right">下一页</vi-button>
      </vi-button-group>
      <hr>
      <vi-button-group>
        <vi-button type="primary" icon-name="edit">编辑</vi-button>
        <vi-button type="primary" icon-name="share">分享</vi-button>
        <vi-button type="primary" icon-name="delete">删除</vi-button>
      </vi-button-group>
    </div>
</template>

<script>
import Button from '../../../../src/packages/button/src/button'
import buttonGroup from '../../../../src/packages/button/src/button-group'
export default {
  components:{
    'vi-button': Button,
    'vi-button-group': buttonGroup
  }
}
</script>
<style scoped>
  hr{
    border:none;
  }
</style>