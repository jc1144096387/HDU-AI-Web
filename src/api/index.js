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

// 应用概览里的能力运行概览（近30天）表格 和数据统计里的表格
// params: startDate开始日期、endDate结束日期、productId能力id（不填则查询全部）
export const getApplicationOverviewCapabilityCalling = (appid, params) => {
  return getRequest('/application/'+appid+'/overview/capability-calling', params)
}
// 应用概览里的调用总量（近30天）图表
export const getApplicationOverviewTotalCalling = (appid, params) => {
  return getRequest('/application/'+appid+'/overview/total-calling', params)
}
// 数据分析里的某个能力某段时间的调用次数和耗时 图表
// params: startDate开始日期、endDate结束日期、productId能力id（不填则查询全部）
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


// 获取md文件
export const getMdFile = ( url, params) => {
  return getRequest(url, params)
}

