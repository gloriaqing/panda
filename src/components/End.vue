<template>
	
  	<div class="footer">
  		<ul>
	  		<li><router-link to="/home">签证</router-link></li>
		    <li><router-link to="/list">订单</router-link></li>
		    <li><router-link to="/me">我的</router-link></li>
		</ul>
  	</div>

</template>
<script>
export default{

}


</script>
<style scoped>
 .footer{position: fixed;bottom: 0;width: 100%;background: #fff;z-index: 1000;height: .47rem}
 .footer ul{display:flex;}
 .footer ul li{list-style: none;width: 33.3%;text-align: center;height: .5rem}
 .footer ul li a{line-height: .47rem};
 .footer ul li img{width: .5rem;height: .4rem}
 .router-link-active{color: red}
</style>