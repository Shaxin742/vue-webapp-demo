<template>
  <transition name="slide">
    <div class="container">
      <head-nav leftValue='返回' @leftClick='back'></head-nav>
      <div>
        <img v-lazy="imgUrl" alt=""/>
        <img src="@/assets/img/home.jpg" alt="">
        <van-image
          width="100"
          height="100"
          lazy-load
          fit="contain"
          :src="imgUrl"
        />
      </div>
      <van-button class="btn" type="primary" @click="saveImg">保存图片</van-button>
    </div>
  </transition>
</template>
<script>
import { Button, Toast, Image } from 'vant'
import headNav from '@/components/headNav'
export default {
  components: {
    [Button.name]: Button,
    [Image.name]: Image,
    headNav: headNav
  },
  data: function () {
    return {
      imgUrl: 'http://qiniudns.shaxin741.vip/timg.jpg'
    }
  },
  name: 'saveImg',
  methods: {
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
<style lang="scss" scoped rel="stylesheet/scss">
@import "@/assets/css/transtion.scss";
img {
  width: 100%;
}
</style>
