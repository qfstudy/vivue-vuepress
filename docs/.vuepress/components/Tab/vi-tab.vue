<template>
  <div class="vi-layout">
    <vi-tabs class="tabs" :selected.sync="selectedTab">
      <vi-tabs-bar color="teal" space="around" line-color="aqua">
        <vi-tabs-item name="woman" line-color="aqua">标签1</vi-tabs-item>
        <vi-tabs-item name="finance" line-color="aqua">标签2</vi-tabs-item>
        <vi-tabs-item name="sport" line-color="aqua">标签3</vi-tabs-item>
      </vi-tabs-bar>
      <vi-tabs-body>
        <vi-tabs-content name="woman">标签1的内容</vi-tabs-content>
        <vi-tabs-content name="finance">标签2的内容</vi-tabs-content>
        <vi-tabs-content name="sport">标签3的内容</vi-tabs-content>
      </vi-tabs-body>
    </vi-tabs>
    <vi-tabs class="tabs" :selected.sync="selectedTab">
      <vi-tabs-bar color="teal" space="between" line-color="aqua"> 
        <vi-tabs-item name="woman" icon-name="loading" icon-size="small">标签1</vi-tabs-item>
        <vi-tabs-item name="finance" icon-name="loading" icon-size="small">标签2</vi-tabs-item>
        <vi-tabs-item name="sport" icon-name="loading" icon-size="small">标签3</vi-tabs-item>
      </vi-tabs-bar>
      <vi-tabs-body>
        <vi-tabs-content name="woman">标签1的内容</vi-tabs-content>
        <vi-tabs-content name="finance">标签2的内容</vi-tabs-content>
        <vi-tabs-content name="sport">标签3的内容</vi-tabs-content>
      </vi-tabs-body>
    </vi-tabs>
    <vi-tabs class="tabs" :selected.sync="selectedTab">
      <vi-tabs-bar color="teal" space="center" line-color="aqua">
        <vi-tabs-item name="woman" icon-name="search" icon-size="large" position="right">标签1</vi-tabs-item>
        <vi-tabs-item name="finance" icon-name="search" icon-size="large" position="right">标签2</vi-tabs-item>
        <vi-tabs-item name="sport" icon-name="search" icon-size="large" position="right">标签3</vi-tabs-item>
      </vi-tabs-bar>
      <vi-tabs-body>
        <vi-tabs-content name="woman">标签1的内容</vi-tabs-content>
        <vi-tabs-content name="finance">标签2的内容</vi-tabs-content>
        <vi-tabs-content name="sport">标签3的内容</vi-tabs-content>
      </vi-tabs-body>
    </vi-tabs>
  </div>
</template>

<script>
import tabsBar from '../../../../src/packages/tabs/src/tabs-bar'
import tabsBody from '../../../../src/packages/tabs/src/tabs-body'
import tabsContent from '../../../../src/packages/tabs/src/tabs-content'
import tabsItem from '../../../../src/packages/tabs/src/tabs-item'
import Tabs from '../../../../src/packages/tabs/src/tabs'
export default {
  data(){
    return{
      selectedTab:'sport'
    }
  },
  components:{
    'vi-tabs-bar': tabsBar,
    'vi-tabs-body': tabsBody,
    'vi-tabs-content': tabsContent,
    'vi-tabs-item': tabsItem,
    'vi-tabs': Tabs,
  }
}
</script>
<style scoped>
  hr{
    border:none;
  }
</style>