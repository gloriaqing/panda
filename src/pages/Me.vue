<template>
	<div>
		<div class="header">
			<div class="logo">
				<img src="../assets/img/logo-y.png" />
				<span>184****7055</span>
			</div>
			<div class="header-end">
				<a @click="left">余额&nbsp&nbsp&nbsp<span>0元</span></a>
				<a><em>|</em></a>
				<a>优惠券&nbsp&nbsp&nbsp<span>0张</span></a>
			</div>
		</div>
		<div class="select">

			<div class="list">
				<ul>

					<img src="../assets/img/money.png" />
					<li>
						<a>邀请拿奖励</a>
						<a>邀请一人奖<em>￥10元</em>&nbsp&nbsp></a>
					</li>
				</ul>
				<ul>

					<img src="../assets/img/gift.png" />
					<li>
						<a>优惠券</a>
						<a>0张&nbsp&nbsp></a>
					</li>
				</ul>			
			</div>
			<div class="list">
				<ul>

					<img src="../assets/img/ding.png" />
					<li>
						<a>我的订单</a>
						<a>></a>
					</li>
				</ul>
				<ul>

					<img src="../assets/img/location.png" />
					<li>
						<a>收货地址</a>
						<a>></a>
					</li>
				</ul>			
			</div>
			<div class="list">
				<ul>

					<img src="../assets/img/share.png" />
					<li @click="order">
						<a>我的订单</a>
						<a>></a>
					</li>
				</ul>
				<ul>

					<img src="../assets/img/opinion.png" />
					<li>
						<a>收货地址</a>
						<a>></a>
					</li>
				</ul>
				<ul>

					<img src="../assets/img/set.png" />
					<li>
						<a>设置</a>
						<a>></a>
					</li>
				</ul>			
			</div>
		</div>
	</div>
</template>

<script>
export default{
	methods:{
		order:function(){
			
			this.$router.push({path:'./list'})
		},
		left:function(){
			console.log(8);
			
			this.$router.push({path:'./left'})
		}
	}
}

</script>
<style scoped>
.header{height:1.79rem;background: #38383f;width: 100%;padding-top:.3rem}
.logo{width: .86rem;height: .86rem;border-radius: 50%;margin: 0 auto;background: #fff;text-align: center;}
.logo img{vertical-align: middle;margin-top: .15rem}
.logo span{color: #8f8f8f;margin-top: .28rem;display: block;}
.header-end{display: flex;justify-content:space-around;}

.header-end span{color: #fafafa;margin-right: .1rem;display: inline-block;}
.header-end em{color: #8f8f8f}
.header-end a{color: #8f8f8f;margin-top: .6rem}
.header-end a:first-child{margin-left: .7rem}
.header-end a:last-child{margin-right: .7rem}

.list{border-bottom: .3rem solid #f3f4f6}
.list li{display: flex;justify-content:space-between;height: .43rem;line-height: .43rem;border-bottom:.02rem solid #f5f5f5;width: 3.35rem;margin-left: .4rem;color: #131313;font-size: .17rem}
/*.select ul li a:first-child{margin-left: .16rem}*/
.list li a:last-child{margin-right: .16rem;font-size: .13rem}
.list li em{color: #ff6368;font-style: normal;}
.list img{vertical-align:bottom;width: .2rem;height: .23rem;float: left;margin-top: .1rem;margin-left: .1rem;font-size: .3rem}


</style>