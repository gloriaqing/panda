<template>
  <div id="app">
    
  	<router-view></router-view>

    
    
  </div>
</template>

<script>

require('./assets/css/base.css')
import Home from "./pages/Home.vue"
// import List from "./pages/List.vue"
export default {
  name: 'app'
  
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
 .footer{
 	position: fixed;
 	bottom: 0;
 	width: 100%;
 	z-index: 999;
 	background: #fff;
 	height: .5rem;
 	top:6.17rem;
 	line-height: .5rem;
 }

</style>
