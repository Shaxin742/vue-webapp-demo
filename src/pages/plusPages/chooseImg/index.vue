<template>
  <transition name="slide">
    <div class="container">
      <head-nav leftValue='返回' @leftClick='back'></head-nav>
      <div>
        <h3>plus方法的打包后才能看 input方法的可以直接看 <code>capture="camera"</code>这个网上说能调用手机相机 但是我的手机都调用不了不知道为啥</h3>
        <van-button class="btn" type="primary" @click="show = !show">选择图片</van-button>
      </div>
      <div v-if="photoInfo.path">
        <van-image
          width="100"
          height="100"
          lazy-load
          fit="contain"
          :src="photoInfo.path"
        />
        <img :src="photoInfo.path" alt="">
      </div>
      <van-action-sheet
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        @select="onSelect"
        @cancel="onCancel"
      />
       <input type="file" ref='camera' class="hidden" @change="getBaseUrl($event)"/>
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
  data: function () {
    return {
      show: false,
      photoInfo: {},
      aver: '',
      actions: [
        { name: '拍照', index: 1 },
        { name: '从相册中选取', index: 2 },
        { name: 'input方法', index: 3 }
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
      if (item.index === 3) {
        this.$refs.camera.click()
      }
    },
    getBaseUrl (e) {
      Toast.loading({
        mask: true,
        message: '加载中...',
        duration: 0
      })
      var self = this
      self.show = false
      const file = e.target.files[0] || e.dataTransfer.files[0]
      console.log(JSON.stringify(file))
      const reader = new FileReader()
      reader.readAsDataURL(file) // 读出 base64
      reader.onloadend = function () {
        const dataURL = reader.result
        console.log(dataURL)

        let img = new Image()
        img.src = dataURL

        img.onload = function () {
          let data = self.compress(img, 0.3)
          self.$set(self.photoInfo, 'path', data)
          Toast.clear()
        }
      }
    },
    compress (img, size) {
      let canvas = document.createElement('canvas')
      let ctx = canvas.getContext('2d')
      let width = img.width
      let height = img.height
      canvas.width = width
      canvas.height = height
      // 铺底色
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, width, height)
      // 进行最小压缩
      let ndata = canvas.toDataURL('image/jpeg', size)
      console.log('*******压缩后的图片大小*******')
      // console.log(ndata)
      console.log(ndata.length / 1024)
      return ndata
    },
    album () {
      let self = this
      plus.gallery.pick(function (path) { // eslint-disable-line
        Toast.loading({
          mask: true,
          message: '加载中...',
          duration: 0
        })
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
      Toast.loading({
        mask: true,
        message: '加载中...',
        duration: 0
      })
      let self = this
      let cmr = plus.camera.getCamera() // eslint-disable-line
      let res = cmr.supportedImageResolutions[0] // 支持照片的分辨率
      let fmt = cmr.supportedImageFormats[0] // 照片的格式
      cmr.captureImage(function (path) {
        console.log(path)
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
          // self.photoInfo.path = zip.target // 赋值照片文件路径
          self.$set(self.photoInfo, 'path', zip.target)
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
h3{
  font-size: 14px;
  padding: 0 20px;
  font-weight: normal;
  text-indent: 2em;
  color: #666;
}
</style>
