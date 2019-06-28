
import { Toast } from 'vant'
export const plusReady = (fn) => {
  if (window.plus) {
    setTimeout(fn, 0)
  } else {
    document.addEventListener('plusready', fn, false)
  }
}

/* 重写返回按钮事件 */
plusReady(() => {
  var type = plus.os.name//eslint-disable-line
  console.log(type)
  if (type === 'iOS') {
    plus.navigator.setStatusBarBackground('#1cbbb4')//eslint-disable-line
  } else {
    plus.navigator.setStatusBarBackground('#0081ff')//eslint-disable-line
  }
  const pages = ['/']
  var num = 0
  plus.key.addEventListener( //eslint-disable-line
    'backbutton',
    function () {
      if (pages.indexOf(window.location.href.split('#')[1]) > -1) {
        num += 1
        Toast({ message: '再次点击退出', position: 'bottom' })
        if (num > 1) {
          plus.runtime.quit(); //eslint-disable-line
        }
        setTimeout(() => {
          num = 0
        }, 1000)
      } else {
        window.history.back()
      }
    },
    false
  )
})
