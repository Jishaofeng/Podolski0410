<template>
    <div id="game3">
        <div>
           <img src="../../static/img/yingchao01.jpg" class="game_img"/>
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
  name: 'game3',
  data () {
    return {
        yingchao:[],
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
         _this.yingchao = data.yingchao[0];
         _this.duiwu1 = data.yingchao[0].duiwu;
         _this.zhuti1 = data.yingchao[0].zhuti;
         _this.fenti1 = data.yingchao[0].fenti;
         //console.log(_this.duiwu1)
         //console.log(_this.zhuti1)
         
        // _this.fenti = data.yingchao[0].fenti;
         //console.log(_this.yingchao)
      })
  }
}
</script>