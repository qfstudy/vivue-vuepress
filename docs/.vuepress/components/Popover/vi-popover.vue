<template>
  <div class="vi-layout">
    <!-- <div class="popover" style="padding: 50px;border: 1px solid greenyellow;"> -->
      <vi-popover position="top">
        <template slot="content">
          <div>popover内容popover内容popover内容popover内容popover内容popover内容popover内容popover内容popover内容popover内容popover内容popover内容</div>
        </template>
        <vi-button type="primary">点击</vi-button>
      </vi-popover>
      <vi-popover position="bottom">
        <template slot="content">
          <div>popoverhjkfdhforiegjiiogjjjjjjjjjjjjjjkdf</div>
        </template>
        <vi-button>点击</vi-button>
      </vi-popover>
      <vi-popover position="left">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <vi-button type="primary">点击</vi-button>
      </vi-popover>
      <vi-popover position="right">
        <template slot="content">
          <div>popover内容popover内容popover内容</div>
        </template>
        <vi-button type="primary">点击</vi-button>
      </vi-popover>
    <!-- </div> -->
    <hr>
    <!-- <div class="popover" style="overflow: hidden;padding-top: 50px;border: 1px solid greenyellow;"> -->
      <vi-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>popover内容popover内容popover内容popover内容popover内容popover内容popover内容popover内容popover内容popover内容popover内容popover内容</div>
        </template>
        <vi-button type="primary">点击</vi-button>
      </vi-popover>
      <vi-popover trigger="hover">
        <template slot="content" >
          <div>popoverhjkfdhforiegjiiogjjjjjjjjjjjjjjkdf</div>
        </template>
        <vi-button>点击</vi-button>
      </vi-popover>
      <vi-popover position="left" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <vi-button type="primary">点击</vi-button>
      </vi-popover>
      <vi-popover position="right" trigger="hover">
        <template slot="content">
          <div>popover内容popover内容popover内容</div>
        </template>
        <vi-button type="primary">点击</vi-button>
      </vi-popover>
    <!-- </div> -->
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