<template>
  <div class="vi-layout">
    <vi-container>
      <vi-header>header</vi-header>
      <vi-main>main</vi-main>
    </vi-container>
    <hr>
    <vi-container>
      <vi-header>header</vi-header>
      <vi-main>main</vi-main>
      <vi-footer>footer</vi-footer>
    </vi-container>
    <hr>
    <vi-container>
      <vi-aside width="200px">Aside</vi-aside>
      <vi-main>Main</vi-main>
    </vi-container>
    <hr>
    <vi-container>
      <vi-header>Header</vi-header>
      <vi-container>
        <vi-aside width="200px">Aside</vi-aside>
        <vi-main>Main</vi-main>
      </vi-container>
    </vi-container>
    <hr>
    <vi-container>
      <vi-header>Header</vi-header>
      <vi-container>
        <vi-aside width="200px">Aside</vi-aside>
        <vi-container>
          <vi-main>Main</vi-main>
          <vi-footer>Footer</vi-footer>
        </vi-container>
      </vi-container>
    </vi-container> 
    <hr>
    <vi-container>
      <vi-aside width="200px">Aside</vi-aside>
      <vi-container>
        <vi-header>Header</vi-header>
        <vi-main>Main</vi-main>
      </vi-container>
    </vi-container>
    <hr>
    <vi-container>
      <vi-aside width="200px">Aside</vi-aside>
      <vi-container>
        <vi-header>Header</vi-header>
        <vi-main>Main</vi-main>
        <vi-footer>Footer</vi-footer>
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
    border: none;
  }
  .vi-header, .vi-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .vi-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .vi-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .vi-container {
    margin-bottom: 40px;
  }
</style>