<template>
	<div class="dqHomePageContainer">
		<div class="dqHomePageTitle">
			<img src="../../assets/images/left.png" alt="" class="clearfix" @click="back">
			<span class="title">逗圈主页</span>
			<router-link :to="{path:'/editortalk'}"><span class="write">写话题</span></router-link>
			<span class="more" @click="more">···</span>
		</div>
		<div class="dqHomePageHead">
			<div class="cover clearfix"></div>
			<div class="select clearfix" :class="[{'show':this.index}]">
				<div class="triangle"></div>
				<div class="selection">
					<ul>
						<li><a href="javascript:;">逗圈分享</a></li>
						<li><a href="javascript:;">退出逗圈</a></li>
						<li><a href="javascript:;">举报</a></li>
					</ul>
				</div>
			</div>
			<div class="left clearfix">
				<h2>好莱坞老电影</h2>
				<p>
				 	<span>创建人：薄荷绿洲</span>
				 	<span class="times">创建时间：2010-07-22</span>
			 	</p>
			 	<p>介绍和交流：1930-1970年代好莱坞黄金时代的经典电影，以及同时期其他国家和地区的经典电影。</p>
			</div>
			<div class="right clearfix">
				<img src="../../assets/images/dq_home_icon.jpg" alt="">
				<div class="enter" @click="enter"><span>{{this.tips}}</span></div>
			</div>
		</div>
		<div class="dqHomePageContent">
			<div class="dqHomePageMore">
				<span>话题 (591)</span>
				<!-- <img src="../../assets/toright.jpg" alt=""> -->
				<span>></span>
				<span>更多</span>
			</div>
			<router-link class="dqHomePageItem" :to="{path:'/talk'}" tag="div">
				<div class="left clearfix">
					<p class="title">一人说一部你最爱的电影</p>
					<div class="detail">
						<img src="../../assets/images/dq_home_littleicon1.jpg" alt="">
						<span class="name">幕府散人</span>
						<span class="commont">评论</span>
						<span class="index">93</span>
						<span class="times">5小时前</span>
					</div>
				</div>
			</router-link>
			<router-link class="dqHomePageItem" :to="{path:'/talk'}" tag="div">
				<div class="left clearfix">
					<p class="title">都要多少人是还记得这一句经典台词 tomorrow is another day</p>
					<div class="detail">
						<img src="../../assets/images/dq_home_littleicon2.jpg" alt="">
						<span class="name">伦伦敦敦</span>
						<span class="commont">评论</span>
						<span class="index">62</span>
						<span class="times">2017-4-8</span>
					</div>
				</div>
				<div class="right clearfix">
					<div class="pic">
						<img src="../../assets/images/dq_home_bigicon1.jpg" alt="">
					</div>
				</div>
			</router-link>
			<router-link class="dqHomePageItem" :to="{path:'/talk'}" tag="div">
				<div class="left clearfix">
					<p class="title">美式英雄保罗纽曼</p>
					<div class="detail">
						<img src="../../assets/images/dq_home_littleicon3.jpg" alt="">
						<span class="name">云路</span>
						<span class="commont">评论</span>
						<span class="index">23</span>
						<span class="times">2017-4-7</span>
					</div>
				</div>
			</router-link>
			<router-link class="dqHomePageItem" :to="{path:'/talk'}" tag="div">
				<div class="left clearfix">
					<p class="title">我拍摄的好莱坞 40年代复古摄影作品</p>
					<div class="detail">
						<img src="../../assets/images/dq_home_littleicon4.jpg" alt="">
						<span class="name">复古摄影师小哲</span>
						<span class="commont">评论</span>
						<span class="index">25</span>
						<span class="times">2017-4-2</span>
					</div>
				</div>
				<div class="right clearfix">
					<div class="pic">
						<img src="../../assets/images/dq_home_bigicon2.jpg" alt="">
					</div>
				</div>
			</router-link>
			<router-link class="dqHomePageItem" :to="{path:'/talk'}" tag="div">
				<div class="left clearfix">
					<p class="title">一条狗的使命</p>
					<div class="detail">
						<img src="../../assets/images/dq_home_littleicon1.jpg" alt="">
						<span class="name">云路</span>
						<span class="commont">评论</span>
						<span class="index">23</span>
						<span class="times">2017-4-7</span>
					</div>
				</div>
			</router-link>
		</div>
		</div>	
	</div>
</template>
<script>
	export default {

		name:'dq_homepage',
		data(){
			return {
				index:false,
				flag:false,
				tips:'未加入'
			}
		},
		methods:{

			more:function(e){
				this.index = ! this.index;
			},
			enter:function(e){
				this.flag = ! this.flag;
				this.tips = this.flag?'已加入':'未加入';
			},
			back:function(e){
				window.history.go(-1);
			}
		}

	}
</script>
<style scoped lang="less">
	.dqHomePageContainer{
		width:100%;
		font-family:'微软雅黑';
		text-align:center;
	}
	.dqHomePageTitle{
		width:10rem;
		height:85/75rem;
		line-height:85/75rem;
		font-size:34/75rem;
		font-weight:700;
		position:relative;
		border-bottom:2/75rem solid #aaaaaa;
		color:black;
		background:white;
		img{
			position:absolute;
			top:30/75rem;
			left:20/75rem;
			width:14/75rem;
			height:24/75rem;
		}
		.write{
			width:104/75rem;
			height:38/75rem;
			border:1px solid black;
			font-size:24/75rem;
			line-height:38/75rem;
			text-align:center;
			border-radius:5/75rem;
			position:absolute;
			top:25/75rem;
			right:105/75rem;
		}
		.more{
			position:absolute;
			right:20/75rem;
			letter-spacing: 4/75rem;
		}
	}
	.dqHomePageHead{
		width:100%;
		height:270/75rem;
		background:url("../../assets/images/dq_homebg.jpg") no-repeat;
		background-size:100%;
		position:relative;
		.cover{
			width:100%;
			height:100%;
			background:rgba(255,255,255,0.5);
			position:absolute;
			z-index:1;
		}
		.select{
			position:absolute;
			z-index:100;
			top:0;
			right:20/75rem;
			display:none;
			.triangle{
				position:absolute;
				top:0;
				right:20/75rem;
				width:0;
		        height:0;
		        border-left:14/75rem solid transparent;
		        border-right:14/75rem solid transparent;
		        border-bottom:20/75rem solid white;
			}
			.selection{
				float:left;
				margin-top:16/75rem;
				width:272/75rem;
				background:white;
				border:1px solid #aaaaaa;
				border-radius:8/75rem;
				li{
					font-size:24/75rem;
					width:245/75rem;
					height:60/75rem;
					line-height:60/75rem;
					text-align:center;
					border-top:1px solid #aaaaaa;
					margin-left:12/75rem;
					a{
						color:#a3a3a3;
					}
				}
				li:first-child{
					border:0;
				}
			}
		}
		.show{
			display:block;
		}
		.left{
			width:480/75rem;
			position:absolute;
			top:40/75rem;
			left:20/75rem;
			z-index:10;
			text-align:left;
			h2{
				font-size:36/75rem;
				font-weight:normal;
				margin-bottom:50/75rem;
				color:black;
			}
			p{
				font-size:20/75rem;
				line-height:35/75rem;
				margin-top:10/75rem;
				color:black;
				span:nth-child(2){
					float:right;
				}
			}
		}
		.right{
			width:160/75rem;
			position:absolute;
			top:40/75rem;
			right:20/75rem;
			z-index:10;
			color:#000000;
			img{
				width:158/75rem;
				height:158/75rem;
			}
			.enter{
				width:85/75rem;
				height:30/75rem;
				border:2/75rem solid black;
				border-radius:5/75rem;
				margin:10/75rem auto;
				font-size:20/75rem;
				color:black;
				span{
					width:80/75rem;
					height:24/75rem;
					line-height:24/75rem;
					background:white;
					display:inline-block;
					margin-top:3/75rem;
					border-radius:5/75rem;
					color:black;
				}
				
			}
		}
	}
	.dqHomePageContent{
		width:100%;
		background:#f2f2f2;
		.dqHomePageMore{
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
				border-left:10/75rem solid #5483c2;
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
				margin-top:14/75rem;
			}
		}
		.dqHomePageItem{
			width:710/75rem;
			padding:20/75rem;
			min-height:135/75rem;
			background:white;
			margin-bottom:10/75rem;
			overflow:hidden;
			.left{
				width:480/75rem;
				float:left;
				text-align:left;
				font-size:30/75rem;
				color:black;
				.detail{
					height:30/75rem;
					line-height:30/75rem;
					color:#aaaaaa;
					font-size:20/75rem;
					margin-top:60/75rem;
					position:relative;
					img{
						width:30/75rem;
						height:30/75rem;
						border-radius:50%;
						vertical-align:middle;
					}
					.commont{
						position:absolute;
						left:215/75rem;
					}
					.index{
						position:absolute;
						left:270/75rem;
					}
					.times{
						position:absolute;
						left:380/75rem;
					}
				}
			}
			.right{
				width:160/75rem;
				float:right;
				.pic{
					width:158/75rem;
					height:158/75rem;
					position:relative;
					overflow:hidden;
					img{
						width:150%;
						position:absolute;
						left:-32/75rem;
					}
					
				}
				
			}
		}
	}
</style>