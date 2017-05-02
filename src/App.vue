<template>
  <div id="app">
    <header class="">头部</header>
    <router-view></router-view>
    <footer class="ui bottom demo grid inverted nine item labeled icon sidebar menu push overlay visible">
      <router-link to="/" class="item four wide column">
        <i class="home icon"></i> Home </a>
      </router-link>
      <router-link to="/teams" class="item four wide column">
        <i class="trophy icon"></i> 球队 </a>
      </router-link>
      <router-link to="news" class="item four wide column">
        <i class="trophy icon"></i> 新闻 </a>
        </router-link>
      <router-link to="/mine" class="item four wide column">  
        <i class="trophy icon"></i> 我的 </a>
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
  header{
      background:red;
      font-size:4rem;
      text-align:center;
      line-height:6rem;
  }
  
</style>
