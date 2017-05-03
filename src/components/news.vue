<template>
 <div id="news">

<!--<ul><li v-for="todo in todos">{{todo.text}}</li></ul>-->
    <table class="ui  table"  v-for="todo in todos">
       <tr>
        <th>{{todo.text}}</th>
        <th>Status</th>
        <th class="right aligned">Notes</th>
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