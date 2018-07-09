<template>
  <div class="list-page">
    <p>Hi: {{ name }}</p>
    <img :src="config.staticUrl +'/static/images/head.png'" class="wx-qrcode">
    <p> 这是列表</p>
    <router-link to="/" class="btn-primary">返回首页</router-link>
  </div>
</template>
<script>
import name from './../../assets/js'
import config from './../../api/config'

export default {
  name: 'list',
  data () {
    return {
     name,
     config,

    }
  }
}
</script>
<style lang="scss" type="text/css">
.list-page{
  color: #fff;
  margin: 20px auto;
  .btn-primary{
    color: #fff;
    padding: 10px 20px;
    font-size: 24px;
    border-radius: 4px;
    background: #194da0;
    text-decoration: none;
  }
}
</style>
