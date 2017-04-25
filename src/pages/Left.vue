<template>
	<div>
		<div class="header">
			<img src="../assets/img/arrow.svg" @click="me" />
			余额
		</div>
	</div>
</template>
<script>
	export default{
		methods:{

		me:function(){
			
			this.$router.push({path:'./me'})
			}
		}
	}
</script>
<style scoped>

</style>