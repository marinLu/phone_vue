<template>
<div class="myProtect_container">
	<div class="myProtect_top">
		<router-link to="../wode/">
			<img src="../../assets/images/left.png" alt="">
		</router-link>
		<h1>我的消息</h1>
	</div>
	<div class="myProtect_nav">
		<ul class="clearfix">
			<li>
				<router-link :to="{path:'/pinglun'}">评论</router-link>
			</li>	
			<li>
				<router-link :to="{path:'/sixin'}">私信</router-link>
			</li>
			<li>
				<router-link :to="{path:'/tongzhi'}">通知</router-link>
			</li>
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
			<p>@小魔女&nbsp;关注了你</p>
	</div>
	<div class="myProtect_con">
			<span class="title">毒砒霜少女&nbsp;赞了你的评论</span>
			<span class="time">3-24</span>
			<p>么么么。。。</p>
	</div>
</div>

	
</template>

<script>
export default{
		name:'tongzhi',
		components:{
			
		}
	}
	
</script>

<style scoped lang="less">
.myProtect_container{
	position:absolute;
	overflow: auto;
	/*bottom:96/75rem;
	top: 88/75rem;*/
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
			left:20/75rem;
		}
		h1{
			position: absolute;
			font-size: 35/75rem;
			top:15/75rem;
			left:310/75rem;
		}
	}
	.myProtect_nav{
		height:68/75rem;
		ul{
			width: 650/75rem;
			margin:20/75rem auto;
			font-size: 35/75rem;
			font-weight: 700;
			li{
				float:left;
				height:68/75rem;
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