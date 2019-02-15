<template>
    <div class="vi-button">
      <vi-button-group>
        <vi-button type="primary" icon-name="left" icon-size=small>上一页</vi-button>
        <vi-button type="primary" icon-name="loading" icon-size=small>上一页</vi-button>
        <vi-button type="primary" icon-name="search" icon-size=small icon-position="right">下一页</vi-button>
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