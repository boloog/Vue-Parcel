<template>
    <div class="nav-bars">
        <div class="item" v-for="(item, index) in tabs" :key="index"  :class="'item'+index">
            <i :class="'item'+index"></i><span :class="'first'+index">{{ item.text }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'nav-bars',
    data() {
      return {
          tabs: [{
              path: '/',
              text: '找功略',
          },{
              path: '/',
              text: '看游记',
          },{
              path: '/',
              text: '问达人',
          },{
              path: '/',
              text: '结伴',
          },{
              path: '/',
              text: '酒店',
          },{
              path: '/',
              text: '旅行商城',
          },{
              path: '/',
              text: '机票',
          },{
              path: '/',
              text: '当地玩乐',
          }]
      }
    }
}
</script>

<style lang="scss">
.nav-bars{
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing:border-box;
    .item{
        width: 25%;
        height: 1.8rem;
        box-sizing:border-box;
        text-align: center;
        margin-top: 0.16rem;
        i{
            display: block;
            width: 0.9rem;
            height: 0.9rem;
            background: url('./../../assets/images/nav-bars.png') no-repeat;
            background-size: 7.2rem;
            margin: 0 auto .1rem;
            &.item0{
                background-position: 0 0;
            }
            &.item1{
                background-position: -.9rem 0;
            }
            &.item2{
                background-position: -1.8rem 0;
            }
            &.item3{
                background-position: -2.7rem 0;
            }
            &.item4{
                background-position: -3.6rem 0;
            }
            &.item5{
                background-position: -4.5rem 0;
            }
            &.item6{
                background-position: -5.4rem 0;
            }
            &.item7{
                background-position: -6.3rem 0;
            }
        }
        span{
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            font-size: 0.32rem;
            &.first0{
                color: #ff9d00;
            }
            &.first1{
                color: #feca2b;
            }
            &.first2{
                color: #42d6ba;
            }
            &.first3{
                color: #f94a87;
            }
            &.first4{
                color: #32a2f1;
            }
            &.first5{
                color: #fd4e4e;
            }
            &.first6{
                color: #acce0e;
            }
            &.first7{
                color: #b160df;
            }
        }
    }
}
</style>
