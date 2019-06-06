<template>
<transtion name='fade'>
  <div>
    <head-nav leftValue='AA' @leftClick='leftClick' @rightClick='leftClick'></head-nav>
    <div>
      <img v-lazy="imgUrl" alt=""/>
      <img src="@/assets/img/home.jpg" alt="">
    </div>
    <van-button type="primary" @click="saveImg">保存图片</van-button>
  </div>
</transtion>
</template>
<script>
import { Button, Toast } from 'vant'
import headNav from '@/components/headNav'
export default {
  components: {
    [Button.name]: Button,
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
    },
    leftClick () {
      Toast('123')
    }
  }
}
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
