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
       <input type="file" ref='camera' class="hidden" @change="getBaseUrl($event)"/>
       <input
          cameraDisable
          ref="inputCamera"
          class="inputPhoto"
          type="file"
          accept="image/*"
          capture="camera"
          @change="cameraChange"
        >
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
      actions: [{ name: '拍照', index: 1 }, { name: '从相册中选取', index: 2 }]
    }
  },
  methods: {
    onSelect (item) {
      if (item.index === 1) {
        this.picture()
        // this.$refs.inputCamera.click()
      }
      if (item.index === 2) {
        this.$refs.camera.click()
      }
    },
    getData (v) {
      console.log(v)
    },
    cameraChange (e) {
      const file = e.target.files[0] || e.dataTransfer.files[0]
      console.log(file)
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
      plus.gallery.pick(// eslint-disable-line
        function (path) {
          Toast.loading({
            mask: true,
            message: '加载中...',
            duration: 0
          })
          // self.photoInfo.path = path
          self.compressPhoto(path) // 压缩并写入图片
        },
        function (e) {
          console.log('取消选择图片 ' + JSON.stringify(e))
        },
        {
          filter: 'image'
        }
      )
    },
    picture () {
      this.show = false
      Toast.loading({
        mask: true,
        message: '加载中...',
        duration: 0
      })
      let self = this
      let cmr = plus.camera.getCamera(); // eslint-disable-line
      let res = cmr.supportedImageResolutions[0] // 支持照片的分辨率
      let fmt = cmr.supportedImageFormats[0] // 照片的格式
      cmr.captureImage(function (path) {
        console.log(path)
        // const reader = new FileReader()
        // reader.readAsDataURL(path)
        // reader.onloadend = function () {
        //   const dataURL = reader.result
        //   console.log(dataURL)
        //   let img = new Image()
        //   img.src = dataURL

        //   img.onload = function () {
        //     let data = self.compress(img, 0.3)
        //     self.$set(self.photoInfo, 'path', data)
        //     Toast.clear()
        //   }
        // }
        // self.$set(self.photoInfo, 'path', path)
        // Toast.clear()
        plus.io.resolveLocalFileSystemURL(path, function (entry) { //eslint-disable-line
          console.log(entry.toLocalURL())
          self.$set(self.photoInfo, 'path', entry.toLocalURL())
        }, function (e) { plus.nativeUI.toast('读取拍照文件错误：' + e.message) })//eslint-disable-line
      },
      function (error) {
        Toast('picture error ' + JSON.stringify(error))
      },
      {
        resolution: res,
        format: fmt
      }
      )
    },
    onCancel () {
      Toast('cancel')
    },

    // useless

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
      return new Promise(resolve => {
        const reader = new FileReader()
        reader.readAsDataURL(file.path)
        reader.onload = event => {
          resolve(event.target.result)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped rel="stylesheet/scss">
@import "@/assets/css/transtion.scss";
</style>
