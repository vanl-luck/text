import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import MainPage from '../view/main/MainPage';
import TabHome from '../view/main/tabs/TabHome';
import TabProducts from '../view/main/tabs/TabProducts';
import TabDiscover from '../view/main/tabs/TabDiscover';
import TabMine from '../view/main/tabs/TabMine';

const SettingsPage = r => require.ensure([], () => r(require('../view/mine/SettingsPage')), 'SettingsPage');
const IFrameWebPage = r => require.ensure([], () => r(require('../view/common/IFrameWebPage')), 'IFrameWebPage');
const money = r => require.ensure([], () => r(require('../view/mine/money')), 'money');
const detail = r => require.ensure([], () => r(require('../view/mine/detail')), 'detail');
const consume = r => require.ensure([], () => r(require('../view/mine/consume')), 'consume');
const service = r => require.ensure([], () => r(require('../view/mine/service')), 'service');
const modification = r => require.ensure([], () => r(require('../view/mine/modification')), 'modification');
const TestCasePage = r => require.ensure([], () => r(require('../view/mine/TestCasePage')), 'TestCasePage');
const ForumPage = r => require.ensure([], () => r(require('../view/discover/ForumPage')), 'ForumPage');
const addMine = r => require.ensure([], () => r(require('../view/mine/addMine')), 'addMine');
const selectExamineRecord = r => require.ensure([], () => r(require('../view/mine/selectExamineRecord')), 'selectExamineRecord');

const withdraw = r => require.ensure([], () => r(require('../view/mine/withdraw')), 'withdraw');
const aboutUs = r => require.ensure([], () => r(require('../view/mine/aboutUs')), 'aboutUs');

const MessagePage = r => require.ensure([], () => r(require('../view/mine/MessagePage')), 'MessagePage');
const MessageDetail = r => require.ensure([], () => r(require('../view/mine/MessageDetail')), 'MessageDetail');
const test = r => require.ensure([], () => r(require('../view/mine/test')), 'test');
const ProductDetail = r => require.ensure([], () => r(require('../view/product/ProductDetail')), 'ProductDetail');
const register = r => require.ensure([], () => r(require('../view/login/register')), 'register');
const LoginPage = r => require.ensure([], () => r(require('../view/login/LoginPage')), 'LoginPage');
const GestureCreate = r => require.ensure([], () => r(require('../view/login/GestureCreate')), 'GestureCreate');
const basic = r => require.ensure([], () => r(require('../view/main/setting/basic')), 'basic'); 

const routes = [
  {path: '*', redirect: '/LoginPage'},
  {
    name: 'main', redirect: '/main/home', component: MainPage,
    children: [
      {name: 'home', path: 'home', component: TabHome, meta: {keepAlive: true}},
      {name: 'products', path: 'products', component: TabProducts, meta: {keepAlive: true}},
      {name: 'discover', path: 'discover', component: TabDiscover, meta: {keepAlive: true}},
      {name: 'mine', path: 'mine', component: TabMine, meta: {keepAlive: true}},
    ], meta: {keepAlive: true}
  },
  {name: 'basic', component: basic},
  {name: 'register', component: register},
  {name: 'LoginPage', component: LoginPage},
  {name: 'test', component: test},
  {name: 'GestureCreate', component: GestureCreate},
  {name: 'SettingsPage', component: SettingsPage},
  {name: 'IFrameWebPage', component: IFrameWebPage},
  {name: 'TestCasePage', component: TestCasePage},
  {name: 'modification', component: modification},
  {name: 'money', component: money},
  {name: 'service', component: service},
  {name: 'consume', component: consume},
  {name: 'detail', component: detail},
  {name: 'selectExamineRecord', component: selectExamineRecord},
  {name: 'aboutUs', component: aboutUs},
  
  {name: 'ForumPage', component: ForumPage},
  {name: 'addMine', component: addMine},  
  {name: 'withdraw', component: withdraw},
  
  {name: 'MessagePage', component: MessagePage},
  {name: 'ProductDetail', component: ProductDetail},
  {name: 'MessageDetail', component: MessageDetail},
];

// 懒得写path，给他们自动生成一个，和name同名
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new VueRouter({routes});

// 生命周期之前
router.beforeEach((to, from, next) => {
  // 保存个路由来路，以备不时之需
  // .setItem('fromPage', from.name);
  let token = localStorage.getItem("user")
if (!token && to.path !== '/LoginPage' && to.path !== "/register") {
    next('/LoginPage');
} else {
    next();
}
  // next();
});



//生命周期之后
router.afterEach((to, from) => {
  // 滑动到顶吧
  window.scrollTo(0, 0);
});

export default router;
