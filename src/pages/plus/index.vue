<template>
  <div>
    <van-cell title="获取地理位置" is-link to="/plus/getlocation" />
    <van-cell title="保存图片" is-link to="/plus/saveImg" />
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
