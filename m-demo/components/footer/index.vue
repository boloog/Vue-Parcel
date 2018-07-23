<template>
    <div class="footer">
      <ul class="links">
        <li><a href="">登录</a></li>
        <li><a href="">注册</a></li>
        <li><a href="">反馈</a></li>
        <li><a href="">加入我们</a></li>
      </ul>
      <div class="copyright">Copyright © 2013-2018 柏龙 boloog.com 版权所有</div>
    </div>
</template>
<script>
export default {
    name: 'footer',
    data() {
      return {

      }
    }
}
</script>

<style lang="scss">
.footer{
    
    ul,li{
      list-style: none;
      padding: 0;margin: 0;
    }
  .links{
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    padding: 0.32rem 0.4rem;
    height: .36rem;
    li{
      float: left;
      text-align: center;
      width: 25%;
      font-size: 0;
      a{
        font-size: 0.28rem;
        text-decoration: none;
        color: #848689;
        position: relative;
        &::after{
          content: "";
          display: inline-block;
          height: 70%;
          width: 1px;
          background-color: #d7d7d7;
          position: absolute;
          right: 0;
          top: 15%;
        }
        &:last-child::after{
            background-color: #fff;
        }
      }
    }
  }
  .copyright{
    font-size: 0.24rem;
    color: #848689;
    text-align: center;
    padding: 0.14rem 0;
  }
}
</style>
