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

  // 首页
  {
    path: '/',
    name: 'home',
    component:  () => import('@/views/front/home/home.vue')
  },
  // 技术介绍页
  {
    path: '/',
    name: 'home',
    component:  () => import('@/views/front/detail/detail.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
