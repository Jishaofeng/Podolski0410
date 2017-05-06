<template>
<div id="teams">
  <div class="ui top attached tabular menu teams_xxk">
    <a class="item active" data-tab="first">西甲</a>
    <a class="item" data-tab="second">德甲</a>
    <a class="item" data-tab="third">意甲</a>
    <a class="item" data-tab="fouth">英超</a>
    <a class="item" data-tab="fifth">法甲</a>
    <a class="item" data-tab="sixth">欧冠</a>
  </div>
  <div class="ui bottom attached tab segment active" data-tab="first">
    <game/>
  </div>
  <div class="ui bottom attached tab segment" data-tab="second">
    <game1/>
  </div>
  <div class="ui bottom attached tab segment" data-tab="third">
    <game2/>
  </div>
   <div class="ui bottom attached tab segment" data-tab="fouth">
    <game3/>
  </div>
   <div class="ui bottom attached tab segment" data-tab="fifth">
    <game4/>
  </div>
   <div class="ui bottom attached tab segment" data-tab="sixth">
    <game5/>
  </div>
</div>  
</template>

<script>
import semcss from '../assets/semantic.min.css'
import game from './game.vue'
import game1 from './game1.vue'
import game2 from './game2.vue'
import game3 from './game3.vue'
import game4 from './game4.vue'
import game5 from './game5.vue'
export default {
  name: 'teams',
  data () {
    return {
      
    }
  },
  mounted(){
    $('.menu .item')
      .tab()
    ;
  },
  components:{
    game,
    game1,
    game2,
    game3,
    game4,
    game5,
  }
}
</script>
<style>
  #teams{
    margin-top:40px;
    width:100%;
  }
</style>
