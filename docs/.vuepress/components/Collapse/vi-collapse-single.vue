<template>
  <div class="vi-layout">
    <vi-collapse :selected.sync="selectedCola1" single>
      <vi-collapse-item title="标题1" name="1">内容1</vi-collapse-item>
      <vi-collapse-item title="标题2" name="2">内容2</vi-collapse-item>
      <vi-collapse-item title="标题3" name="3">内容3</vi-collapse-item>
    </vi-collapse>
  </div>
</template>

<script>
import Collapse from '../../../../src/packages/collapse/src/collapse'
import collapseItem from '../../../../src/packages/collapse/src/collapse-item'
export default {
  data(){
    return{
      selectedCola: ['1','2'],
      selectedCola1: ['1']
    }
  },
  components:{
    viCollapse: Collapse,
    viCollapseItem: collapseItem
  }
}
</script>
<style scoped>
  hr{
    border:none;
  }
</style>