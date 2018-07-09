import axios from 'axios/dist/axios.min.js'
function initShare(){
  var ssid = window.localStorage.BOLOOGSSID || "",
  shareData = {
    title: '懒在家 也排号',
    desc: '您的排号小帮手  确保隐私安全   100%代缴成功',
    link: 'http://focus.maifangma.com/djph/',
    imgUrl: 'http://focus.maifangma.com/assets/images/shareface_djph.jpg'
  }
  console.log('init share')
  axios({
    method: 'get',
    // url: "http://localhost:3000/sign",
    data: {
      ssid: ssid
    },
  }).then(result => {
    let res = result.data
    if (res.code == 200) {
      if (res.ssid) {
        window.localStorage.BOLOOGSSID = res.ssid
      }
      console.log('res sign')
      var sign = res.sign
      sign.jsApiList = [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone'
      ]

      wx.config(sign)
      wx.ready(function() {
        wx.onMenuShareTimeline(shareData); // 分享给朋友
        wx.onMenuShareAppMessage(shareData); // 分享到朋友圈
        wx.onMenuShareQQ(shareData); // 分享到QQ
        wx.onMenuShareWeibo(shareData); // 分享到腾讯微博
        wx.onMenuShareQZone(shareData); // 分享到QQ空间
      })
      wx.error(function(res) {
        console.log(res.errMsg);
      });
    }
  })
}

export default {
  initShare,
}