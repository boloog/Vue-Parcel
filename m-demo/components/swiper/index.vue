<template>
<swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="(item, index) in imgData" :key="index">
        <img :src="item.url">
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>

 import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
 
export default {
    name: 'swiper-banner',
    data() {
      return {
        swiperOption: {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
        },
        imgData: [{
            url: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t21808/163/2250051257/147425/1ffd3b77/5b4d55c5N82ce4d7d.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        },{
            url: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t20029/272/1765431541/135543/fbf22a8b/5b25a7d0Ncdb4f0f3.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        },{
            url: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t23902/265/1068640712/96959/25db16e1/5b502b37N2b11e503.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        },{
            url: 'https://img1.360buyimg.com/da/s750x366_jfs/t22798/365/1069056509/100473/d92a7c66/5b4d5ae9Neb21ce70.jpg!cr_1125x549_0_72.dpg'
        }]
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style>

.swiper-pagination-bullet{
    background: #fff;
}
</style>
