<template>
 <div id="news">

<!--<ul><li v-for="todo in todos">{{todo.text}}</li></ul>-->
    <table class="ui  table"  v-for="todo in todos" id="beijing">
      <tr>
        <th><h3><a :id="todo.id" @click="tiaozhuan">{{todo.zhuti}}</a></h3></th>
        <th><a href="#">{{todo.fenti}}</a></th>
      </tr>
    </table>  
 </div>
</template>

<script>

import newsJ from '../../static/newsJ'
import jQuery from '../assets/jquery.min.js'

export default {
  name: 'news',
  data () {
    return {
      todos:[],
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
    },
    methods:{
      tiaozhuan:(data)=>{
        //var _this = this;
         // console.log(data.toElement.id);
          var url = data.toElement.id;
          console.log(url)
        //console.log($(this).attr("data-id"));
        location.href = "/#/bobao?" +url;
        //console.log(location.href)
       
      }
    }
  }   


 

</script>
<style>
   #news{
     margin-top:40px;
     margin-bottom:100px;
   }
</style>