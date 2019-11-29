<template>
  <div id="app">
    <el-container>
      <el-header><menubar></menubar></el-header>
      <el-main>
        <el-container>
          <el-aside><bot :name="clickName"></bot></el-aside>
          <el-main><main-page></main-page></el-main>
        </el-container>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
  import Menubar from "@/components/Menubar";
  import MainPage from "@/components/MainPage";
  import Bot from "@/components/Bot";
  export default {
    name: 'main',
    components: {Bot, MainPage, Menubar},
    data: function () {
      return {
        clickName: '',
      }
    }
  }
</script>

<style>
</style>
