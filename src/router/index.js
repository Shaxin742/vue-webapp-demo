import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
export default new Router({
  routes: [
    // {
    // path: '/',
    // name: 'pageTransition',
    // redirect: '/',
    // component: () => import('@/components/pageTransition'),
    // children: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home')
    }, {
      path: '/shopCart',
      name: 'shopCart',
      component: () => import('@/pages/shopCart')
    }
    //   ]
    //   }
  ]
})
