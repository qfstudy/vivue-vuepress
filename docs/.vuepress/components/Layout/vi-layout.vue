<template>
    <div class="vi-layout">
      <vi-container>
        <vi-header>header</vi-header>
        <vi-main>main</vi-main>
        <vi-footer>footer</vi-footer>
      </vi-container>
      <vi-container>
        <vi-aside>aside</vi-aside>
        <vi-container>
          <vi-header>header</vi-header>
          <vi-main>main</vi-main>
          <vi-footer>footer</vi-footer>
        </vi-container>
      </vi-container>
    </div>
</template>

<script>
import Aside from '../../../../src/packages/layout/src/aside'
import Container from '../../../../src/packages/layout/src/container'
import Footer from '../../../../src/packages/layout/src/footer'
import Header from '../../../../src/packages/layout/src/header'
import Main from '../../../../src/packages/layout/src/main'
export default {
  components:{
    'vi-aside': Aside,
    'vi-container': Container,
    'vi-footer': Footer,
    'vi-header': Header,
    'vi-main': Main,
  }
}
</script>
<style scoped>
  hr{
    border:none;
  }
</style>