<template>
  <div class="topBack">
    <van-nav-bar left-arrow @click-left="_routerBack" title="关于我们" fixed :z-index="10"></van-nav-bar>
    <div class="textTop textLeft" style="margin-top:50px">



        <div class="img-responsive" v-for="(item,index) in dataImg" :key="index">
<img :src="item" alt="">
        </div>
     
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
dataImg:[
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_01.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_02.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_03.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_04.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_05.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_06.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_07.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_08.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_09.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_01.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_10.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_11.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_12.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_13.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_14.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_15.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_16.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_17.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_18.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_19.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_20.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_21.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_22.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_23.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_24.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_25.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_26.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_27.png',
'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/1/%E8%8A%B1%E6%9E%9C%E5%B1%B1%E5%8C%BB%E7%BE%8E%E7%A0%94%E7%A9%B6%E7%A4%BE(1)_28.png',
]
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
