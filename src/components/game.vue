<template>
    <div id="game">
        <div>
           <img src="../../static/img/xijia01.jpg" class="game_img"/>
           <p class="game_p1">西班牙足球甲级联赛（Primera División de España，简称 La Liga）在中国则一般简称为“西甲”，是西班牙最高等级的职业足球联赛，也是欧洲及世界最高水平的职业足球联赛之一。现有参赛球队20支。</p>
           <p class="game_p1">西甲最近10年，是欧洲足联排名第1的足球联赛。欧冠和欧联夺冠次数欧洲第1，分别是16次和10次。但是受限于开球时间普遍太晚，影响力和英超相比差距较大。近几年为开拓亚洲市场，开球时间已经逐渐向英超看齐。</p>
           <h3 class="game_h3">参赛球队</h3>
          <!-- <Row v-for="todo in todos" >
                <Col span="6" >{{todo}}</Col>
            </Row>-->
            <div class="ivu-row" >
                <div class="ivu-col ivu-col-span-6 game_jlb" v-for="todo in todos">{{todo}}</div>
            </div>
        </div>
    </div>
</template>


<script>


export default {
  name: 'game',
  data () {
    return {
        todos:[],
    } 
  },
  mounted(){
       var _this = this;
      $.ajax({
          url:"../../static/liansai.json",
          type:"GET",
      }).done(function(data){
          //console.log(data);
          _this.todos = data.todos[0].duiwu;
          //console.log(data.todos[0].duiwu[0]);
          //_this.todds1 = data.todos[1].zhuti;
         // _this.todos1 = data.todos[0].zhuti;
        
      })
  }
}

</script>
<style>
    .game_img{
        width:100%;
    }
    .game_p1{
        text-indent: 2rem;
        margin-top:10px;
    }
    .game_h3{
        text-align:center;
    }
    .ivu-row{
        margin-bottom:100px;
    }
    .game_jlb{
        border:1px solid black;
        text-align:center;
    }
</style>






