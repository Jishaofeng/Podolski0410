<template>
     
    <div id="bobao">
        <header class="ui top demo grid inverted nine item labeled icon  menu push overlay visible" id="header_ui">
            <a href="#/" onClick="javascript :history.back(-1);"/><</a>
            <h1 style="color:white;">新闻</h1>
        </header>
        <div class="swiper-container" >
            <div class="swiper-wrapper" >
                <div class="swiper-slide " v-for="news2 in news0"><img :src="news2" class="bb_img"/></div>    
            </div>
        </div> 
        <div  id="neirong" >
           {{todos.text}}
        </div>
    </div>
</template>

<script>
    import bobao from './bobao.vue'
    import newsJ from '../../static/newsJ.json'
    import Swiper from '../../static/swiper-3.4.2.min'
    import jquery from '../assets/jquery.min.js'
    //import swiperCss from '../assets/swiper-3.4.2.min.css'
    export default {
        name: 'bobao',
        created(){
        },
        data () {
            return {
                font1:[],
                news0:[],
                todos:[],
            } 
        },
    
     mounted(){
        var _this = this;
        $.ajax({
          url:"../../static/newsJ.json",
          type:'GET',
          //dataType: 'json'
       })
      .done(function(data){ 
           var str = location.href;
           var Id = str.split("?")[1];
           console.log(Id);
           //console.log(data.todos[Id].zhuti);
           //console.log(data.todos[Id].text);

          _this.todos = data.todos[Id];
          //console.log(_this.todos)
         
//$("123").appendTo("#neirong");
         


          // _this.news0 = data.news0;
          // _this.news[Id] = data.news[Id];
        // _this.news0 = data.news0;      
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
@import '../assets/swiper-3.4.2.min.css';
    #bobao{
        margin-top:40px;
    }
    .bb_img{
        width:100%;
        height:250px;
    }
</style>

 

