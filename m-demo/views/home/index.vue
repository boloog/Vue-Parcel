<template>
  <div class="home-page">
    <div class="nav-box">
      <img src="./../../assets/images/boloog.png" class="logo">
      <div class="nav-search">搜索目的地/攻略/游记</div>
      <span class="login-button">登录</span>
    </div>
    <div class="swiper-barner">
      <Swiper></Swiper>
    </div>
    <img src="https://m.360buyimg.com/mobilecms/jfs/t23977/215/934912124/149709/a2412b1/5b4866daN1550ce15.gif" class="hot">
    <NavBars></NavBars>
    <div class="recommend">
      <div class="gray-text">
        <span class="gray-layout">为您推荐</span>
      </div>
      <RecommendList></RecommendList>
    </div>
  </div>
</template>
<script>

import "./style.scss"

import { mapState } from 'vuex'

import { Swiper, NavBars, RecommendList } from './../../components'


export default {
  name:'home',
  data () {
    return {
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
  computed: mapState({
    project: state => state.project
  }),
  created () {
    this.$store.dispatch("fetchProject")

    console.log('project', this.project)
  },
  methods: {

  },
  components: { 
    Swiper,
    NavBars,
    RecommendList
  }
}
</script>
