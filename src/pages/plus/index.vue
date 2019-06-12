<template>
  <div>
    <van-cell title="获取地理位置" is-link to="/plus/getlocation" />
    <van-cell title="保存图片" is-link to="/plus/saveImg" />
    <van-cell title="选择图片" is-link to="/plus/chooseImg" />
    <van-cell title="选择图片2" is-link to="/plus/chooseImg2" />
  </div>
</template>
<script>
import { Cell, CellGroup, Toast } from 'vant'
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
}
</script>
