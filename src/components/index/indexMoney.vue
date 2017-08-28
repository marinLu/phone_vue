<template>
<div class="indexMoney_container">
	<div class="indexMoney_top">
			<img src="../../assets/images/left.png" alt="">
			<h1>充值</h1>
	</div>
	<div class="indexMoney_con">
		<p class="wx">微信充值</p>
		<p class="zfb">支付宝充值</p>
		<p class="yhk">银行卡充值</p>
	</div>
</div>

	
</template>

<script>
export default{
		name:'indexMoney',
		components:{
			
		}
	}
	
</script>

<style scoped lang="less">
.indexMoney_container{
	position:absolute;
	overflow: auto;
	bottom:96/75rem;
	top: 88/75rem;
	width: 750/75rem;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: #fff;
	.indexMoney_top{
		width: 100%;
		height: 86/75rem;
		position: relative;
		
		img{
			position: absolute;
			top:15/75rem;
			left:10/75rem;
		}
		h1{
			position: absolute;
			font-size: 35/75rem;
			top:15/75rem;
			left:310/75rem;
		}
	}
	.indexMoney_con{
		width: 100%;
		height: 1200/75rem;
		background: #F0F0F0;
		padding-top: 450/75rem;
		p{
			width: 600/75rem;
			height: 90/75rem;
			margin: auto 75/75rem;
			line-height: 90/75rem;
			text-align: center;
			font-size: 30/75rem;
			background: #fff;
			border: 1/75rem solid #fff;
			border-radius:40/75rem;
		}
		.zfb{
			margin:80/75rem 75/75rem 80/75rem 75/75rem;
		}
	}	
}
	
</style>