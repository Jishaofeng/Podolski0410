<template>
  <div id="top">
     <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/img/1.jpg"/></div>
            <div class="swiper-slide"><img src="../assets/img/1.jpg"/></div>
            <div class="swiper-slide"><img src="../assets/img/1.jpg"/></div>
        </div>
    </div>
    <news/>
  </div>
</template>




<script>
import news from './news.vue'
import Swiper from '../../static/swiper-3.4.2.min'
import semcss from '../assets/semantic.min.css'
import jquery from '../assets/jquery.min.js'
import semjs from '../assets/semantic.min.js'


export default {
  name: 'hello',
  components:{
    news
  },
  data () {
    return {
      
    }
  },
  mounted:()=>{
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: 1000,//可选选项，自动滑动
        loop : true,
    })
  }
}
 




</script>

<style>
    .swiper-slide img{
        width:100%;
    }
    #top{
      padding-top:40px;
    }
</style>














