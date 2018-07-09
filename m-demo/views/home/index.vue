<template>
  <div class="home-page">
    <div class="nav-box show">
      <div class="tab-nav">
        <a href="" class="current"><span> 首页</span></a>
        <a href=""><span> 攻略</span></a>
        <a href=""><span> 同人</span></a>
        <a href=""><span> 主角</span></a>
      </div>
      <a href="" class="btn-nav"></a>
    </div>
    <div class="home-bottom">
      <div class="imgs">
        <img src="./../../assets/images/logo.png" class="logo">
        <img :src="config.serverUrl +'wx-qrcode.jpg'" class="wx-qrcode">
      </div>
      <router-link to="/list" class="btn-primary">进入列表页</router-link>
    </div>

  </div>
</template>
<script>
import axios from 'axios/dist/axios.min.js'
import "./style.scss"

import config from './../../api/config'


export default {
  name:'home',
  data () {
    return {
      config,
    }
  },
  created () {
    console.log(axios)

  }
}
</script>