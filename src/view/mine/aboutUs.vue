<template>
  <div class="topBack">
    <van-nav-bar left-arrow @click-left="_routerBack" title="关于我们" fixed :z-index="10"></van-nav-bar>
    <div class="textTop textLeft" style="margin-top:50px">

      <h3 style="text-align:center;">中信安美汇</h3>
      <p>
        <p >1: 资本背景</p>
            
        <p >    中信安美汇由中信集团旗下投资品牌，研究院获得台湾资方1.6亿的初始投资，并到账两千万元人民币；配套4000万固定资产包括60余套高材生人才公寓；</p>
        <p >2. 安全保障</p>
        <p >
              安美汇与中国大地保险CICC达成战略合作，该注册资本150亿，属于央企子公司，并获得CICC全国唯一指定授权企业，授权安美汇为“医疗美容保险投保受理.鉴定.理赔”的中国唯一标准执行企业，与中石化集团，中石油集团，中国移动，中国联通并称。
        </p>

        <p >3. 资金安全</p>
        <p >

             安美汇与广东建设银行总行达成战略合作，委托广东建设银行为中信安美汇线上产业链上下游唯一支付结算机构和指定资金托管业务机构；并为用户提供线上消费分期授信业务，信用卡办理业务，联合发卡，商业担保授信等
        </p>
        <p >4.团队优势</p>
          <p >
              安美汇整合了由上海、广州、深圳、福建、贵阳、惠州、广西、四川、在内百余家医院共同开发建设，迎合当下市场潮流，顺应时代趋势，运用了当下最为先进的商业模式和为全产业赋能的美业生态消费体系，为全产业上下游提供更高效，良性的经营战略，重塑行业新生态，制定行业新标准；快速成为中国美业生态链第一平台；
        </p>
        <div class="img-responsive">

        <!-- <img src="../../../static/img/product/微信图片_20191219102916.jpg" alt=""> -->
           <!-- <img src="../../../static/img/product/微信图片_20191219103811.jpg" alt=""> -->
        </div>
      </p>
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
