<template>
  <div id="app">
    <keep-alive>
      <router-view class="childView" :style="{minHeight:clientHeight+'px'}"/>
    </keep-alive>
  </div>
</template>

<script>
import { plusReady } from '@/util/common'
import { Toast } from 'vant'
export default {
  name: 'App',
  created () {
    plusReady(this.plusReady)
    this.clientHeight = document.body.clientHeight
  },
  data: function () {
    return {
      clientHeight: '',
      currentRoute: ''
    }
  },
  methods: {
    plusReady () {
      const pages = ['/', '/plus']
      var num = 0
      plus.key.addEventListener( //eslint-disable-line
        'backbutton',
        function () {
          if (pages.indexOf(window.location.href.split('#')[1]) > -1) {
            num += 1
            Toast({message: '再次点击退出', position: 'bottom'})
            if (num > 1) {
              plus.runtime.quit(); //eslint-disable-line
            }
            setTimeout(() => {
              num = 0
            }, 1000)
          } else {
            window.history.back()
          }
        },
        false
      )
    }
  }
}
</script>
