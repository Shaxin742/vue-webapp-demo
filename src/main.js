// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import FastClick from 'fastclick'
import touch from 'vue-directive-touch'
import 'vant/lib/index.css'
Vue.use(touch) // 左滑返回
FastClick.attach(document.body)
FastClick.prototype.onTouchEnd = function (event) {
  if (event.target.hasAttribute('type') && event.target.getAttribute('type') === 'text') {
    event.preventDefault()
    return false
  }
}

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './static/img/error.jpg',
  loading: './static/img/loading.gif',
  attempt: 1
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: g => g(App)
})
