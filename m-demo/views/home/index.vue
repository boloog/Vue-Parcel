<template>
  <div class="home-page">
    <div class="nav-box show">
      <div class="tab-nav">
        <!-- current -->
        <router-link  v-for="(item, index) in tabNav" :key="index" :to="`${item.path}`" ><span>{{item.name}}</span></router-link>  
      </div>
      <a href="" class="btn-nav"></a>
    </div>
    <div class="home-bottom">
      <div class="imgs">
        <img src="./../../assets/images/logo.png" class="logo">
        <img :src="config.serverUrl +'wx-qrcode.jpg'" class="wx-qrcode">
      </div>
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
      tabNav: [{
        name: '首页',
        path: '/'
      },{
        name: '列表',
        path: '/list'
      }]
    }
  },
  created () {
    // console.log(axios)

  },
  methods: {
    isNav(reg){
      if(Object.prototype.toString.call(reg) === '[object RegExp]'){
        return reg.test(this.$route.path)
      }else if(Object.prototype.toString.call(reg) === '[object String]'){
        return new RegExp(reg).test(this.$route.path)
      }else{
        return false
      }
    },
  }
}
</script>