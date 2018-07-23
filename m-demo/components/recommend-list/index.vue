<template>
    <div class="recommend-list">
        <div class="content" v-for="(item, index) in dataList" :key="index">
          <div class="title">{{ item.title }}<span class="slogan" v-if="item.slogan">{{ item.slogan }}</span></div>
          <div class="details">
            <div class="img">
              <img :src="item.img" :alt="item.title">
            </div>
            <div class="summary">{{ item.summary }}</div>
            <div class="extra">{{ item.extra }}浏览
              <div class="tag" v-if="item.tag">{{ item.tag }}</div>
              <div class="author" v-else>{{ item.author.name }}
                <img :src="item.author.head" :alt="item.author.name ">
              </div>
            </div>
          </div>
        </div>
        <div class="more">加载更多</div>
    </div>
</template>
<script>
export default {
    name: 'recommend-list',
    data() {
      return {
        dataList: [{
          title: '四川不是只有吃，还可以这样玩儿出新花样',
          slogan: '学习',
          img: 'https://n1-q.mafengwo.net/s11/M00/3B/52/wKgBEFpZYl-AbE1tAA30vuYts9026.jpeg',
          summary: '很多朋友来 四川 都会问我，小棉，推荐几个好吃的地方吧！ 其实，来到 四川 ，除了各种美食，还有很多很多好玩儿的地方！ 如果你觉得只有武侯祠，杜甫草堂， 九寨沟 ， 峨眉山 ，那就错啦~ 不要犹豫，跟我一起去看看还有什么特别的地方可以玩儿出新花样吧！ 落草。西山 遗世。独立 围炉。浮云 心花。怒放 心若浮云，何必远方 时光不老，我们不散 心仪浮云牧场已久，一直想要来这里住上一晚，放空自我！ 房间半年以上的全部订光，又不能提前确定太久远的时间，恰巧最近雨季， 汶川 理县 都有滑坡，好多人定好的房间都退了，我们就刚好订到',
          extra: '29215',
          tag: '',
          author: {
            name: '蜂窝',
            head: 'https://p3-q.mafengwo.net/s10/M00/8F/51/wKgBZ1iMr-uAIr2rAC4tBmSmnYw44.jpeg'
          }
        },{
          title: '哪里买奢侈品包最便宜?',
          slogan: '',
          img: 'https://b2-q.mafengwo.net/s11/M00/8E/4B/wKgBEFpOCryAW5EzAAH7KijUZ6Y39.jpeg',
          summary: '50款大牌包包推荐！买对地方，价格省一半！',
          extra: '1913672',
          tag: '问答',
          author: {
            name: '',
            head: ''
          }
        },{
          title: '5万块钱以下的车，能去自驾游么？',
          slogan: '',
          img: 'https://b2-q.mafengwo.net/s11/M00/23/AA/wKgBEFqfYqyALF54AAG92I4XHxI63.jpeg',
          summary: '当然能！拉的了货，装的了人，简直是辆神车！',
          extra: '189215',
          tag: '攻略',
          author: {
            name: '123',
            head: 'https://p3-q.mafengwo.net/s10/M00/8F/51/wKgBZ1iMr-uAIr2rAC4tBmSmnYw44.jpeg'
          }
        },{
          title: '长沙的阴雨，武汉的柔雪——超详细的美食美景记录册📚',
          slogan: '美食',
          img: 'https://n3-q.mafengwo.net/s10/M00/84/4A/wKgBZ1k6EHKAZao5AAFufTQ5lKA18.jpeg',
          summary: '写在开篇的话 絮絮叨叨 大家多包涵哈 ▼“火车”？ 火车票价低，非常适合穷困潦倒的学生党；途中也能坐在窗边看风景，虽然长时间坐硬座真的蛮辛苦的。但缓慢的绿皮火车，是现代非常难得的舒适慢节奏的交通工具。 ▼“月半”？ 这次旅行，从一月初的规划到一月底的落实，攻略一共修改了三次，从一开始的一周变成十日再到最后的两周。 最大功臣应该是，我们订票晚了。以至于后面很多火车票都是掐着时间买的，捏了一把冷汗。 所以提醒大家，火车票嘛，还是提前半个月买为好。 ▼“四城”？ DAY1 广州 → 长沙 DAY2-4 长沙 DAY5 长沙 → 武汉 ',
          extra: '359988',
          tag: '',
          author: {
            name: '柏龙',
            head: '//m.360buyimg.com/mobilecms/jfs/t11758/316/601365785/50417/d34c7501/59f423d4Nf0605d13.jpg'
          }
        }]

        
      }
    }
}
</script>

<style lang="scss">
  .recommend-list{
    .content{
      border-bottom: .12rem #f0f2f5 solid;
      .title{
        padding: 0.2rem 1.12rem 0 0.28rem;
        font-size: 0.32rem;
        color: #111;
        line-height: 1.4em;
        max-height: 1.3rem;
        position: relative;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        // overflow: hidden;
        text-overflow: ellipsis;
        .slogan{
          position: absolute;
          right: .28rem;
          top: 0.26rem;
          line-height: 0.3rem;
          background: #f5be00;
          border-radius: 0.08rem;
          font-size: 0.24rem;
          padding: .04rem 0.14rem;
          color: #fff;
        }
      }
      .details{
        padding: 0.2rem 0.28rem;
        color: #999;
        font-size: 0.28rem;
        height: 1.8rem;
        .img{
          width: 2.6rem;
          height: 1.8rem;
          float: left;
          img{
            width: 100%;
            height: 100%;
            vertical-align: middle;
          }
        }
        .summary{
          margin-left: 2.8rem;
          line-height: 1.3em;
          padding: .1rem 0 0;
          text-align: justify;
          white-space: normal;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .extra{
          margin-top: .2rem;
          margin-left: 2.8rem;
          font-size: .24rem;
          line-height: .4rem;
          .author{
            width: 1.2rem;
            float: right;
            img{
                width: .4rem;
                height: .4rem;
                border-radius: 50%;
                vertical-align: middle;
                margin: 0 0 .04rem .133rem;
            }
          }
          .tag{
            float: right;
            border: 0.02rem solid #30d2bf;
            color: #30d2bf;
            padding: 0 0.14rem;
            border-radius: 0.06rem;
          }
        }


      }

    }
    .more{
      font-size: 0.28rem;
      padding: 0.4rem;
      text-align: center;
    }
  }
</style>
