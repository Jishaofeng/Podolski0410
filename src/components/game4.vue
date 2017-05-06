<template>
    <div id="game4">
        <div>
           <img src="../../static/img/fajia01.jpg" class="game_img"/>
           <p class="game_p1">{{zhuti1}}</p>
           <p class="game_p1">{{fenti1}}</p>
           <h3 class="game_h3">参赛球队</h3>
            <div class="ivu-row" >
                <div class="ivu-col ivu-col-span-6 game_jlb" v-for="duiwu2 in duiwu1">{{duiwu2}}</div>
            </div>
        </div>
    </div>
</template>


<script>
import dejiaJ from '../../static/dejia.json'
export default {
  name: 'game4',
  data () {
    return {
        fajia:[],
        zhuti1:"",
        fenti1:"",
        duiwu1:[],
    } 
  },
  mounted(){
       var _this = this;
      $.ajax({
          url:"../../static/dejia.json",
          type:"GET",
      }).done(function(data){
         _this.fajia = data.fajia[0];
         _this.duiwu1 = data.fajia[0].duiwu;
         _this.zhuti1 = data.fajia[0].zhuti;
         _this.fenti1 = data.fajia[0].fenti;
        
      })
  }
}
</script>