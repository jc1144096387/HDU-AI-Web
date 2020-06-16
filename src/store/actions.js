import {
  getUserInfo,
  getProductList,
  getApplicationList,
  getApplicationCapability,
} from "@/api/index";
import { getStore, setStore } from '@/libs/storage';

// 获取用户信息
export const getUserInfoAction = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    getUserInfo().then(res => {
      console.log("获取用户信息",res);
      if(res.success){
        console.log(res.result)
        commit('SET_USER_INFO', res.result);
        resolve(res);
      }else{
        commit('SET_USER_INFO', "");
        reject(res);
      }
    })
  });
}

// 获取技术引擎产品列表
export const getProductListAction = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    getProductList().then(res => {
      console.log("获取技术引擎产品列表",res);
      if(res.success){
        commit('SET_PRODUCT_LIST', res.result);
        resolve(res);
      }else{
        commit('SET_PRODUCT_LIST', "");
        reject(res);
      }
    })
  });
}

// 获取用户的应用列表
export const getApplicationListAction = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    getApplicationList().then(async res => {
      console.log("获取用户的应用列表",res);
      if(res.success){
        // 获取每个应用的已接入能力列表
        for(let i = 0; i < res.result.length; i ++){
          let capabilityList = await getApplicationCapability(res.result[i].id);
          res.result[i].capabilityList = capabilityList.result;
        }
        commit('SET_APP_LIST', res.result);
        resolve(res);
        console.log(res);
      }else{
        commit('SET_APP_LIST', "");
        reject(res);
      }
    })
  });
}


// 获取某个应用的已接入能力列表
export const getApplicationCapabilityAction = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    getApplicationCapability().then(res => {
      console.log("获取某个应用的已接入能力列表",res);
      if(res.success){
        resolve(res);
      }else{
        reject(res);
      }
    })
  });
}


