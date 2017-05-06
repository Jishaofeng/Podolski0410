<template>
  <div id="top">
     <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" ><img src="../../static/img/101.jpg" class="imgimg"/></div>
            <div class="swiper-slide" ><img src="../../static/img/202.jpg"/></div>
            <div class="swiper-slide" ><img src="../../static/img/ouguan4.jpg"/></div>
        </div>
    </div>
    <teamXX/>
    <news/>
  </div>
</template>




<script>
import news from './news.vue'
import teamXX from './team_xuanxiang.vue'
import Swiper from '../../static/swiper-3.4.2.min'
import semcss from '../assets/semantic.min.css'
import jquery from '../assets/jquery.min.js'
import semjs from '../assets/semantic.min.js'


export default {
  name: 'hello',
  components:{
    news,teamXX
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
        height:260px;
    }
    #top{
      padding-top:40px;
    }
   
</style>














