<template>
  <div class="header">
    <el-menu class="menubar" default-active="0" mode="horizontal"
             background-color="#fff" text-color="#303133" active-text-color="#303133">
      <el-menu-item class="font">Settings</el-menu-item>
      <el-menu-item class="font">Manual</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "Menubar"
  }
</script>

<style>
  .header {
    height: 60px;
  }
  .menubar {
    width: 220px;
    position: absolute;
    left: 70%;
  }
  .font {
    font-size: 18px !important;
  }
</style>