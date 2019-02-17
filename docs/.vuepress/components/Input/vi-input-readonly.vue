<template>
    <div class="vi-input">
      <vi-input placeholder="请输入内容" v-model="input4" readonly></vi-input>
    </div>
</template>

<script>
import Input from '../../../../src/packages/input/src/input'
export default {
  data(){
    return{
      input4: ''
    }
  },
  components:{
    viInput: Input
  }
}
</script>