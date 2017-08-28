<template>
	<div class="dqJoinContainer">
		<div class="top" :class="[{'filter':this.flag}]">
			<div class="dqJoinTitle">
				<span class="title">逗圈</span>
				<img src="../../assets/images/search.jpg" alt="" @click="search">
			</div>
			<div class="dqJoinNav">
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
			<div class="dqJoinMore">
				<span>我加入的逗圈</span>
				<router-link :to="{path:'/group'}" tag="div">
					<span>更多</span>
					<span>></span>
				</router-link>
			</div>
			<router-link class="dqJoinContent" :to="{path:'/group'}" tag="div">
				<div class="pic">
					<img src="../../assets/images/joinIcon1.jpg" alt="">
				</div>
				<div class="right">
					<h2 class="title">长征路远心更远</h2>
					<p class="message">
						<span>创建人：</span>
						<span>背着书包的小二</span>
					</p>
					<p class="content">未来的路还长，让我心怀坚定的信念，一步一步慢慢走，无论我们的人生路，还是长征路...</p>
				</div>
				<div class="num">12</div>
			</router-link>
			<router-link class="dqJoinContent" :to="{path:'/group'}" tag="div">
				<div class="pic">
					<img src="../../assets/images/joinIcon2.jpg" alt="">
				</div>
				<div class="right">
					<h2 class="title">被杀死的那只知更鸟</h2>
					<p class="message">
						<span>创建人：</span>
						<span>安静的念</span>
					</p>
					<p class="content">知更鸟不在玉米地里筑巢，只给人们带来悦耳的叫声，愉悦人们。</p>
				</div>
			</router-link>
			<router-link class="dqJoinContent" :to="{path:'/group'}" tag="div">
				<div class="pic">
					<img src="../../assets/images/joinIcon3.jpg" alt="">
				</div>
				<div class="right">
					<h2 class="title">我们看剧爱吐槽</h2>
					<p class="message">
						<span>创建人：</span>
						<span>Queen.Lareina</span>
					</p>
					<p class="content">什么剧都看，就是爱吐槽！</p>
				</div>
				<div class="num">107</div>
			</router-link>
			<router-link class="dqJoinContent" :to="{path:'/group'}" tag="div">
				<div class="pic">
					<img src="../../assets/images/joinIcon4.jpg" alt="">
				</div>
				<div class="right">
					<h2 class="title">最近我们读了同一本书</h2>
					<p class="message">
						<span>创建人：</span>
						<span>我昨天叫何宝荣</span>
					</p>
					<p class="content">读书是精神享受的过程，拒绝低俗浮躁。欢迎每一个尊重别人思想、又有独立思考能力的人来...</p>
				</div>
				<div class="num">6</div>
			</router-link>
			<div class="dqJoinToFind">更多精彩的逗圈<span><router-link :to="{path:'/humorous/class'}">去发现</router-link></span></div>
		</div>
		
		<!-- <div class="dqJoinBottom">
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
	.dqJoinContainer{
		width:750/75rem;
		height:1000/75rem;
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
	.dqJoinTitle{
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
		bottom:96/75rem;
		top:165/75rem;
		width:100%;
		height:100%;
	}
	.dqJoinNav{
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
		li:nth-child(3) a{
			color:#5483c2;
			border-bottom:6/75rem solid #5483c2;
			height:74/75rem;
		}
	}
	.dqJoinMore{
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
		div{
			float:right;
			width:130/75rem;
			span:first-child{
				height:35/75rem;
				font-size:21/75rem;
				line-height:35/75rem;
				margin-top:16/75rem;
				color:#5483c2;
				font-family:'微软雅黑';
				font-weight:700;
				border:0;
				display:inline-block;
			}
			span:nth-child(2){
				font-size:30/75rem;
				color:#5483c2;
				margin-right:20/75rem;
				font-family:'宋体';
				font-weight:bold;
				margin-top:18/75rem;
				display:inline-block;
				font-weight:700;
			}
		}
	}
	.dqJoinContent{
		height:180/75rem;
		background:white;
		margin-bottom:10/75rem;
		position:relative;
		.pic{
			float:left;
			margin:20/75rem;
			width:144/75rem;
			height:141/75rem;
			overflow:hidden;
			position:relative;
			img{
				width:144/75rem;
			}
		}
		.right{
			float:left;
			height:141/75rem;
			width:535/75rem;
			margin:20/75rem auto;
			text-align:left;
			.title{
				font-weight:normal;
				color:black;
				font-size:36/75rem;
				margin-bottom:20/75rem;
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
				width:425/75rem;
			}
		}
		.num{
			background:#5483c2;
			color:white;
			position:absolute;
			right:20/75rem;
			display:inline-block;
			padding:8/75rem 16/75rem;
			border-radius:20/75rem;
			font-size:20/75rem;
			top:75/75rem;
		}
	}
	.dqJoinToFind{
		height:75/75rem;
		width:100%;
		font-size:30/75rem;
		line-height:75/75rem;
		text-indent:20/75rem;
		color:black;
		text-align:left;
		background:white;
		position:fixed;
		bottom:108/75rem;
		span{
			position:absolute;
			top:6/75rem;
			right:20/75rem;
			width:130/75rem;
			height:60/75rem;
			color:#5483c2;	
			border:1/75rem solid #5483c2;
			border-radius:5/75rem;
			padding:0 20/75rem;
			line-height:60/75rem;
		}
	}
	.dqJoinBottom{
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