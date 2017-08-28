<template>
	<div class="dqRecommendContainer">
		<div class="top" :class="[{'filter':this.flag}]">
			<div class="dqRecommendTitle">
				<span class="title">逗圈</span>
				<img src="../../assets/images/search.jpg" alt=""  @click="search">
			</div>
			<div class="dqRecommendNav">
				<ul>
					<li><router-link :to="{path:'/humorous/recommend'}">推荐</router-link></li>
					<li><router-link :to="{path:'/humorous/class'}">分类</router-link></li>
					<li><router-link :to="{path:'/humorous/join'}">加入</router-link></li>
					<li><router-link :to="{path:'/humorous/create'}">创建</router-link></li>
				</ul>
			</div>
		</div>
		<div class="indexSearch_top clearfix" :class="[{'show':this.flag}]" >
	  		<input type="tel" @focus="focus" @blur="blur"  autofocus="autofocus">
			<img src="../../assets/images/search.jpg" alt="">
	    </div>
	    <div class="indexSearch_con" :class="[{'show':this.tips}]">
		  	<p class="history">搜索历史</p>
		  	<p class="content">进击的巨人</p>
		  	<p class="content">战狼2</p>
		  	<p class="content">大城小事</p>
	    </div>
		<div class="box" :class="[{'filter':this.flag}]">
			<div class="dqRecommendMore">
				<span>今日推荐</span>
				<span>></span>
				<span>更多</span>
			</div>
			<router-link class="dqRecommendContent" tag="div" :to="{path:'/homepage'}">
				<div class="pic">
					<img src="../../assets/images/recommendIcon1.jpg" alt="">
				</div>
				<div class="right">
					<h2 class="title">UI 设计师群组</h2>
					<p class="message">
						<span>创建人：</span>
						<span>设计小白菜</span>
						<span>创建时间：</span>
						<span>2015-12-11</span>
					</p>
					<p class="content">设计——牛人与牛人之间的较量！</p>
				</div>
			</router-link>
			<router-link class="dqRecommendContent" tag="div" :to="{path:'/homepage'}">
				<div class="pic">
					<img src="../../assets/images/recommendIcon2.jpg" alt="">
				</div>
				<div class="right">
					<h2 class="title">我们都不想成为孙悟空</h2>
					<p class="message">
						<span>创建人：</span>
						<span>新世相</span>
						<span>创建时间：</span>
						<span>2015-04-15</span>
					</p>
					<p class="content">孙行者的荣辱之路</p>
				</div>
			</router-link>
			<div class="dqRecommendMore">
				<span>附近的圈子</span>
				<span>></span>
				<span>更多</span>
			</div>
			<router-link class="dqRecommendContent" tag="div" :to="{path:'/homepage'}">
				<div class="pic">
					<img src="../../assets/images/recommendIcon3.jpg" alt="">
				</div>
				<div class="right">
					<h2 class="title">游戏在路上</h2>
					<p class="message">
						<span>创建人：</span>
						<span>游戏人生</span>
						<span>创建时间：</span>
						<span>2016-05-23</span>
					</p>
					<p class="content">组长曾经是游戏策划，现在是手游项目经理，愿与从业者一同探讨、学习、成长。</p>
				</div>
			</router-link>
			<router-link class="dqRecommendContent" tag="div" :to="{path:'/homepage'}">
				<div class="pic">
					<img src="../../assets/images/recommendIcon4.jpg" alt="">
				</div>
				<div class="right">
					<h2 class="title">“单车猎人”</h2>
					<p class="message">
						<span>创建人：</span>
						<span>世界的尽头</span>
						<span>创建时间：</span>
						<span>2017-04-01</span>
					</p>
					<p class="content">一群普通人在城市里制造的传奇</p>
				</div>
			</router-link>
			<div class="dqRecommendMore">
				<span>你可能感兴趣</span>
				<span>></span>
				<span>更多</span>
			</div>
		</div>
		
		<!-- <div class="dqRecommendBottom">
			<img src="../../assets/images/humBottom.jpg" alt="">
		</div> -->
	</div>
</template>
<script>
	export default {

		name:'humTalk',
		data(){
			return {
				flag:false,
				tips:false
			}
		},
		methods:{
			search:function(e){
				this.flag = ! this.flag;
			},
			focus:function(e){
				this.tips = !this.tips;
			},
			blur:function(e){
				this.tips = false;
				this.flag = false;
			}
		}

	}
</script>
<style scoped lang="less">
	.dqRecommendContainer{
		width:750/75rem;
		height:1300/75rem;
		font-family:'微软雅黑';
		background:#f0f0f0;
		position:relative;
	}
	.indexSearch_top{
		display:none;
		width: 750/75rem;
		height: 88/75rem;
		background: #5483C2;
		position: fixed;
		top:0;
		input{
			width: 650/75rem;
			height:58/75rem;
			margin:15/75rem 50/75rem;
			border:1px solid #fff;
			border-radius: 12/75rem;
			font-size:24/75rem;
		}
		img{
			position: absolute;
			right:70/75rem;
			top:25/75rem;
			width:30/75rem;
		}
	}
	.indexSearch_con{
		display:none;
		position: fixed;
		top:88/75rem;
		background:white;
		z-index:100;
		text-align:left;
		.history{
			width: 690/75rem;
			font-size: 20/75rem;
			color: #ccc;
			height: 15/75rem;
			line-height: 15/75rem;
			padding:25/75rem 30/75rem;
			border-bottom: 1/75rem solid #ccc;
		}
		.content{
			background:white;
			width: 690/75rem;
			height: 40/75rem;
			font-size: 25/75rem;
			line-height: 40/75rem;
			border-bottom: 1/75rem solid #ccc;
			padding:25/75rem 30/75rem;
		}
	}
	.show{
		display:block;
	}
	.filter{
		filter: blur(5px);
	}
	.dqRecommendTitle{
		background:white;
		width:10rem;
		height:85/75rem;
		line-height:85/75rem;
		font-size:34/75rem;
		text-align:center;
		font-weight:700;
		position:relative;
		border-bottom:3/75rem solid #aaaaaa;
		img{
			width:34/75rem;
			height:39/75rem;
			float:right;
			margin-top:23/75rem;
			margin-right:20/75rem;
		}
	}
	.top{
		position:fixed;
		top:0;
	}
	.box{
		position:absolute;
		overflow: auto;
		bottom:65/75rem;
		top:165/75rem;
		width:100%;
		height:auto;
	}
	.dqRecommendNav{
		width:100%;
		height:80/75rem;
		background:white;
		li{
			float:left;
			width:25%;
			height:80/75rem;
			a{
				display:inline-block;
				height:100%;
				width:50%;
				font-size:28/75rem;
				color:black;
				line-height:80/75rem;
				font-weight:700;
			}
		}
		li:first-child a{
			color:#5483c2;
			border-bottom:6/75rem solid #5483c2;
			height:74/75rem;
		}
	}
	.dqRecommendMore{
		width:100%;
		height:65/75rem;
		font-size:20/75rem;
		span:first-child{
			float:left;
			height:35/75rem;
			line-height:35/75rem;
			margin-left:20/75rem;
			margin-top:15/75rem;
			padding-left:10/75rem;
			border-left:8/75rem solid #5483c2;
			display:inline-block;
		}
		span:nth-child(3){
			float:right;
			height:35/75rem;
			line-height:35/75rem;
			margin-top:15/75rem;
			margin-right:15/75rem;
			color:#5483c2;
		}
		span:nth-child(2){
			float:right;
			font-size:30/75rem;
			color:#5483c2;
			margin-right:20/75rem;
			font-family:'宋体';
			font-weight:bold;
			margin-top:18/75rem;
		}
	}
	.dqRecommendContent{
		height:210/75rem;
		background:white;
		margin-bottom:20/75rem;
		.pic{
			float:left;
			margin:20/75rem;
			width:155/75rem;
			height:155/75rem;
			overflow:hidden;
			position:relative;
			img{
				width:155/75rem;
			}
		}
		.right{
			float:left;
			height:155/75rem;
			width:535/75rem;
			margin:20/75rem auto;
			text-align:left;
			.title{
				font-weight:normal;
				color:black;
				font-size:36/75rem;
				margin-bottom:34/75rem;
			}
			.message{
				font-size:20/75rem;
				color:#aaaaaa;
				line-height:30/75rem;
				margin-bottom:3/75rem;
			}
			.content{
				font-size:20/75rem;
				color:black;
				line-height:30/75rem;
			}
		}
	}
	.dqRecommendBottom{
		width:100%;
		height:98/75rem;
		position:fixed;
		bottom:0;
		img{
			width:100%;
			height:100%;
		}
	}
</style>