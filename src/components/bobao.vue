<template>  
    <div id="bobao">
        <header class="ui top demo grid inverted nine item labeled icon  menu push overlay visible" id="header_ui">
            <a href="#/" onClick="javascript :history.back(-1);" id="header_left"> < </a>
            <h1 style="color:white;">新闻</h1>
        </header>
        <h3 class="bobao_h1">{{todos.zhuti}}</h3>
        <div class="swiper-container" >
            <div class="swiper-wrapper" >
                <div class="swiper-slide " v-for="news2 in todos.pic"><img :src="news2" class="bb_img"/></div>    
            </div>
        </div> 
        <div class="bobao_juti">
           <p id="neirong">{{todos.text}}</p>
           <img :src="news1" v-for="news1 in todos.picture" class="news1"/>   
           <p id="text2">{{todos.text2}}</p>
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
                todos:[],
                title:"",
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

          _this.todos = data.todos[Id];
         
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
    .news1{
        width:100%;
        height:250px;
    }
    #neirong{
        text-indent: 2em;
    }
    #text2{
       margin-bottom:100px;
       text-indent: 2em;
       height:200px;
    }
    #header_left{
        position:fixed;
        left:10%;
       color:white;
       font-size:26px;
       
    }
    .bobao_h1{
        text-align:center;
        padding:10px;
    }
</style>

 

