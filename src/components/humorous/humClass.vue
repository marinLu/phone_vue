<template>
	<div class="dqClassContainer">
		<div class="top" :class="[{'filter':this.flag}]">
			<div class="dqClassTitle">
				<span class="title">逗圈</span>
				<img src="../../assets/images/search.jpg" alt="" @click="search">
			</div>
			<div class="dqClassNav">
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
			<div class="dqClassMore">
				<span>闲聊</span>
				<span>></span>
				<span>更多</span>
			</div>
			<div class="dqClassContent">
				<router-link class="item clearfix" tag="div" :to="{path:'/homepage'}">
					<div class="pic">
						<img src="../../assets/images/classIcon1.jpg" alt="">
					</div>
					<p class="title">社交恐惧症</p>
					<p class="mes"><span>53569</span><span>个恐友</span></p>
				</router-link>
				
				<router-link class="item clearfix" tag="div" :to="{path:'/homepage'}">
					<div class="pic">
						<img src="../../assets/images/classIcon2.jpg" alt="">
					</div>
					<p class="title">我们什么都Hold住</p>
					<p class="mes"><span>125369</span><span>个知了</span></p>
				</router-link>
				<router-link class="item clearfix" tag="div" :to="{path:'/homepage'}">
					<div class="pic">
						<img src="../../assets/images/classIcon3.jpg" alt="">
					</div>
					<p class="title">文艺青年装B快乐</p>
					<p class="mes"><span>15693</span><span>个装B玩意儿</span></p>
				</router-link>
			</div>
			<div class="dqClassMore">
				<span>情感</span>
				<span>></span>
				<span>更多</span>
			</div>
			<div class="dqClassContent">
				<router-link class="item clearfix" tag="div" :to="{path:'/homepage'}">
					<div class="pic">
						<img src="../../assets/images/classIcon4.jpg" alt="">
					</div>
					<p class="title">我习惯了一个人</p>
					<p class="mes"><span>63589</span><span>个玻璃心</span></p>
				</router-link>
				<router-link class="item clearfix" tag="div" :to="{path:'/homepage'}">
					<div class="pic">
						<img src="../../assets/images/classIcon5.jpg" alt="">
					</div>
					<p class="title">亲爱的陌生人</p>
					<p class="mes"><span>125219</span><span>个陌陌</span></p>
				</router-link>
				<router-link class="item clearfix" tag="div" :to="{path:'/homepage'}">
					<div class="pic">
						<img src="../../assets/images/classIcon6.jpg" alt="">
					</div>
					<p class="title">我的极品前任</p>
					<p class="mes"><span>23369</span><span>个成员</span></p>
				</router-link>
			</div>
			<div class="dqClassMore">
				<span>兴趣</span>
				<span>></span>
				<span>更多</span>
			</div>
			<div class="dqClassContent">
				<router-link class="item clearfix" tag="div" :to="{path:'/homepage'}">
					<div class="pic">
						<img src="../../assets/images/classIcon1.jpg" alt="">
					</div>
					<p class="title">社交恐惧症</p>
					<p class="mes"><span>53569</span><span>个恐友</span></p>
				</router-link>
				<router-link class="item clearfix" tag="div" :to="{path:'/homepage'}">
					<div class="pic">
						<img src="../../assets/images/classIcon2.jpg" alt="">
					</div>
					<p class="title">我们什么都Hold住</p>
					<p class="mes"><span>125369</span><span>个知了</span></p>
				</router-link>
				<router-link class="item clearfix" tag="div" :to="{path:'/homepage'}">
					<div class="pic">
						<img src="../../assets/images/classIcon3.jpg" alt="">
					</div>
					<p class="title">文艺青年装B快乐</p>
					<p class="mes"><span>15693</span><span>个装B玩意儿</span></p>
				</router-link>
			</div>
		</div>
		
		<!-- <div class="dqClassBottom">
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
	.dqClassContainer{
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
	.dqClassTitle{
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
	.dqClassNav{
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
		li:nth-child(2) a{
			color:#5483c2;
			border-bottom:6/75rem solid #5483c2;
			height:74/75rem;
		}
	}
	.dqClassMore{
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
	.dqClassContent{
		height:290/75rem;
		padding:20/75rem;
		background:white;
		display:flex;
		justify-content:space-between;
		.item{
			float:left;
			width:195/75rem;
			height:290/75rem;
			.pic{
				float:left;
				width:195/75rem;
				height:195/75rem;
				overflow:hidden;
				position:relative;
				img{
					width:227/75rem;
					position:absolute;
					top:-40/75rem;
					left:-20/75rem;
				}
			}
			.title{
				font-size:30/75rem;
				color:black;
				line-height:60/75rem;
				margin-top:20/75rem;
				text-align:left;
				white-space:nowrap;
				overflow:hidden;
				text-overflow:ellipsis;
				width:95%;
			}
			.mes{
				font-size:20/75rem;
				color:#aaaaaa;
				text-align:left;
			}
		}
	}
	.dqClassBottom{
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