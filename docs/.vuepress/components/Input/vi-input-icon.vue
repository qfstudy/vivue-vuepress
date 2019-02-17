<template>
    <div class="vi-input">
      <vi-input placeholder="请输入内容" suffix-icon="edit" v-model="input3"></vi-input>
      <vi-input placeholder="请输入内容" prefix-icon="search" v-model="input3"></vi-input>
      <hr>
      <vi-input placeholder="请输入内容" suffix-icon="edit" v-model="input3"></vi-input>
      <vi-input placeholder="请输入内容" prefix-icon="search" v-model="input3"></vi-input>
    </div>
</template>

<script>
import Input from '../../../../src/packages/input/src/input'
export default {
  data(){
    return{
      input3: ''
    }
  },
  components:{
    viInput: Input
  }
}
</script>
<style scoped>
  hr{
    border:none;
  }
</style>