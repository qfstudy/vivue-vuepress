<template>
  <div>
    <vi-tabs :selected.sync="selectedTab">
      <vi-tabs-bar color="teal" space="around" line-color="aqua">
        <vi-tabs-item name="education" icon-name="education">教育</vi-tabs-item>
        <vi-tabs-item name="finance" icon-name="finance">财经</vi-tabs-item>
        <vi-tabs-item name="sports" icon-name="sports">体育</vi-tabs-item>
      </vi-tabs-bar>
      <vi-tabs-body>
        <vi-tabs-content name="education">教育的内容</vi-tabs-content>
        <vi-tabs-content name="finance">财经的内容</vi-tabs-content>
        <vi-tabs-content name="sports">体育的内容</vi-tabs-content>
      </vi-tabs-body>
    </vi-tabs>

    <vi-tabs :selected.sync="selectedTab">
      <vi-tabs-bar color="teal" space="around" line-color="aqua">
        <vi-tabs-item name="education" icon-name="education" position="right">教育</vi-tabs-item>
        <vi-tabs-item name="finance" icon-name="finance" position="right">财经</vi-tabs-item>
        <vi-tabs-item name="sports" icon-name="sports" position="right">体育</vi-tabs-item>
      </vi-tabs-bar>
      <vi-tabs-body>
        <vi-tabs-content name="education">教育的内容</vi-tabs-content>
        <vi-tabs-content name="finance">财经的内容</vi-tabs-content>
        <vi-tabs-content name="sports">体育的内容</vi-tabs-content>
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
      selectedTab:'sports'
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
  .vi-tabs-item{
    color: black;
  }
  .vi-tabs-bar-wrapper{
    width: 500px;
  }
</style>