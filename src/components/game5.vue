<template>
    <div id="game5">
        <div>
           <img src="../../static/img/ouguan1.jpg" class="game_img"/>
           <p class="game_p1">{{zhuti1}}</p>
           <p class="game_p1">{{fenti1}}</p>
        </div>
        <div class="swiper-container" >
            <div class="swiper-wrapper" >
                <div class="swiper-slide " v-for="picture in pic1"><img :src="picture" class="bb_img"/></div>    
            </div>
        </div>
        <p class="game_p1">{{text1}}</p> 
    </div>
</template>


<script>
import dejiaJ from '../../static/dejia.json'
export default {
  name: 'game5',
  data () {
    return {
        ouguan:[],
        zhuti1:"",
        fenti1:"",
        pic1:[],
        text1:"",
    } 
  },
  mounted(){
       var _this = this;
      $.ajax({
          url:"../../static/dejia.json",
          type:"GET",
      }).done(function(data){
         _this.ouguan = data.ouguan[0];
         _this.pic1 = data.ouguan[0].pic;
         _this.zhuti1 = data.ouguan[0].zhuti;
         _this.fenti1 = data.ouguan[0].fenti;
         _this.text1 = data.ouguan[0].text;

         setTimeout(function(){
                var mySwiper1 = new Swiper('.swiper-container', {
                autoplay: 1000,//可选选项，自动滑动
                loop : true,
            })
        },1000)
      })
  }
}
</script>

<style>
    #game5{
        margin-bottom:100px;
    }
</style>



