<template>
	<div>
		<div class="header">
			我的订单
			<img src="../assets/img/map.png" />
			<span>想去看看世界？你只差一页签证</span>
			<div class="explore" @click="explore">探索世界</div>
		</div>
		
	</div>
</template>

<script>
// import End from "../components/End.vue"
export default{
	methods:{
		explore:function(){

			this.$router.push({path:'./home'})
		}
	}
}

</script>
<style scoped>
.header{text-align: center;font-size: .18rem;height: .72rem;line-height: .72rem;border-bottom: .02rem solid #e9e9e9}
.header span{font-size: .12rem;font-weight: 900;color: #2e2e2e}
.explore{width: 1.74rem;height: .42rem;background: #ff5a60;margin: 0 auto;line-height: .42rem;color: #fffafa;border-radius: .04rem}
</style>