<template>
  <el-container>
    <el-aside><bot :name="clickName"></bot></el-aside>
    <el-main></el-main>
  </el-container>
</template>

<script>
  //import * as d3 from 'd3';
  import Bot from "@/components/Bot";
  export default {
    name: "MainPage",
    components: {Bot},
    data: function () {
      return {
        clickName: 'dogcatbirdspet',
      };
    }
  }
</script>

<style scoped>

</style>