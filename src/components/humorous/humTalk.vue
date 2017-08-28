<template>
	<div class="dqDqtalkContainer">
		<div class="dqDqtalkTitle">
			<img src="../../assets/images/left.png" alt="" class="clearfix" @click="back">
			<span class="title">话题主页</span>
			<router-link :to="{path:'/homepage'}"><span class="more">···</span></router-link>	
		</div>
		<div class="dqDqtalkMore">
			<img src="../../assets/images/dq_talk_icon1.jpg" alt="">
			<span>阴阳师手游部落</span>
			<img src="../../assets/images/more.jpg" alt="">
		</div>
		<div class="dqDqtalkItem">
			<p class="title">阴阳师美图来一波~</p>
			<div class="detail">
				<router-link class="pic" :to="{path:'/humOtherInfo'}" tag="div"><img src="../../assets/images/dq_talk_icon2.jpg" alt=""></router-link>
				<p>美美哒鸟姑姑~</p>
				<p>2016-11-12</p>
			</div>
		</div>
		<div class="dqDqtalkContent">
			<p>鸟姐镇楼~</p>
			<div class="pic"><img src="../../assets/images/dq_talk_icon3.jpg" alt="" ></div>
		</div>
		<div class="dqDqtalkCommont">
			<span>评论</span>&nbsp;
			<span>(25679)</span>
		</div>
		<div class="dqDqtalkRes">
			<p class="title">鸟姐威武~</p><span>20分钟前</span>
			<div class="detail">
				<router-link class="pic" :to="{path:'/humOtherInfo'}" tag="div"><img src="../../assets/images/dq_talk_icon4.jpg" alt=""></router-link>
				<p>开心的小松鼠</p>
			</div>
		</div>
		<div class="dqDqtalkRes">
			<p class="title re_detail">鸟姐厉害了</p><span>5分钟前</span>
			<div class="detail re_detail">
				<router-link class="pic" :to="{path:'/humOtherInfo'}" tag="div"><img src="../../assets/images/dq_talk_icon5.jpg" alt=""></router-link>
				<p>激动的茨木童子</p>
			</div>
		</div>
		<div class="dqDqtalkRes">
			<p class="title">鸟姐威武~</p><span>20分钟前</span>
			<div class="detail">
				<router-link class="pic" :to="{path:'/humOtherInfo'}" tag="div"><img src="../../assets/images/dq_talk_icon4.jpg" alt=""></router-link>
				<p>开心的小松鼠</p>
			</div>
		</div>
		<div class="dqDqtalkRes">
			<p class="title re_detail">鸟姐厉害了</p><span>5分钟前</span>
			<div class="detail re_detail">
				<router-link class="pic" :to="{path:'/humOtherInfo'}" tag="div"><img src="../../assets/images/dq_talk_icon5.jpg" alt=""></router-link>
				<p>激动的茨木童子</p>
			</div>
		</div>
		<div class="dqDqtalkReview">
			<div class="box">
				<input type="text" placeholder="发表评论">
			</div>
		</div>
	</div>
</template>
<script>
	export default {

		name:'humTalk',
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
	.dqDqtalkContainer{
		width:100%;
		height:auto;
		font-family:'微软雅黑';
		background:#f0f0f0;
		position:relative;
	}
	.dqDqtalkTitle{
		background:white;
		width:10rem;
		height:85/75rem;
		line-height:85/75rem;
		font-size:34/75rem;
		text-align:center;
		font-weight:700;
		position:relative;
		border-bottom:3/75rem solid #aaaaaa;
		.more{
			position:absolute;
			right:20/75rem;
			letter-spacing: 4/75rem;
		}
	}
	.dqDqtalkTitle img{
		position:absolute;
		top:30/75rem;
		left:20/75rem;
		width:16/75rem;
		height:26/75rem;
	}
	.dqDqtalkMore{
		background:white;
		width:100%;
		height:60/75rem;
		line-height:6-/75rem;
		overflow:hidden;
		margin-bottom:10/75rem;
		img:nth-child(1){
			float:left;
			width:50/75rem;
			height:50/75rem;
			vertical-align:middle;
			margin-left:20/75rem;
			margin-top:5/75rem;
		}
		span:nth-child(2){
			font-size:24/75rem;
			color:black;
			float:left;
			margin-left:25/75rem;
			margin-top:16/75rem;
		}
		img:nth-child(3){
			float:right;
			width:16/75rem;
			height:26/75rem;
			margin-top:17/75rem;
			margin-right:20/75rem;
		}
	}
	.dqDqtalkItem{
		height:115/75rem;
		background:white;
		padding:10/75rem 20/75rem;
		text-align:left;
		margin-bottom:10/75rem;
		.title{
			font-size:30/75rem;
			color:black;
		}
		.detail{
			height:50/75rem;
			margin-left:30/75rem;
			margin-top:20/75rem;
			position:relative;
			overflow:hidden;
			.pic{
				width:50/75rem;
				height:50/75rem;
				border-radius:50%;
				float:left;
				img{
					width:50/75rem;
					height:50/75rem;
				}
			}

			p{
				font-size:22/75rem;
				color:black;
				float:left;
				margin-left:20/75rem;
				width:300/75rem;
				line-height:26/75rem;
			}
			p:nth-child(3){
				color:#aaaaaa;
			}
		}
	}
	.dqDqtalkContent{
		padding:20/75rem;
		background:white;
		p{
			font-size:30/75rem;
			color:black;
			text-align:left;
		}
		.pic{
			width:400/75rem;
			height:400/75rem;
			margin:30/75rem auto;
			overflow:hidden;
			border-bottom:40/75rem;
			img{
				width:100%;
				margin-top:-90/75rem;
			}
		}
	}
	.dqDqtalkCommont{
		color:#aaaaaa;
		font-size:20/75rem;
		text-align:left;
		padding:20/75rem 20/75rem;
		span{
			display:inline-block;
			height:34/75rem;
			line-height:34/75rem;
		}
		span:first-child{
			border-left:8/75rem solid #5483c2;
			padding-left:10/75rem;
		}
	}
	.dqDqtalkRes{
		height:75/75rem;
		background:white;
		padding:20/75rem;
		text-align:left;
		margin-bottom:10/75rem;
		overflow:hidden;
		.title{
			font-size:28/75rem;
			color:black;
			float:left;
		}
		span{
			color:#aaaaaa;
			font-size:20/75rem;
			margin-left:30/75rem;
			margin-top:6/75rem;
			float:left;
		}
		.detail{
			width:600/75rem;
			height:50/75rem;
			margin-top:40/75rem;
			position:relative;
			overflow:hidden;
			.pic{
				width:45/75rem;
				height:45/75rem;
				border-radius:50%;
				float:left;
				overflow:hidden;
			}
			img{
				width:45/75rem;
				height:45/75rem;
				float:left;
			}
			p{
				font-size:22/75rem;
				color:#aaaaaa;
				float:left;
				margin-left:24/75rem;
				width:300/75rem;
				line-height:40/75rem;
			}
		}
		.re_detail{
			margin-left:60/75rem;
			color:#aaaaaa;
			font-size:24/75rem;
		}
	}
	.dqDqtalkReview{
		height:100/75rem;
		width:100%;
		position:fixed;
		bottom:0;
		border:1px solid #aaaaaa;
		background:rgba(255,255,255,0.4);
		.box{
			width:710/75rem;
			height:70/75rem;
			border:1px solid #aaaaaa;
			border-radius:8/75rem;
			margin:15/75rem auto;
			input{
				border:0;
				width:100%;
				height:100%;
				line-height:100%;
				font-size:24/75rem;
				text-indent:20/75rem;
			}
		}
	}
</style>