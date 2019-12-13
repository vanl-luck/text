<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" title="社区" fixed :z-index="10">
      <van-icon name="search" slot="right" size="20px"></van-icon>
    </van-nav-bar>
    <div class="nav-con">
      <van-tabs v-model="activeTab" line-width="33%" class="tabs-con">
        <van-tab title="推荐">
          <!--顶部图片-->
          <van-image src="static/img/forum/forum_banner.jpg" class="banner-img"></van-image>
        </van-tab>
        <van-tab title="版块">版块</van-tab>
        <van-tab title="">我的</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: "forum-page",
    data() {
      return {
        activeTab: 0,
      };
    },
  }
</script>

<style scoped>
  .tabs-con {
    padding-top: 0;
  }

  .banner-img {
    width: 100%;
    height: 33vw;
  }
</style>
