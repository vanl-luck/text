<template>
  <div class="topBack">
    <van-nav-bar left-arrow @click-left="_routerBack" title="关于我们" fixed :z-index="10"></van-nav-bar>
    <div class="textTop textLeft" style="margin-top:50px">

      <!-- <h3 style="text-align:center;">中信安美汇</h3> -->
      <div>
        花果山医美颜究社聚合医美生态参与者，以能和利他为宗旨，重构医美新消费生态结构，优化医美专属版图的全域营销体系，加速推动医疗机构场景营销革命，同时弘扬国潮东方美学理念，真正的让消费者受益，让医美行业收获更多正能量评价

      </div>

        <div class="img-responsive">

        <!-- <img src="../../../static/img/product/微信图片_20191219102916.jpg" alt=""> -->
           <!-- <img src="../../../static/img/product/微信图片_20191219103811.jpg" alt=""> -->
        </div>
     
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }

</script>
<style lang="scss" scoped>
  .textTop {
    text-align: left;
     .img-responsive img {
    width: 100%;
    height: inherit;
  }
  }
        .textLeft{
            margin:5px 20px;
        }

</style>
