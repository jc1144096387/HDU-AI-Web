// 统一请求路径前缀在libs/axios.js中修改
import { getRequest, postRequest, putRequest, deleteRequest, importRequest, uploadFileRequest } from '@/libs/axios';


// 用户登录
export const userLogin = (params) => {
  return postRequest('/common/login', params)
}
// 用户注册
export const userRegister = (params) => {
  return postRequest('/common/register', params)
}

// 获取技术引擎的产品列表
export const getProductList = (params) => {
  return getRequest('/common/productList', params)
}
// 获取技术引擎的详情
export const getProductDetail = (value, params) => {
  return getRequest('/common/product/'+value, params)
}

// 获取应用列表
export const getApplicationList = (params) => {
  return getRequest('/application/list', params)
}
// 获取应用的详情
export const getApplicationDetail = (appid, params) => {
  return getRequest('/application/'+appid+'/data-info', params)
}
// 应用信息编辑
export const editApplication = (appid, params) => {
  return postRequest('/application/'+appid+'/data-info', params)
}
// 创建应用
export const createApplication = (params) => {
  return postRequest('/application/create-app', params)
}
// 删除应用
export const deleteApplication = (params) => {
  return postRequest('/application/delete-app', params)
}

// 获取某个应用的已接入能力列表
export const getApplicationCapability = (appid, params) => {
  return getRequest('/application/'+appid+'/capability', params)
}
// 为某个应用接入能力
export const accessCapability = (appid, params) => {
  return postRequest('/application/'+appid+'/capability', params)
}

// 控制台首页的已接入能力表格（未分页）
export const getApplicationMyCapability = (params) => {
  return getRequest('/application/myCapabilityList', params)
}

// 应用概览里的调用总量（近30天）
export const getApplicationOverviewCapabilityCalling = (appid, params) => {
  return getRequest('/application/'+appid+'/overview/capability-calling', params)
}
// 应用概览里的调用总量（近30天）
export const getApplicationOverviewTotalCalling = (appid, params) => {
  return getRequest('/application/'+appid+'/overview/total-calling', params)
}
// 数据分析里的某个能力某段时间的调用次数和耗时
export const getApplicationDataCalling = (appid, params) => {
  return getRequest('/application/'+appid+'/data-calling', params)
}

// 某个能力已接入的应用的列表
export const getApplicationAccessList = (productId, params) => {
  return getRequest('/application/'+productId+'/applicationList', params)
}


// 获取账号信息
export const getUserInfo = (appid, params) => {
  return getRequest('/user/account-info', params)
}
// 编辑账号信息
export const editUserInfo = (params) => {
  return postRequest('/user/account-info', params)
}

// /*
// ** 用户相关api
// */

// // 用户登录
// export const userLogin = (params) => {
//   return postRequest('/user/login', params)
// }
// // 用户名是否可用
// export const checkUserName = (params) => {
//   return getRequest('/user/checkUserName', params)
// }
// // 邮箱是否可用
// export const checkEmail = (params) => {
//   return getRequest('/user/checkEmail', params)
// }
// // 注册
// export const insertUser = (params) => {
//   return getRequest('/user/insert', params)
// }
// // 更改密码
// export const changePassword = (params) => {
//   return getRequest('/user/changePassword', params)
// }
// // 忘记密码
// export const forgetPassword = (params) => {
//   return getRequest('/user/forget', params)
// }
// // 获取分页的用户信息列表
// export const getAllUser = (params) => {
//   return getRequest('/user/all', params)
// }

// /*
// ** 验证码相关api
// */
// // 发验证码
// export const sendEmail = (params) => {
//   return getRequest('/validate/sendEmail', params)
// }
// // 检查验证码
// export const checkCode = (params) => {
//   return getRequest('/validate/checkCode', params)
// }

// /*
// ** 地址相关api
// */
// // 增加用户收货地址
// export const insertAddress = (params) => {
//   return getRequest('/address/insert', params)
// }
// // 修改用户收货地址
// export const updateAddress = (params) => {
//   return getRequest('/address/update', params)
// }
// // 删除用户收货地址
// export const deleteAddress = (params) => {
//   return getRequest('/address/delete', params)
// }
// // 查询用户收货地址
// export const getAddress = (params) => {
//   return getRequest('/address/select', params)
// }


// /*
// ** 商品相关api
// */

// // 获取商品 多条件分页
// export const getbookListData = (params) => {
//   return getRequest('/book/all', params)
// }
// // 根据输入ID获取该书籍的信息
// export const getbookById = (params) => {
//   return getRequest('/book/id', params)
// }
// // 查询指定类型的书籍信息
// export const getbookByType = (params) => {
//   return getRequest('/book/type', params)
// }
// // 根据输入的hint进行模糊查询
// export const getbookByHint = (params) => {
//   return getRequest('/book/hint', params)
// }

// // 根据输入的书籍ID和change值对书籍的数量进行+change值的操作
// export const changeBook = (params) => {
//   return getRequest('/book/change', params)
// }
// // 更新数据库中书籍信息
// export const updateBook = (params) => {
//   return getRequest('/book/update', params)
// }
// // 添加书籍信息
// export const insertBook = (params) => {
//   return getRequest('/book/insert', params)
// }

// // 获取销售量最多的20本书籍
// export const getHotBook = (params) => {
//   return getRequest('/book/hot', params)
// }
// // 获取数据库中书籍的所有类型
// export const getAllBookType = (params) => {
//   return getRequest('/book/showAllType', params)
// }
// // 新增类型
// export const addBookType = (params) => {
//   return getRequest('/book/addNewType', params)
// }
// // 删除类型
// export const deleteBookType = (params) => {
//   return getRequest('/book/deleteType', params)
// }


// /*
// ** 购物车相关api
// */
// // 添加到购物车
// export const insertCart = (params) => {
//   return getRequest('/cart/insert', params)
// }
// // 删除购物车
// export const deleteCart = (params) => {
//   return getRequest('/cart/delete', params)
// }
// // 修改购物车中的一条记录
// export const updatetCart = (params) => {
//   return getRequest('/cart/update', params)
// }
// // 显示该用户的所以购物车记录
// export const getCart = (params) => {
//   return getRequest('/cart/select', params)
// }


// /*
// ** 订单相关api
// */
// // 添加订单
// export const insertOrder = (params) => {
//   return getRequest('/order/insert', params)
// }
// // 用户设置为订单不可见
// export const hideOrder = (params) => {
//   return getRequest('/order/hide', params)
// }
// // 用户删除订单
// export const deleteOrder = (params) => {
//   return getRequest('/order/delete', params)
// }
// // 用户显示所有订单
// export const getOrderByUserIdUnVisit = (params) => {
//   return getRequest('/order/findByUserIdUnVisit', params)
// }

// // 显示订单详情
// export const getOrderDetailByOrderId = (params) => {
//   return getRequest('/order/detailOfOrder', params)
// }


// // 显示所有订单：后台管理表格
// export const getAllOrder = (params) => {
//   return getRequest('/order/all', params)
// }
// // 将订单标志为已发货：后台管理点击发货按钮
// export const executeOrder = (params) => {
//   return getRequest('/order/execute', params)
// }
// // 以下四项通过修改搜素栏，增加一个搜索选项，让用户选择搜索方式
// // 显示未发货的订单
// export const getUnFinishOrder = (params) => {
//   return getRequest('/order/unFinish', params)
// }
// // 根据订单ID获取信息-后台管理员使用
// export const getOrderById = (params) => {
//   return getRequest('/order/findById', params)
// }
// // 显示某一用户的所有订单-后台管理员使用
// export const getOrderByUserId = (params) => {
//   return getRequest('/order/findByUserId', params)
// }
// // 显示某一时间的所有订单-后台管理员使用
// export const getOrderByTime = (params) => {
//   return getRequest('/order/findByTime', params)
// }


// // 用户登录
// export const userLogin = (params) => {
//   return postRequest('/user/login', params)
// }
// // 获取分页的用户信息列表
// export const getAllUser = (params) => {
//   return getRequest('/user/getByCondition', params)
// }
// // 添加用户
// export const addUser = (params) => {
//   return postRequest('/user/add', params)
// }
// // 编辑用户
// export const editUser = (params) => {
//   return postRequest('/user/edit', params)
// }
// // 删除用户
// export const deleteUser = (ids, params) => {
//   return deleteRequest(`/user/delByIds/${ids}`, params)
// }


// // 获取工人列表
// export const getWorkerListData = (params) => {
//   return getRequest('/name/getByCondition', params)
// }
// // 添加工人
// export const addWorker = (params) => {
//   return postRequest('/name/add', params)
// }
// // 编辑工人
// export const editWorker = (params) => {
//   return postRequest('/name/edit', params)
// }
// // 删除工人
// export const deleteWorker = (ids, params) => {
//   return deleteRequest(`/name/delByIds/${ids}`, params)
// }



// // 获取图片记录列表
// export const getRecordListData = (params) => {
//   return getRequest('/record/getByCondition', params)
// }
// // 删除图片记录
// export const deleteRecord = (ids, params) => {
//   return deleteRequest(`/record/delByIds/${ids}`, params)
// }
// // 对记录进行扣费
// export const dealWithRecord = (id, params) => {
//   return getRequest(`/record/dealWithRecordById/${id}`, params)
// }