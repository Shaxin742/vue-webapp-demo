import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'pageTransition',
    redirect: '/',
    component: () => import('@/components/pageTransition'),
    children: [{
      path: '/',
      name: 'home',
      component: () => import('@/pages/home')
    }, {
      path: '/shopCart',
      name: 'shopCart',
      component: () => import('@/pages/shopCart')
    }]
  }]
})
