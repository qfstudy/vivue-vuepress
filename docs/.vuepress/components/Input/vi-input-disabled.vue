<template>
    <div class="vi-input">
      <vi-input placeholder="请输入内容" v-model="input1" disabled></vi-input>
    </div>
</template>

<script>
import Input from '../../../../src/packages/input/src/input'
export default {
    data() {
      return {
        input1: ''
      }
  },
  components:{
    viInput: Input
  }
}
</script>
<style scoped>
</style>