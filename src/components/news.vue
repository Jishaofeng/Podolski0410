<template>
 <div id="news">

<!--<ul><li v-for="todo in todos">{{todo.text}}</li></ul>-->
    <table class="ui  table"  v-for="todo in todos">
      <tr>
        <th><h3>{{todo.zhuti}}</h3></th>
        <th>{{todo.fenti}}</th>
        <a href="http://www.baidu.com">点我</a>
        <a href="#/bobao">ss</a>
      </tr>
    </table>  
 </div>
</template>

<script>
import news from './news.vue'
import newsJ from '../../static/newsJ'
import jQuery from '../assets/jquery.min.js'
export default {
  name: 'news',
  data () {
    return {
      todos:[]
    } 
  },
  mounted: function(){
        var _this = this;
        $.ajax({
          url:"../../static/newsJ.json",
          type:'GET'
       })
      .done(function(data){
          //console.log(data.todos[0].text);
          _this.todos = data.todos;
      })
    }
  }   



</script>
<style>
 
</style>