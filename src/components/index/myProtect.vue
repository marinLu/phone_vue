<template>
<div class="myProtect_container">
	<div class="myProtect_top">
			<img src="../../assets/images/left.png" alt="">
			<h1>我的消息</h1>
	</div>
	<div class="myProtect_nav">
		<ul class="clearfix">
			<li>评论</li>
			<li>私信</li>
			<li>通知</li>
		</ul>
	</div>
	<div class="myProtect_con">
			<span class="title">系统消息</span>
			<span class="time">3-24</span>
			<p>你充值的逗币已经到账</p>
	</div>
	<div class="myProtect_con">
			<span class="title">系统消息</span>
			<span class="time">3-24</span>
			<p>你充值的逗币已经到账</p>
	</div>
	<div class="myProtect_con">
			<span class="title">系统消息</span>
			<span class="time">3-24</span>
			<p>你充值的逗币已经到账</p>
	</div>
</div>

	
</template>

<script>
export default{
		name:'myProtect',
		components:{
			
		}
	}
	
</script>

<style scoped lang="less">
.myProtect_container{
	position:absolute;
	overflow: auto;
	bottom:96/75rem;
	top: 88/75rem;
	width: 750/75rem;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: #fff;
	.myProtect_top{
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
	.myProtect_nav{
		
		ul{
			width: 650/75rem;
			margin:20/75rem auto;
			font-size: 35/75rem;
			font-weight: 700;
			li{
				float:left;
			}
			li:nth-child(2){
				margin:0 200/75rem;
			}
		}
	}
	.myProtect_con{
		width: 100%;
		height: 112/75rem;
		border-top: 2/75rem solid #ddd; 
		padding: 20/75rem 20/75rem; 
		font-size: 20/75rem;
		.time{
			float: right;
			margin-right: 40/75rem;	
			color: #ddd;
		}
		p{
			margin:20/75rem 0;
			color: #ddd;
		}
	}	
}
	
</style>