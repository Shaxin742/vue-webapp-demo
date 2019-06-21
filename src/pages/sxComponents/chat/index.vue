<template>
  <div class="cu-chat">
    <head-nav leftValue='返回' @leftClick='back'></head-nav>
    <div class="cu-item self">
      <div class="main">
        <div class="content bg-green shadow">
          <span>喵喵喵！！喵！喵喵喵！</span>
        </div>
      </div>
      <div class="cu-avatar radius">
        <img src="http://qiniudns.shaxin741.vip/lufei.jpg" alt="">
      </div>
      <div class="date">2018年3月23日 13:23</div>
    </div>
    <div class="cu-info round">对方撤回一条消息!</div>
      <div class="cu-item">
        <div class="cu-avatar radius">
           <img src="http://qiniudns.shaxin741.vip/lufei.jpg" alt="">
        </div>
        <div class="main">
          <div class="content shadow">
            <span>喵喵喵！喵喵喵！</span>
          </div>
        </div>
        <div class="date "> 13:23</div>
      </div>
      <div class="cu-info">
        <span class="cuIcon-roundclosefill color-red "></span> 对方拒绝了你的消息
      </div>
    <div  class="cu-info">
      对方开启了好友验证，你还不是他(她)的好友。请先发送好友验证请求，对方验证通过后，才能聊天。
      <span class="color-blue">发送好友验证</span>
    </div>
    <div class="cu-item self">
      <div class="main">
        <img src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" class="radius" mode="widthFix"/>
      </div>
      <div class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></div>
      <div class="date"> 13:23</div>
    </div>
    <div class="cu-item self">
    <div class="main">
      <div class="action color-bold color-grey">
        3"
      </div>
      <div class="content shadow">
        <!-- <span class="cuIcon-sound  padding-right-xl"> </span> -->
        <!-- <van-icon name="chat" /> -->
        <i class="iconfont icon-wpvoice"></i>
      </div>
    </div>
    <div class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></div>
    <div class="date">13:23</div>
  </div>
  <div class="cu-item self">
    <div class="main">
      <div class="action">
        <span class="cuIcon-locationfill color-orange "></span>
      </div>
      <div class="content shadow">
        喵星球，喵喵市
      </div>
    </div>
    <div class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></div>
    <div class="date">13:23</div>
  </div>
  <div class="cu-item">
    <div class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></div>
    <div class="main">
      <div class="content shadow">
       @#$^&**
      </div>
      <div class="action color-grey">
        <span class="cuIcon-warnfill color-red "></span> <span class="color-sm margin-left-sm">翻译错误</span>
      </div>
    </div>
    <div class="date">13:23</div>
  </div>
  </div>
</template>
<script>
import headNav from '@/components/headNav'
import { Icon } from 'vant'
export default {
  components: {
    headNav,
    [Icon.name]: Icon
  },
  name: 'chat',
  data: function () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.cu-chat {
  display: flex;
  flex-direction: column;
}

.cu-chat .cu-item {
  display: flex;
  padding: 12px 12px 30px;
  position: relative;
}

.cu-chat .cu-item > .cu-avatar {
  width: 30px;
  height: 30px;
}

.cu-chat .cu-item > .main {
  max-width: calc(100% - 60px);
  margin: 0 14px;
  display: flex;
  align-items: center;
}

.cu-chat .cu-item > image {
  height: 320px;
}

.cu-chat .cu-item > .main .content {
  padding: 6px;
  border-radius: 6px;
  display: inline-flex;
  max-width: 100%;
  align-items: center;
  font-size: 12px;
  position: relative;
  min-height: 30px;
  line-height: 14px;
  text-align: left;
}

.cu-chat .cu-item > .main .content:not([class*="bg-"]) {
  background-color: white;
  color: black;
}

.cu-chat .cu-item .date {
  position: absolute;
  font-size: 12px;
  color: gray;
  width: calc(100% - 320px);
  bottom: 10px;
  right: 60px;
  width: 100%;
}

.cu-chat .cu-item .action {
  padding: 0 12px;
  display: flex;
  align-items: center;
}

.cu-chat .cu-item > .main .content::after {
  content: "";
  top: 12px;
  transform: rotate(45deg);
  position: absolute;
  z-index: 100;
  display: inline-block;
  overflow: hidden;
  width: 10px;
  height: 10px;
  left: -5px;
  right: initial;
  background-color: inherit;
}

.cu-chat .cu-item.self > .main .content::after {
  left: auto;
  right: -5px;
}

.cu-chat .cu-item > .main .content::before {
  content: "";
  top: 12px;
  transform: rotate(45deg);
  position: absolute;
  z-index: -1;
  display: inline-block;
  overflow: hidden;
  width: 10px;
  height: 10px;
  left: -5px;
  right: initial;
  background-color: inherit;
  filter: blur(5px);
  opacity: 0.3;
}

.cu-chat .cu-item > .main .content:not([class*="bg-"])::before {
  background-color: var(--black);
  opacity: 0.1;
}

.cu-chat .cu-item.self > .main .content::before {
  left: auto;
  right: -12px;
}

.cu-chat .cu-item.self {
  justify-content: flex-end;
  text-align: right;
}

.cu-chat .cu-info {
  display: inline-block;
  margin: 8px auto;
  font-size: 12px;
  padding: 3px 5px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  color: white;
  max-width: 200px;
  line-height: 1.4;
}
</style>
