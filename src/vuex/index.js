import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  userInfo: null,
  token: null
};

const getters = {
//   setUserInfo(state){
//     if(!state.userInfo){
//         state.userInfo = JSON.parse(localStorage.getItem('user'))
//     }
//     return state.userInfo
// }

};

const mutations = {
  setUserInfo(state, data) {
    state.userInfo = data;
  },
  baseUrl(state, data) {
    state.url = data
    console.log(data);
  },
  TokenInfo:(state,data) => {
    state.token = data;
    localStorage.setItem('token',JSON.stringify(data));
},
// LOGOUT:(state) => {
//     state.userInfo = null;
//     localStorage.removeItem('userInfo');
// }
};

const actions = {};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
