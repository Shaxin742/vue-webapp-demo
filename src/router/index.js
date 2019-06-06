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
      redirect: '/',
      component: () => import('@/components/tabbar'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/pages/home')
        }, {
          path: '/plus',
          name: 'plus',
          component: () => import('@/pages/plus')
        }
      ]
    }, {
      path: '/shopCart',
      name: 'shopCart',
      component: () => import('@/pages/shopCart')
    }, {
      path: '/plus/saveImg',
      name: 'saveImg',
      component: () => import('@/pages/plusPages/saveImg')
    }
  ]
})
