<template>
  <div>
    <van-cell title="获取地理位置" is-link to="/plus/getlocation" />
    <van-cell title="保存图片" is-link to="/plus/saveImg" />
    <van-cell title="选择图片" is-link to="/plus/chooseImg" />
    <van-cell title="测试图片用" is-link to="/plus/chooseImg2" />
  </div>
</template>
<script>
export default {
  name:'plus',
  mounted(){
    // this.$nextTick(()=>{
    //   console.log(this)
    // })
  }
}
</script>
