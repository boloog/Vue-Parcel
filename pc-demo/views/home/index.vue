<template>
  <div class="home-page">
    这是首页

    <div class="imgs">
      <img src="./../../assets/images/logo.png" class="logo">
      <img :src="config.serverUrl +'wx-qrcode.jpg'" class="wx-qrcode">
    </div>
    <router-link to="/list" class="btn-primary">进入列表页</router-link>
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