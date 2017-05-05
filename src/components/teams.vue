<template>
<div id="teams">
  <div class="ui top attached tabular menu teams_xxk">
    <a class="item active" data-tab="first">西甲</a>
    <a class="item" data-tab="second">德甲</a>
    <a class="item" data-tab="third">意甲</a>
    <a class="item" data-tab="fouth">英超</a>
    <a class="item" data-tab="fifth">欧冠</a>
    <a class="item" data-tab="sixth">世界</a>
  </div>
  <div class="ui bottom attached tab segment active" data-tab="first">
    <game/>
  </div>
  <div class="ui bottom attached tab segment" data-tab="second">
    第二
  </div>
  <div class="ui bottom attached tab segment" data-tab="third">
    第三
  </div>
   <div class="ui bottom attached tab segment" data-tab="fouth">
    第四
  </div>
   <div class="ui bottom attached tab segment" data-tab="fifth">
    第五
  </div>
   <div class="ui bottom attached tab segment" data-tab="sixth">
    第六
  </div>
</div>  
</template>

<script>
import semcss from '../assets/semantic.min.css'
import game from './game.vue'

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
  }
}
</script>
<style>
  #teams{
    margin-top:40px;
    width:100%;
  }
</style>
