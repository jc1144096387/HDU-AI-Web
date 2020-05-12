import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  // {
  //   path: '/',
  //   name: 'main',
  //   redirect: '/login',
  //   component: Main,
  //   children:[
  //     {
  //       path: '/home',
  //       name: 'home',
  //       component: () => import('@/views/main/main-views/home/Home.vue')
  //     },
  //     // 侧边栏部分
  //     {
  //       path: '/user-manage',
  //       name: 'user-manage',
  //       component: () => import('@/views/main/main-views/user-manage/UserManage.vue')
  //     },
  //     // {
  //     //   path: '/goods-manage',
  //     //   name: 'goods-manage',
  //     //   component: () => import('@/views/main/main-views/goods-manage/GoodsManage.vue')
  //     // },
  //     // {
  //     //   path: '/order-manage',
  //     //   name: 'order-manage',
  //     //   component: () => import('@/views/main/main-views/order-manage/OrderManage.vue')
  //     // },
  //     // {
  //     //   path: '/type-manage',
  //     //   name: 'type-manage',
  //     //   component: () => import('@/views/main/main-views/type-manage/typeManage.vue')
  //     // },
      
  //     {
  //       path: '/worker-manage',
  //       name: 'worker-manage',
  //       component: () => import('@/views/main/main-views/worker-manage/WorkerManage.vue')
  //     },
  //     {
  //       path: '/picture-record',
  //       name: 'picture-record',
  //       component: () => import('@/views/main/main-views/picture-record/PictureRecord.vue')
  //     },
  //     // {
  //     //   path: '/video-monitor',
  //     //   name: 'video-monitor',
  //     //   component: () => import('@/views/main/main-views/video-monitor/VideoMonitor.vue')
  //     // },
  //   ]
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: Login,
  // }

  // 登录页
  {
    path: '/login',
    name: 'login',
    component:  () => import('@/views/login/login.vue')
  },
  // 注册页
  {
    path: '/regist',
    name: 'regist',
    component:  () => import('@/views/regist/regist.vue')
  },
  // 首页
  {
    path: '/',
    name: 'home',
    component:  () => import('@/views/front/home/home.vue')
  },
  // 技术介绍页
  {
    path: '/product',
    name: 'product',
    component:  () => import('@/views/front/product/product.vue')
  },
  // 文档中心页
  {
    path: '/doc',
    name: 'doc',
    component:  () => import('@/views/front/doc/home.vue')
  },
  // 文档详情页
  {
    path: '/doc/detail',
    name: 'doc-detail',
    component:  () => import('@/views/front/doc/detail.vue')
  },

  // 控制台首页
  {
    path: '/console',
    redirect: '/console/home'
  },
  {
    path: '/console/home',
    name: 'console-home',
    component:  () => import('@/views/console/home/home.vue')
  },
  // 控制台账号信息
  {
    path: '/console/user/account-info',
    name: 'account-info',
    component:  () => import('@/views/console/user/account-info.vue')
  },
  // 控制台创建应用
  {
    path: '/console/application/create-app',
    name: 'create-app',
    component:  () => import('@/views/console/application/create-app.vue')
  },
  // 控制台应用详情
  {
    path: '/console/application/detail',
    redirect: '/console/application/detail/overview',
    name: 'application-detail',
    component:  () => import('@/views/console/application/detail.vue'),
    children:[
      {
        path: 'overview',
        name: 'overview',
        component: () => import('@/views/console/application/detail/overview.vue')
      },
      {
        path: 'data-analysis',
        name: 'data-analysis',
        component: () => import('@/views/console/application/detail/data-analysis.vue')
      },
      {
        path: 'data-info',
        name: 'data-info',
        component: () => import('@/views/console/application/detail/data-info.vue')
      },
    ]
  },
  // 控制台-能力库-首页
  {
    path: '/console/capability/overview',
    name: 'capability-overview',
    component:  () => import('@/views/console/capability/overview.vue')
  },
  // 控制台-能力库-详情页
  {
    path: '/console/capability/detail',
    name: 'capability-detail',
    component:  () => import('@/views/console/capability/detail.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
