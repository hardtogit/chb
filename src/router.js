import Vue from 'vue'
import Router from 'vue-router'
import InfoManage from './views/infoManage/index'
import MonitoringDate from './views/infoManage/monitoringDate'
import TourDate from './views/infoManage/tourDate'
import InstrumentDate from './views/infoManage/instrumentDate'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/infoManage',
      name: 'infoManage',
      component: InfoManage,
      children: [
        { path: '/', redirect: '/infoManage/monitoringDate' },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/infoManage/monitoringDate',
          component: MonitoringDate
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/infoManage/tourDate',
          component: TourDate
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/infoManage/instrumentDate',
          component: InstrumentDate
        }
      ]
    },
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
