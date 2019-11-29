<template>
  <div class="aside-wrapper">
    <div class="account-wrapper" v-if="name">
      <el-avatar icon="el-icon-user-solid" class="avatar"></el-avatar>
      <p style="font-size: 24px">{{name}}</p>
      <p style="font-size: 16px">{{following}}&nbsp;Following&nbsp;&nbsp;&nbsp;{{followers}}&nbsp;Followers</p>
      <el-menu text-color="#303133" active-text-color="#303133">
        <el-menu-item class="item" @click="showFollow = true">Follow</el-menu-item>
        <el-menu-item class="item">Tweet</el-menu-item>
        <el-submenu class="item">
          <template slot="title">Retweet</template>
          <el-menu-item class="item">From Weibo</el-menu-item>
          <el-menu-item class="item">From Twitter</el-menu-item>
        </el-submenu>
        <el-menu-item class="item">Reply</el-menu-item>
      </el-menu>
      <follow :name="name" :show="showFollow" @closeFollow="showFollow = false"></follow>
      <retweet-one></retweet-one>
    </div>
  </div>
</template>

<script>
  import Follow from "@/components/Follow";
  import RetweetOne from "@/components/RetweetOne";
  export default {
    name: "Bot",
    components: {RetweetOne, Follow},
    data() {
      return {
        following: 0,
        followers: 0,
        showFollow: false,
      };
    },
    props: ['name'],
    watch: {
      name() {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .account-wrapper {
    border-right: 1px solid #e0e0e0;
  }
  .el-avatar {
    width: 56px !important;
    height: 56px !important;
    line-height: 56px !important;
  }
  .avatar {
    font-size: 30px !important;
  }
  .item {
    display: block;
    
  }
</style>