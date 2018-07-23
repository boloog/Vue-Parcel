<template>
  <div class="home-page">
    <div class="nav-box">
      <img src="https://css.mafengwo.net/mobile/images/header/logo2.png" class="logo">
      <div class="nav-search">搜索目的地/攻略/游记</div>
      <span class="login-button">登录</span>
    </div>
    <div class="swiper-barner">
      <Swiper></Swiper>
    </div>
    <img src="https://m.360buyimg.com/mobilecms/jfs/t23977/215/934912124/149709/a2412b1/5b4866daN1550ce15.gif" class="hot">

    <NavBars></NavBars>
  </div>
</template>
<script>
import axios from 'axios/dist/axios.min.js'
import "./style.scss"

import config from './../../api/config'

import { Swiper, NavBars } from './../../components';


export default {
  name:'home',
  data () {
    return {
      config,
      tabNav: [{
        name: '首页',
        path: '/'
      },{
        name: '列表',
        path: '/list'
      },{
        name: '123',
        path: '/list'
      }]
    }
  },
  created () {
    // console.log(axios)

  },
  methods: {

  },
  components: { 
    Swiper,
    NavBars
  }
}
</script>
