// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import FastClick from 'fastclick' // 去除手机端点击300ms
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import '@/assets/css/common.scss'
import '@/assets/css/global.scss'
// import '@/util/vconsole.min.js'
import '@/assets/iconfont/iconfont.scss'
import store from './store'
import Vant from 'vant'
FastClick.attach(document.body)
FastClick.prototype.onTouchEnd = function (event) {
  if (event.target.hasAttribute('type') && event.target.getAttribute('type') === 'text') {
    event.preventDefault()
    return false
  }
}

Vue.use(Vant)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './static/img/error.jpg',
  loading: './static/img/loading.gif',
  attempt: 1
})
Vue.config.productionTip = false

Vue.prototype.back = function () {
  router.go(-1)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
