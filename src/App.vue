<template>
  <div id="app">
    <header class="ui container-full">头部</header>
    <router-view></router-view>
    <footer class="ui container">
      <router-link to="/">主页</router-link>
      <router-link to="/teams">球队</router-link>
      <router-link to="news">新闻</router-link>
      <router-link to="/mine">我的</router-link>
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
    border:1px solid black;
    
  }
  footer{
    position:absolute;
    bottom:0; 
  }
 
</style>
