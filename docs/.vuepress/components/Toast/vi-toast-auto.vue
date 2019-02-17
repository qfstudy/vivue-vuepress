<template>
    <div class="vi-layout">
      <div class="toast test">
        <button @click="showToast">点击</button>
        <button @click="showToast1">点击</button>
        <button @click="showToast2">点击</button>
    </div>
    </div>
</template>

<script>
import Vue from 'vue'
import ToastPlugin from '../../../../src/packages/toast/src/ToastPlugin.js'
Vue.use(ToastPlugin)

export default {
  components:{
  },
  methods: {
    showToast(){
      this.$toast({
        message:'提示信息',
        duration: 2
      })
    },
    showToast1(){
      this.$toast({
        message:'提示信息',
        position: 'middle',
        duration: 2
      })
    },
    showToast2(){     
      this.$toast({
        message:'提示信息',
        position: 'bottom',
        duration: 2
      })
    }
  }
}
</script>