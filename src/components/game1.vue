<template>
    <div id="game1">
        <div>
           <img src="../../static/img/dejia.jpg" class="game_img"/>
           <p class="game_p1">德国足球甲级联赛（德语：Bundesliga）简称德甲，是德国足球最高等级的赛事类别，由德国足球协会于1962年7月28日在多特蒙德确立，自1963-64赛季面世。作为德国足球联赛系统的组成部分，德甲的每支球队均需与同级别的全部其它球队进行主客场制对赛，最终的德甲冠军及第二名、第三名与第四名可获得欧洲冠军联赛的参赛资格，第五和第六获欧联杯参赛资格；而排名最末的两支球队将降级至德国足球乙级联赛（德乙）。排名倒数第三的球队则需要与德乙第三名进行保级附加赛，胜者可获准留在德甲。此外，所有德甲球队都可直接入围德国足协杯比赛，两者冠军将参加德国超级杯的争夺。德甲冠军获得奖盘（俗称沙拉盘）。</p>
           <p class="game_p1">作为欧洲五大联赛之一，德甲在欧洲足联的联赛系数排名中目前位居全欧第二。德甲也是全球平均上座率最高的足球联赛之一，德甲联赛已经走过了60多年的风雨历程。如今球队配额保持在18支球队的水准上。拜仁慕尼黑是德甲最为成功的球队，共获得25次德甲冠军。2016-17赛季德国足球甲级联赛为第54届赛事，于2016年8月27日至2017年5月20日举行。其中2016年12月22日至2017年1月21日为冬歇期。</p>
           <h3 class="game_h3">参赛球队</h3>
            <div class="ivu-row" >
                <div class="ivu-col ivu-col-span-6 game_jlb" v-for="todo in dejia">{{todo}}</div>
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
        dejia:[],
    } 
  },
  mounted(){
       var _this = this;
      $.ajax({
          url:"../../static/dejia.json",
          type:"GET",
      }).done(function(data){
         _this.dejia = data.dejia[0].duiwu;
      })
  }
}






</script>