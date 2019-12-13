<template>
  <div id="app">
    <!--缓存的页面-->
 
    <!--不缓存的页面-->
    <router-view >
    </router-view>
  </div>
</template>

<script>
  export default {
    name: "app",
    mounted() {
      this.loadUserInfo();
    },
    methods: {
      loadUserInfo() {
        try {
          // 读取用户信息
          let infoStr = localStorage.getItem('userInfo');
          if (infoStr) {
            let info = JSON.parse(infoStr);
            this.$store.commit('setUserInfo', info);
          }
        } catch (e) {
        }
      },
    },
  }
</script>


<style scoped lang="scss">
  #app {
    background-color: #f7f7f7;
    height: 93vh;
  }
</style>
