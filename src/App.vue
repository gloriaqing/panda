<template>
  <div id="app">
    
  	<router-view></router-view>

  	<div class="footer">
  		<ul>
	  		<li><router-link to="/home">签证</router-link></li>
		    <li><router-link to="/list">订单</router-link></li>
		    <li><router-link to="/me">我的</router-link></li>
		</ul>
  	</div>
    
    
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
 .footer ul{display:flex;}
 .footer ul li{list-style: none;width: 33.3%;text-align: center;height: .5rem}
 .footer ul li a{};
 .footer ul li img{width: .5rem;height: .4rem}
 .router-link-active{color: red}
</style>
