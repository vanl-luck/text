<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" :title="$t('settings')" fixed :z-index="10"></van-nav-bar>
    <!--内容区-->
    <div class="nav-con-16">
      <van-cell-group>
        <van-cell title="基本资料" icon="info-o"  size="large" @click="onVersionClick" is-link>
        </van-cell>
        <van-cell title="修改密码" icon="edit"  size="large"
                  @click="_routePush('modification')" is-link>
        </van-cell>
           <van-cell title="提款账号" icon="after-sale"  size="large"
                  @click="_routePush('money')" is-link>
        </van-cell>
           <van-cell title="退出登录" style="text-align:center;" size="large"
                  @click="clear" >
        </van-cell>
        <!-- <van-cell title="手势密码设置" icon="warning-o" size="large" @click="_routePush('GestureCreate')" is-link> -->
        </van-cell>
      </van-cell-group>
    </div>

  </div>
</template>

<script>
  import 'vant/lib/radio/index.less'

  export default {
    name: "settings-page",
    data() {
      return {
        versionName: 'V ' + pack.PACK_VERSION,
        currentLang: this.$i18n.locale,
        showLangPop: false,
 
        versionClickTime: 0,
      };
    },
    methods: {
      clear(){
        localStorage.clear()  
        this. _routePush('LoginPage')
      },
      onLangChange(val) {
        this.showLangPop = false;
        window.localStorage.setItem('language', val);
        this.$i18n.reload();
      },
      onLangClick() {
        this.showLangPop = true;
      },
      onVersionClick() {
  
          this._routePush('TestCasePage');
      },
    }
  }
</script>

<style scoped>
  .lang-pop {
    width: 80%;
    padding: 10px;
    border-radius: 8px;
  }
</style>
