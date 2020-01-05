<template>
  <div class="img-responsive">
    <img :src="imgSrc" alt="">
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
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
          }else if(res.data.code==100){
            Toast('未缴费用户');
            this.$router.push('mine')
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
