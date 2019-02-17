<template>
  <div class="vi-layout">
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
    <hr>
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
  </div>
</template>

<script>
import Button from '../../../../src/packages/button/src/button'
import Popover from '../../../../src/packages/popover/src/popover'
export default {
  components:{
    viPopover: Popover,
    viButton: Button
  }
}
</script>
<style scoped>
  hr{
    border:none;
  }
</style>