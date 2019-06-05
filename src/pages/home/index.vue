<template>
  <div class="hello">
    <div>
    <img v-lazy="imgUrl" alt=""/>
    <img src="@/assets/img/home.jpg" alt="">
    </div>
    <van-button  type="primary" @click="saveImg">保存图片</van-button>
    <van-button type="default" @click="getLocation">获取地理位置</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <router-link to="/shopCart">shopCart</router-link>
  </div>
</template>

<script>
import { Button, Cell, CellGroup, Toast } from 'vant'
export default {
  components: {
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  name: 'HelloWorld',
  data () {
    return {
      imgUrl: 'http://qiniudns.shaxin741.vip/timg.jpg'
    }
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
    },
    saveImg () {
      var dtask = plus.downloader.createDownload(this.imgUrl, {}, function (// eslint-disable-line
        d,
        status
      ) {
        // 下载完成
        if (status === 200) { // mui.toast("下载成功,文件保存在"+d.filename)
          plus.gallery.save(// eslint-disable-line
            d.filename,
            function () {
              // 保存到相册方法
              plus.nativeUI.closeWaiting() // eslint-disable-line
              Toast('已保存到手机相册')
            },
            function () {
              plus.nativeUI.closeWaiting() // eslint-disable-line
              Toast('保存失败，请重试！')
            }
          )
        } else {
          Toast('下载失败')
        }
      })
      dtask.start()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
}
</style>
