import Vue from 'vue'
Vue.config.productionTip = false
import './packages/common/svg'

import Button from './packages/button/src/button'
import Icon from './packages/icon/src/icon'
import ButtonGroup from './packages/button/src/button-group'
import Input from './packages/input/src/input'
import Row from './packages/grid/src/row'
import Col from './packages/grid/src/col'
import Footer from './packages/layout/src/footer'
import Main from './packages/layout/src/main'
import Header from './packages/layout/src/header'
import Container from './packages/layout/src/container'
import Aside from './packages/layout/src/aside'
import Toast from './packages/toast/src/toast'
import ToastPlugin from './packages/toast/src/ToastPlugin.js'
Vue.use(ToastPlugin)
import Tabs from './packages/tabs/src/tabs'
import TabsBar from './packages/tabs/src/tabs-bar'
import TabsItem from './packages/tabs/src/tabs-item'
import TabsBody from './packages/tabs/src/tabs-body'
import TabsContent from './packages/tabs/src/tabs-content'
import Popover from './packages/popover/src/popover'
import Collapse from './packages/collapse/src/collapse'
import CollapseItem from './packages/collapse/src/collapse-item'

Vue.component('vi-button',Button)
Vue.component('vi-icon',Icon)
Vue.component('vi-button-group',ButtonGroup) 
Vue.component('vi-input',Input)
Vue.component('vi-row',Row)
Vue.component('vi-col',Col)
Vue.component('vi-footer',Footer)
Vue.component('vi-main',Main)
Vue.component('vi-header',Header)
Vue.component('vi-container',Container)
Vue.component('vi-aside',Aside)
Vue.component('vi-toast',Toast)
Vue.component('vi-tabs',Tabs)
Vue.component('vi-tabs-bar',TabsBar)
Vue.component('vi-tabs-item',TabsItem)
Vue.component('vi-tabs-body',TabsBody)
Vue.component('vi-tabs-content',TabsContent)
Vue.component('vi-popover',Popover)
Vue.component('vi-collapse',Collapse)
Vue.component('vi-collapse-item',CollapseItem)


new Vue({
  el: '#app',
  data:{
    input1:'in',
    selectedTab:'sport',//tabs组件
    selectedCola: ['2','1'],
    selectedCola1: ['2','3'],
    selectedCola2:['3']
  },
  methods: {
    yyy(){
      console.log('yyy')
    },
    aa(event){
      console.log(52)
      console.log(event)
    },


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
  },
})
