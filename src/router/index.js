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
      path: '',
      name: 'tabbar',
      component: () => import('@/pages/tabbar'),
      redirect: '/home',
      children: [{
        path: '/home',
        name: 'home',
        component: () => import('@/pages/tabbar/home')
      }, {
        path: '/plus',
        name: 'plus',
        component: () => import('@/pages/tabbar/plus')
      }, {
        path: '/comp',
        name: 'comp',
        component: () => import('@/pages/tabbar/sxcomponents')
      }, {
        path: '/mine',
        name: 'mine',
        component: () => import('@/pages/tabbar/mine')
      }]
    },
    {
      path: '/shopCart',
      name: 'shopCart',
      meta: { name: '購物車圖片' },
      component: () => import('@/pages/shopCart')
    },
    {
      path: '/plus/saveImg',
      name: 'saveImg',
      meta: { name: '保存圖片' },
      component: () => import('@/pages/plusPages/saveImg')
    },
    {
      path: '/plus/chooseImg',
      name: 'chooseImg',
      meta: { name: '添加圖片' },
      component: () => import('@/pages/plusPages/chooseImg')
    },
    {
      path: '/plus/chooseImg2',
      name: 'chooseImg2',
      meta: { name: '添加圖片2' },
      component: () => import('@/pages/plusPages/chooseImg2')
    },
    {
      path: '/plus/getlocation',
      name: 'getlocation',
      meta: { name: '獲取地理位置' },
      component: () => import('@/pages/plusPages/getlocation')
    },
    {
      path: '/normal/popUp',
      name: 'popUp',
      meta: { name: '彈出' },
      component: () => import('@/pages/normalPages/popUp')
    },
    {
      path: '/normal/shanghua',
      name: 'shanghua',
      meta: { name: '上劃' },
      component: () => import('@/pages/normalPages/shanghua')
    },
    {
      path: '/sxComponents/chat',
      name: 'chat',
      meta: { name: '聊天' },
      component: () => import('@/pages/sxComponents/chat')
    }
  ]
})
