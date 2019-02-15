<template>
    <div class="vi-layout">
      <div class="toast test">
        <button @click="showToast">点我</button>
        <button @click="showToast1">点我1</button>
        <button @click="showToast2">点我2</button>
        <button @click="showToast3">点我3</button>
        <button @click="showToast4">点我4</button>
    </div>
    </div>
</template>

<script>
import Vue from 'vue'
// import Vue from 'vue/dist/vue.js'
import ToastPlugin from '../../../../src/packages/toast/src/ToastPlugin.js'
Vue.use(ToastPlugin)
// import '../../../../src/main.js'
// import Toast from '../../../../src/packages/toast/src/toast'
// import '../../../../src/packages/toast/src/ToastPlugin.js'

export default {
  components:{
    // 'vi-toast': Toast
  },
  methods: {
    showToast(){
      this.$toast({
        message:'提示信息0',
        icon:{'name':'error','size':"small"},
        autoClose:false
      })
    },
    showToast4(){
      this.$toast({
        message:'提示信息4',
        icon:{'name':'error','size':"small"},
        autoClose:false
      })
    },
    showToast3(){     
      this.$toast({
        message:'提示信息3',
        icon:{'name':'error',size:'small'},
        autoClose:false,
        position: 'bottom'
      })
    },
    showToast1(){
      this.$toast({
        message:'提示信息1',
        duration: 2,
        position: 'middle',
        // autoClose:false
      })
    },
    showToast2(){
      this.$toast({
        message:'提示信息2',
        closeButton:{
          text:'关闭',
          callback(){
            console.log('closeButton')
          }
        },
        autoClose:false,
        position: 'top'
      })
    }
  }
}
</script>
<style scoped>
  hr{
    border:none;
  }
</style>