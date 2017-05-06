<template>
    <div id="game1">
        <div>
           <img src="../../static/img/yijia01.jpg" class="game_img"/>
           <p class="game_p1">{{zhuti01}}</p>    
           <p class="game_p1">{{fenti01}}</p>
           <h3 class="game_h3">参赛球队</h3>
            <div class="ivu-row" >
                <div class="ivu-col ivu-col-span-6 game_jlb" v-for="todo in yijia">{{todo}}</div>
            </div>
        </div>
    </div>
</template>


<script>
import dejiaJ from '../../static/dejia.json'
export default {
  name: 'game1',
  data () {
    return {
        yijia:[],
        zhuti01:"",
        fenti01:"",
    } 
  },
  mounted(){
       var _this = this;
      $.ajax({
          url:"../../static/dejia.json",
          type:"GET",
      }).done(function(data){
         _this.yijia = data.yijia[0].duiwu;
         _this.zhuti01 = data.yijia[0].zhuti;
         _this.fenti01 = data.yijia[0].fenti;
      })
  }
}
</script>