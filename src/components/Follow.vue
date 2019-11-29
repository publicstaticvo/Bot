<template>
  <el-drawer :visible.sync="show" direction="rtl"
             :before-close="handleClose">
    <div slot="title">
      <p class="dialog-title">
        <b>Find people to follow</b>
        <el-button type="primary" style="float: right" @click="updateList">Update</el-button>
      </p>
    </div>
  </el-drawer>
</template>

<script>
  import axios from 'axios';
  
  export default {
    name: "Follow",
    data() {
      return {
        listData: [],
      };
    },
    props: ["name", "show"],
    watch: {
      name: function () {
      }
    },
    methods: {
      handleClose() {
        this.$emit('closeFollow');
      },
      updateList() {
        const limit = 8;
        this.listData.length = 0;
        this.listData.sort();
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        while (this.listData.length < limit) {
          axios.post("http://166.111.5.228:5010/to_follow/get_random", { num: 20}).then(
            response => {
              axios.post("http://166.111.5.228:5010/to_follow/beta", response.data.data).then(
                response => {
                  let scores = response.data.data.score;
                  let labels = response.data.data.label;
                  for(let key in scores) {
                    if (labels[key] === 0) break;
                    this.listData.append({
                      name: key,
                      score: scores.key,
                      label: labels.key
                    });
                  }
                  this.listData.sort((a, b) => {
                    return b.score - a.score;
                  });
                }
              ).catch(() => {
                this.$message.error("Request Failed! on rq2!");
              });
            }).catch(() => {
              this.$message.error("Request Failed on rq1!");
          });
        }
        this.listData.length = 8;
      },
    }
  }
</script>

<style>
  .dialog-title {
    font-size: 22px;
    height: 40px;
    line-height: 40px;
    margin: 0;
  }
</style>