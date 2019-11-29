<template>
  <el-drawer>
    <div class="input-wrapper">
      <el-date-picker v-model="date" align="left" placeholder="Pick a date:" :picker-options="option">
      </el-date-picker>
      <el-button @click="getNews">Get news</el-button>
    </div>
    <div class="content-wrapper">
      <el-row :gutter="40">
        <el-col :span="12" class="col">
          <el-input type="textarea" v-model="newsContent" class="content" disabled></el-input>
        </el-col>
        <el-col :span="12">
          <el-input type="textarea" v-model="tweetContent" class="content" disabled></el-input>
        </el-col>
      </el-row>
    </div>
  </el-drawer>
</template>

<script>
  export default {
    name: "RetweetOne",
    data: function () {
      return {};
    },
    props: ["name", "show"],
    watch: {
      name: function () {
      }
    }
  }
</script>

<style scoped>

</style>