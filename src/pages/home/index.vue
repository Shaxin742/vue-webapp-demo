<template>
  <div class="hello">
    <van-cell title="单元格" is-link to="/shopCart" />
    <van-cell-group>
      <van-cell title="底部弹出" is-link to='/normal/popUp'/>
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
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
  name: 'home',
  methods: {
    jump () {
      this.$router.push('/shopCart')
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
<style lang="scss" scoped>
@import "@/assets/css/transtion.scss";

</style>
