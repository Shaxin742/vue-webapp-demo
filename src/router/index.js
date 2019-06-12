import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'tabbar',
      component: () => import('@/pages/tabbar')
    }, {
      path: '/shopCart',
      name: 'shopCart',
      component: () => import('@/pages/shopCart')
    }, {
      path: '/plus/saveImg',
      name: 'saveImg',
      component: () => import('@/pages/plusPages/saveImg')
    }, {
      path: '/plus/chooseImg',
      name: 'chooseImg',
      component: () => import('@/pages/plusPages/chooseImg')
    }, {
      path: '/plus/chooseImg2',
      name: 'chooseImg2',
      component: () => import('@/pages/plusPages/chooseImg2')
    }, {
      path: '/plus/getlocation',
      name: 'getlocation',
      component: () => import('@/pages/plusPages/getlocation')
    }, {
      path: '/normal/popUp',
      name: 'popUp',
      component: () => import('@/pages/normalPages/popUp')
    }
  ]
})
