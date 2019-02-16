<template>
    <div class="vi-input">
      <vi-row class="row">
        <vi-col class="col" :span="24">
          <div class="grid-content bg-purple-dark">gfg</div>
        </vi-col>
      </vi-row>
      <vi-row class="row"  :gutter="20">
        <vi-col class="col" :span="12">
          <div class="grid-content bg-purple">dd</div>
        </vi-col>
        <vi-col class="col" :span="12">
          <div class="grid-content bg-purple-light">s</div>
        </vi-col>
      </vi-row>
    </div>
</template>

<script>
import Col from '../../../../src/packages/grid/src/col'
import Row from '../../../../src/packages/grid/src/row'
export default {
  components:{
    viCol: Col,
    viRow: Row
  }
}
</script>
<style scoped>
  hr{
    border:none;
  }
</style>