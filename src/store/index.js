import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null, // 用户信息
    
    productList: [],// 技术引擎产品列表

    appList: [],// 用户的应用列表

  },
  getters,
  actions,
  mutations
});
