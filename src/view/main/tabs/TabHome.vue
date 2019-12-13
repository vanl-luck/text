<template>
  <div class="img-responsive">
    <img :src="imgSrc" alt="">
  </div>
</template>

<script>
  export default {
    name: "tab-home",
    data() {
      return {
        imgSrc: ''
      };
    },
    methods: {
      getImg() {
        this.$http.post(`api/user/invitation`, {
          userId: JSON.parse(localStorage.getItem('user')).id
        }).then(res => {
          if (res.data.code == 200) {
            this.imgSrc = res.data.data
            // this.allData = res.data.data.list
          } else {
            this.$toast("网络错误");
          }
        })
      }
    },
    created() {
      this.getImg()
    }
  }

</script>

<style scoped lang="scss">
  .img-responsive {
    max-width: 100%;

    background-color: #fef9ff;
    /*背景色*/

  }

  .img-responsive img {
    width: 100%;
    height: inherit;
  }

</style>
