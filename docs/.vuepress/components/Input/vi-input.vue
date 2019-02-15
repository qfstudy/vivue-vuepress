<template>
    <div class="vi-input">
      <vi-input placeholder="prefix" suffix-icon="info"></vi-input>
      <vi-input placeholder="prefix" prefix-icon="info"></vi-input>
      <vi-input placeholder="suffix" clearable suffix-icon="error"></vi-input>
      <vi-input placeholder="suffix"></vi-input>
      <vi-input placeholder="请输入内容" readonly></vi-input>
      <vi-input placeholder="请输入内容"></vi-input>
      <vi-input disabled placeholder="禁止修改"></vi-input>
    </div>
</template>

<script>
import Input from '../../../../src/packages/input/src/input'
export default {
  components:{
    'vi-input': Input
  }
}
</script>
<style scoped>
  hr{
    border:none;
  }
</style>