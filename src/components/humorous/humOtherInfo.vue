<template>
	<div class="otherInfoContainer">
		<div class="otherInfoHead">
			<img src="../../assets/images/bigbg.jpg" alt="" class="bg">
			<div class="pic">
				<img src="../../assets/images/littlebg.jpg" alt="">
				<p>忘不掉的伤</p>
			</div>
			<p class="top"><span class="back" @click="back"><</span><span class="share">分享</span></p>
		</div>
		<div class="otherInfoBtn">
			<div class="box">
			<router-link class="privite" tag="span" :to="{path:'/indexTalk'}">私信</router-link>
			
				<span class="watch">关注</span>
			</div>
		</div>
		<div class="otherInfoNav">
			<ul>
				<li class="active"><a href="javascript:;">动态</a></li>
				<li><a href="javascript:;">相册</a></li>
				<li><a href="javascript:;">关注</a></li>
				<li><a href="javascript:;">粉丝</a></li>
			</ul>
		</div>
		<div class="otherInfoYear">
			— 2017 —
		</div>
		<div class="otherInfoItem">
			<p class="title">加入逗圈<span>4天前</span></p>
			<div class="pic clearfix"><img src="../../assets/images/icon1.jpg" alt=""></div>
			<div class="message clearfix">
				<p class="first">你来或不来，我都在那里</p>
				<p class="second">文艺青年集散地~</p>
			</div>
			<div class="tips">12更新</div>
		</div>
		<div class="otherInfoItem">
			<p class="title">加入逗圈<span>3天前</span></p>
			<div class="pic clearfix"><img src="../../assets/images/icon2.jpg" alt=""></div>
			<div class="message clearfix">
				<p class="first">我们什么都聊~~~~</p>
				<p class="second">我们真的什么都聊~~~~</p>
			</div>
			<div class="tips">28更新</div>
		</div>
		<div class="otherInfoPhoto">
			<p class="title">在相册中更新图片2张</p>
			<img src="../../assets/images/classIcon1.jpg" alt="">
			<img src="../../assets/images/classIcon2.jpg" alt="">
		</div>
	</div>
</template>
<script>
	export default {

		name:'otherInfo',
		data(){
			return {

			}
		},
		methods:{
			back:function(e){
				window.history.go(-1);
			}
		}

	}
</script>
<style scoped lang="less">
	.otherInfoContainer{
		width:100%;
		height:auto;
		font-family:'微软雅黑';
		background:#f0f0f0;
		position:relative;
	}
	.otherInfoHead{
		width:750/75rem;
		.bg{
			width:100%;
		}
		.pic{
			width:200/75rem;
			position:absolute;
			top:95/75rem;
			left:275/75rem;
			img{
				width:100%;
				border-radius:50%;
			}
			p{
				text-align:center;
				font-size:32/75rem;
				color:white;
				margin-top:30/75rem;
			}
		}
		.top{
			font-size:32/75rem;
			color:white;
			position:absolute;
			top:0;
			width:100%;
			.back{
				font-family:'宋体';
				margin:20/75rem;
				display:inline-block;
				font-weight:900;
				font-size:40/75rem;
			}
			.share{
				float:right;
				margin:20/75rem;
			}

		}
	}
	.otherInfoBtn{
		height:75/75rem;
		background:white;
		width:100%;
		text-align:right;
		.box{
			margin:0 20/75rem;
			height:73/75rem;
			border-bottom:2/75rem solid #aaaaaa;
			font-size:26/75rem;
			.privite{
				text-align:center;
				display:inline-block;
				width:90/75rem;
				height:45/75rem;
				line-height:45/75rem;
				color:#5483c2;
				border:1px solid #5483c2;
				margin-top:15/75rem;
				border-radius:5/75rem;
				margin-right:30/75rem;
			}
			.watch{
				text-align:center;
				display:inline-block;
				width:125/75rem;
				height:45/75rem;
				line-height:45/75rem;
				color:white;
				background:#5483c2;
				margin-top:15/75rem;
				border-radius:5/75rem;
			}
		}
	}
	.otherInfoNav{
		width:100%;
		height:75/75rem;
		background:white;
		ul{
			margin:0 20/75rem;
			height:100%;
			li{
				float:left;
				height:75/75rem;
				line-height:75/75rem;
				width:150/75rem;
				font-size:30/75rem;
				font-weight:700;
				text-align:center;
				margin-left:35/75rem;
				a{
					display:inline-block;
					width:100%;
					height:100%;
				}
			}
			li:first-child{
				margin-left:0;
			}
			.active{
				height:70/75rem;
				line-height:70/75rem;
				border-bottom:5/75rem solid #5483c2;
				a{
					color:#5483c2;
				}
			}
		}
	}
	.otherInfoYear{
		width:100%;
		height:40/75rem;
		line-height:40/75rem;
		background:#f0f0f0;
		color:#aaaaaa;
		text-align:center;
		font-size:24/75rem;
	}
	.otherInfoItem{
		width:710/75rem;
		height:190/75rem;
		padding:20/75rem;
		background:#fafafa;
		color:#aaaaaa;
		text-align:left;
		position:relative;
		margin-bottom:15/75rem;
		.title{
			font-size:20/75rem;
			margin-bottom:20/75rem;
			span{
				float:right;
			}
		}
		.pic{
			float:left;
			width:142/75rem;
			height:142/75rem;
			img{
				width:100%;
			}
		}
		.message{
			float:left;
			width:490/75rem;
			height:142/75rem;
			margin-left:20/75rem;
			.first{
				font-size:20/75rem;
				color:black;
			}
			.second{
				font-size:20/75rem;
				margin-top:30/75rem;
			}
		}
		.tips{
			color:white;
			background:#5483c2;
			padding:15/75rem 15/75rem;
			position:absolute;
			right:20/75rem;
			top:90/75rem;
			font-size:20/75rem;
			border-radius:50/75rem;
		}
	}
	.otherInfoPhoto{
		width:710/75rem;
		height:190/75rem;
		padding:20/75rem;
		background:#fafafa;
		color:#aaaaaa;
		text-align:left;
		position:relative;
		margin-bottom:15/75rem;
		.title{
			font-size:20/75rem;
			margin-bottom:20/75rem;
			span{
				float:right;
			}
		}
		img{
			width:235/75rem;
			margin-right:26/75rem;
		}
	}
</style>