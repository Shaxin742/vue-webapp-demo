<template>
  <transition name="slide">
    <div class="container">
      <head-nav leftValue='返回' @leftClick='back'></head-nav>
      <div>
        <van-button class="btn" type="primary" @click="getLocation()">获取地理位置</van-button>
      </div>
    </div>
  </transition>
</template>
<script>
import { Toast } from 'vant'
import headNav from '@/components/headNav'
export default {
  components: {
    headNav: headNav
  },
  methods: {
    getLocation () {
      plus.geolocation.getCurrentPosition( // eslint-disable-line
        function (p) {
          Toast(
            'Geolocation\nLatitude:' +
              p.coords.latitude +
              '\nLongitude:' +
              p.coords.longitude +
              '\nAltitude:' +
              p.coords.altitude
          )
        },
        function (e) {
          Toast('Geolocation error: ' + e.message)
        }
      )
    }
  }
}
</script>
<style lang="scss" scoped rel="stylesheet/scss">
@import "@/assets/css/transtion.scss";
</style>
