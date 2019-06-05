// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
// Vue.use(Vant);
import 'vant/lib/index.css'
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
