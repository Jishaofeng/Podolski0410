<template>
  <div id="app">
    <header class="ui top demo grid inverted nine item labeled icon  menu push overlay visible" id="header_ui"><h1 style="color:white;">天下足球</h1></header>
    <router-view></router-view>
    <footer class="ui bottom demo grid inverted nine item labeled icon sidebar menu push overlay visible" >
      <router-link to="/" class="item four wide column">
        <i class="home icon"></i> 主页 </a>
      </router-link>
      <router-link to="/teams" class="item four wide column">
        <i class="trophy icon"></i> 球队 </a>
      </router-link>
      <router-link to="news" class="item four wide column">
        <i class="soccer icon"></i> 新闻 </a>
        </router-link>
      <router-link to="/mine" class="item four wide column">  
        <i class="user icon"></i> 我的 </a>
      </router-link>
    </footer>   
    
  </div>
 
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
  #header_ui{
    margin:0 0;
  }
  html{
    font-size:15.625vw;
  }
 .ui.labeled.icon.menu .item{
   min-width:0 !important;
 }
</style>
