<template>
  <div id="app">
    <el-container>
      <el-header><menubar></menubar></el-header>
      <el-main>
        <main-page></main-page>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
  import Menubar from "@/components/Menubar";
  import MainPage from "@/components/MainPage";
  export default {
    name: 'main',
    components: {MainPage, Menubar},
    data: function () {
      return {}
    }
  }
</script>

<style>
</style>
