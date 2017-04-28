<template>
	
  	<div class="footer">
  		<ul>
	  		<li>
	  			<router-link to="/home"> 
	  				<img :src="'/static/img/visa'+(isActive==0 ? '-active' : '')+'.png'" />签证
	  			</router-link>
	  		</li>
		    <li><router-link to="/list"><img src="/static/img/dingdan.png" />订单</router-link></li>
		    <li>
		    	<router-link to="/me"><!-- <img src="/static/img/bear.png" v-show="no" /> -->
			   		<img :src="'/static/img/bear'+(isActive==2 ? '-active' : '')+'.svg'"/>我的
				</router-link>
			</li>
		</ul>
  	</div>

</template>
<script>
export default{
	data(){
		return{
			// no:true,
			// ok:false,
			// isActive: 0
		}
	},
	props:['isActive'],
	
	methods:{
	
	}
}


</script>
<style scoped>
 .footer{position: fixed;bottom: 0;width: 100%;background: #fff;z-index: 1000;height: .47rem;padding-top: .1rem}
 .footer ul{display:flex;}
 .footer ul li{list-style: none;width: 33.3%;text-align: center;height: .5rem}
 .footer ul li a{width: 100%};
 .footer ul li img{width: .2rem;height: .2rem;display: block;vertical-align: middle;margin: .03rem auto .05rem}
 .footer ul li:last-of-type img:last-of-type{width: .3rem;height: .3rem;margin-top:-.05rem;}
 .router-link-active{color: red}
</style>