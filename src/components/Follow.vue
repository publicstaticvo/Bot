<template>
  <div class="follow-wrapper">
    <el-table :data="userData">
      <el-table-column prop="name" label="Name" min-width="50%" align="center"></el-table-column>
      <el-table-column prop="score" label="Score" min-width="15%" align="center"></el-table-column>
      <el-table-column label="Follow" min-width="20%" align="center">
        <template slot-scope="scope">
          <el-button :type="state" v-show="scope.row.label">FOLLOW</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "Follow",
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