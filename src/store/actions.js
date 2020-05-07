import {
  getUserInfo,
  getProductList,
  getApplicationList,
} from "@/api/index";
import { getStore, setStore } from '@/libs/storage';

// 获取用户信息
export const getUserInfoAction = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    getUserInfo().then(res => {
      console.log(res);
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
      console.log(res);
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
    getApplicationList().then(res => {
      console.log(res);
      if(res.success){
        commit('SET_APP_LIST', res.result);
        resolve(res);
      }else{
        commit('SET_APP_LIST', "");
        reject(res);
      }
    })
  });
}

// // 获取商品类型列表
// export const getGoodsTypeList = ({ commit }, data) => {
//   return new Promise((resolve, reject) => {
//     getAllBookType().then(res => {
//       commit('SET_GOODS_TYPE_LIST', res);
//     })
//   });
// }
// // 获取热销商品列表
// export const getHotGoodsList = ({ commit }, data) => {
//   return new Promise((resolve, reject) => {
//     getHotBook().then(res => {
//       commit('SET_HOT_GOODS_LIST', res);
//     })
//   });
// }
// // 添加购物车
// export const addShoppingCart = ({ commit }, data) => {
//   const item = {
//     bookId: data.bookId,
//     num: data.num
//   };
//   return new Promise((resolve, reject) => {
//     insertCart(item).then(res => {
//       if (res.code == 0) {
//         commit('ADD_SHOPPING_CART', item);
//         resolve(true);
//       } else {
//         resolve(false);
//       }
//     });
//   });
// };
// // 获取购物车商品
// export const loadShoppingCart = ({ commit }) => {
//   return new Promise((resolve, reject) => {
//     getCart().then(res => {
//       console.log("购物车商品：", res.data);
//       commit('SET_SHOPPING_CART', res.data);
//     });
//   });
// };
// // 修改购物车商品
// export const editShoppingCart = ({ commit }, data) => {
//   return new Promise((resolve, reject) => {
//     updatetCart(data.params).then(res => {
//       console.log("修改购物车商品", res);
//       commit('EDIT_SHOPPING_CART', data);
//     });
//   });
// };
// // 删除购物车
// export const deleteShoppingCart = ({ commit }, data) => {
//   return new Promise((resolve, reject) => {
//     deleteCart(data.params).then(res => {
//       console.log("删除购物车商品", res);
//       if (res.code == 0) {
//         commit('DELETE_SHOPPING_CART', data.index);
//       }
//     });
//   });
// };

// // 加载收货地址
// export const loadAddress = ({ commit }) => {
//   return new Promise((resolve, reject) => {
//     getAddress().then(res => {
//       console.log("加载收货地址:",res);
//       if (res.code == 0) {
//         commit('SET_USER_ADDRESS', res.data);
//       }else{
//         commit('SET_USER_ADDRESS', null);
//       }
//     });
//   });
// };
// // 删除收货地址
// export const delAddress = ({ commit }, data) => {
//   return new Promise((resolve, reject) => {
//     deleteAddress(data).then(res => {
//       if (res.code === 0) {
//         resolve(true);
//       } else {
//         resolve(false);
//       }
//     });
//   });
// };
// // 修改收货地址
// export const editAddress = ({ commit }, data) => {
//   return new Promise((resolve, reject) => {
//     updateAddress(data).then(res => {
//       if (res.code === 0) {
//         resolve(true);
//       } else {
//         resolve(false);
//       }
//     });
//   });
// };
// // 添加收货地址
// export const addAddress = ({ commit }, data) => {
//   return new Promise((resolve, reject) => {
//     insertAddress(data).then(res => {
//       if (res.code === 0) {
//         resolve(true);
//       } else {
//         resolve(false);
//       }
//     });
//   });
// };

// // 获取订单
// export const getOrder = ({ commit },params) => {
//   return new Promise((resolve, reject) => {
//     commit('SET_LOAD_STATUS',true);
//     getOrderByUserIdUnVisit(params).then(res => {
//       console.log("获取订单列表：", res);
//       if (res.code === 0) {
//         // 遍历订单列表，得到每个订单的商品详情
//         (async function(){
//           for(let i = 0; i < res.data.order_detail.length; i++){
//             // getOrderDetailByOrderId({orderId: res.data.order_detail[i].id}).then(res2 =>{
//             //   if(res2.code == 0){
//             //     console.log("获取订单商品详情："+res.data.order_detail[i].id,res2);
//             //     res.data.order_detail[i].goodsList = res2.detail;
//             //     commit('SET_USER_ORDER_INFO', res.data);
//             //     console.log("整合订单商品详情：",res.data);
//             //   }
//             // })
//             res.data.order_detail[i].goodsList = await getOrderAsync({orderId: res.data.order_detail[i].id});
//           }
//           // todo: 修改为for循环并发，然后等全部结束后赋值
//           commit('SET_USER_ORDER_INFO', res.data);
//           console.log("整合订单商品详情：",res.data);
//           commit('SET_LOAD_STATUS',false);
//         })()
//       }
//     });
//   });
// };

// function getOrderAsync(params){
//   return new Promise(resolve =>{
//     getOrderDetailByOrderId(params).then(res2 =>{
//       if(res2.code == 0){
//         console.log("获取订单商品详情："+params.orderId,res2);
//         resolve(res2.detail);
//         // res.data.order_detail[i].goodsList = res2.detail;
//         // commit('SET_USER_ORDER_INFO', res.data);
//         // console.log("整合订单商品详情：",res.data);
//       }
//     })
//   })
  
// }



// // 判断登陆有没有过期
// export const isExp = () => {
//   return new Promise((resolve, reject) => {
//     let info = localStorage.getItem('info');
//     if (!info) {
//       resolve(false);
//       return;
//     }
//     info = JSON.parse(info);
//     const now = new Date().getTime();
//     if (info.exp > now) {
//       resolve(true);
//       return;
//     }
//     resolve(false);
//   });
// };










// // // 按标签获取商品
// // export const getGoodsByName = ({ commit }, data) => {
// //   commit('SET_LOAD_STATUS', true);
// //   return new Promise((resolve, reject) => {
// //     baseApi.goodsList(data).then(res => {
// //       console.log(res.data.result);
// //       commit('SET_GOODS_INFO_BY_NAME', res.data.result.data);
// //       commit('SET_LOAD_STATUS', false);
// //     });
// //   });
// // };

// // // 获取商家的商品
// // export const getGoodsByMerchantId = ({ commit }, data) => {
// //   commit('SET_LOAD_STATUS', true);
// //   return new Promise((resolve, reject) => {
// //     baseApi.goodsList(null, data).then(res => {
// //       console.log(res.data.result);
// //       commit('SET_GOODS_INFO_BY_MERCHANT_ID', res.data.result.data);
// //       commit('SET_LOAD_STATUS', false);
// //     });
// //   });
// // };

// // // 生成订单
// // export const addOrder = ({ commit }, data) => {
// //   return new Promise((resolve, reject) => {
// //     userApi.addOrder(data).then(res => {
// //       if (res.data.rcode === 0) {
// //         resolve(true);
// //         commit('REMOVE_SHOPPING_CART', data.cart);
// //       } else {
// //         resolve(false);
// //       }
// //     });
// //   });
// // };


