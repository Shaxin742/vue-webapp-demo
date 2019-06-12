<template>
  <transition name="slide">
    <div class="container">
      <head-nav leftValue='返回' @leftClick='back'></head-nav>
      <div>
        <h3>打包后才能看</h3>
        <van-button class="btn" type="primary" @click="show = !show">选择图片</van-button>
      </div>
      <!-- <div v-if="photoInfo.path"> -->
      <!-- <van-image
        width="100"
        height="100"
        lazy-load
        fit="contain"
        :src="photoInfo.path"
      /> -->
      <img :src="photoInfo.path" alt="">
      {{photoInfo.path}}
      <!-- </div> -->
      <van-action-sheet
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        @select="onSelect"
        @cancel="onCancel"
      />
    </div>
  </transition>
</template>
<script>
import headNav from '@/components/headNav'
import { Cell, Button, Toast, ActionSheet, Image } from 'vant'
export default {
  components: {
    [Button.name]: Button,
    [Image.name]: Image,
    [ActionSheet.name]: ActionSheet,
    [Cell.name]: Cell,
    headNav: headNav
  },
  data: function () {
    return {
      show: false,
      photoInfo: {},
      aver: '',
      actions: [
        { name: '拍照', index: 1 },
        { name: '从相册中选取', index: 2 }
      ]
    }
  },
  methods: {
    onSelect (item) {
      if (item.index === 1) {
        this.picture()
      }
      if (item.index === 2) {
        this.album()
      }
    },
    getBase64Image (img) {
      var canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      var ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight)
      var ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase()
      var dataURL = canvas.toDataURL('image/' + ext)
      console.log(dataURL)
      return dataURL
    },
    readFile (file) {
      console.log(1)
      return new Promise(resolve => {
        const reader = new FileReader()
        reader.readAsDataURL(file.path)
        reader.onload = event => {
          resolve(event.target.result)
        }
      })
    },
    album () {
      let self = this
      plus.gallery.pick(function (path) { // eslint-disable-line

        // Toast.loading({
        //   mask: true,
        //   message: '加载中...',
        //   duration: 0
        // })
        // self.photoInfo.path = path
        self.compressPhoto(path) // 压缩并写入图片
      }, function (e) {
        console.log('取消选择图片 ' + JSON.stringify(e))
      }, {
        filter: 'image'
      })
    },
    picture () {
      this.show = false
      // Toast.loading({
      //   mask: true,
      //   message: '加载中...',
      //   duration: 0
      // })
      let self = this
      let cmr = plus.camera.getCamera() // eslint-disable-line
      let res = cmr.supportedImageResolutions[0] // 支持照片的分辨率
      let fmt = cmr.supportedImageFormats[0] // 照片的格式
      cmr.captureImage(function (path) {
        console.log(path)
        // self.photoInfo.path = path
        self.compressPhoto(path) // 压缩并写入图片
      }, function (error) {
        Toast('picture error ' + JSON.stringify(error))
      }, {
        resolution: res,
        format: fmt
      })
    },
    onCancel () {
      Toast('cancel')
    },
    compressPhoto (path) {
      let self = this
      plus.io.resolveLocalFileSystemURL(path, function (entry) {// eslint-disable-line
        let src = entry.toLocalURL()
        console.log('src ' + src)
        let random = Date.parse(new Date())
        /* 压缩图片 */
        plus.zip.compressImage({// eslint-disable-line
          src: src,
          dst: '_doc/signature_' + random + '.jpg',
          overwrite: false, // 是否覆盖源文件
          quality: 100,
          width: '300px',
          height: '360px'
        }, function (zip) {
          let size = zip.size
          console.log(JSON.stringify(zip))
          console.log('filesize:' + zip.size + ',totalsize:' + size)
          if (size > (10 * 1024 * 1024)) {
            Toast('照片大小超出限制')
            return
          }
          Toast.clear()
          self.photoInfo.path = zip.target // 赋值照片文件路径
          self.photoInfo.flag = true
          console.log('文件路径 ' + self.photoInfo.path)
          Toast.clear()
        }, function (zipe) {
          Toast('照片压缩失败')
          Toast.clear()
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped rel="stylesheet/scss">
@import "@/assets/css/transtion.scss";
</style>
