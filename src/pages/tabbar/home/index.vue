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
export default {
  name: 'dash'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/css/transtion.scss";

</style>
