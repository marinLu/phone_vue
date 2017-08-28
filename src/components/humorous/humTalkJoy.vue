<template>
	<div class="dqDqtalkContainer">
		<div class="dqDqtalkTitle" :class="[{'filter':this.info}]">
			<img src="../../assets/images/left.png" alt="" class="clearfix" @click="back">
			<span class="title">逗趣话题</span>
			<span class="more" @click="more">···</span>
			<div class="tips" :class="[{'show':this.flag}]">{{this.mark}}</div>
			<div class="select clearfix" :class="[{'show':this.index}]">
				<!-- <div class="triangle"></div> -->
				<div class="selection">
					<ul>
						<li @click="collect">收藏</li>
						<li @click="share">分享</li>
						<li @click="tips">不符合圈子</li>
						<li @click="inform">举报</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="content" :class="[{'filter':this.info}]">
			<router-link :to="{path:'/homepage'}" class="dqDqtalkMore" tag="div">
				<img src="../../assets/images/dq_talk_icon1.jpg" alt="">
				<span>阴阳师手游部落</span>
				<img src="../../assets/images/more.jpg" alt="">
			</router-link>
			<div class="dqDqtalkItem">
				<p class="title">阴阳师美图来一波~</p>
				<div class="detail">
					<div class="pic"><img src="../../assets/images/dq_talk_icon2.jpg" alt=""></div>
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
					<div class="pic"><img src="../../assets/images/dq_talk_icon4.jpg" alt="" class="clearfix"></div>
					<p>开心的小松鼠</p>
				</div>
			</div>
			<div class="dqDqtalkRes">
				<p class="title re_detail">鸟姐厉害了</p><span>5分钟前</span>
				<div class="detail re_detail">
					<div class="pic"><img src="../../assets/images/dq_talk_icon5.jpg" alt="" class="clearfix"></div>
					<p>激动的茨木童子</p>
				</div>
			</div>
			<div class="dqDqtalkRes">
				<p class="title">鸟姐威武~</p><span>20分钟前</span>
				<div class="detail">
					<div class="pic"><img src="../../assets/images/dq_talk_icon4.jpg" alt="" class="clearfix"></div>
					<p>开心的小松鼠</p>
				</div>
			</div>
			<div class="dqDqtalkRes">
				<p class="title re_detail">鸟姐厉害了</p><span>5分钟前</span>
				<div class="detail re_detail">
					<div class="pic"><img src="../../assets/images/dq_talk_icon5.jpg" alt="" class="clearfix"></div>
					<p>激动的茨木童子</p>
				</div>
			</div>
		</div>
		<div class="dqDqtalkReview" :class="[{'filter':this.info}]">
			<div class="box">
				<input type="text" placeholder="发表评论">
			</div>
		</div>
		<div class="dqDqtalkShare"  :class="[{'show':this.info}]">
			<p>分享到：</p>
			<div class="shareItem">
				<ul>
					<li><a href="javascript:;" @click="shareSuc">私信</a></li>
					<li><a href="javascript:;" @click="shareSuc">微信</a></li>
					<li><a href="javascript:;" @click="shareSuc">朋友圈</a></li>
					<li><a href="javascript:;" @click="shareSuc">QQ</a></li>
					<li><a href="javascript:;" @click="shareSuc">空间</a></li>
					<li><a href="javascript:;" @click="shareSuc">微博</a></li>
				</ul>
			</div>
			<span class="cancel" @click="cancel">取消</span>
		</div>
	</div>
</template>
<script>
	export default {

		name:'humTalk',
		data(){
			return {
				index:false,
				flag:false,
				mark:'',
				info:false
			}
		},
		methods:{
			back:function(e){
				window.history.go(-1);
			},
			more:function(e){
				this.index = ! this.index;
			},
			collect:function(e){
				this.mark = '收藏成功';
				this.flag = true;
				setTimeout(function(){
					this.flag = false;
				},1000);
				this.index = false;
			},
			share:function(e){
				
				this.flag = false;
				this.index = false;
				this.info = true;
			},
			tips:function(e){
				this.mark = '提醒成功';
				this.flag = true;
				this.index = false;
			},
			inform:function(e){
				this.mark = '举报成功';
				this.flag = true;
				this.index = false;
			},
			cancel:function(e){
				this.info = false;
			},
			shareSuc:function(e){
				this.flag = true;
				this.mark = '分享成功';
				this.info = false;
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
	.filter{
		filter: blur(5px);
	}
	.dqDqtalkTitle{
		background:white;
		width:10rem;
		height:85/75rem;
		line-height:85/75rem;
		font-size:34/75rem;
		text-align:center;
		font-weight:700;
		border-bottom:3/75rem solid #aaaaaa;
		position:fixed;
		top:0;
		z-index:10;
		.more{
			position:absolute;
			right:20/75rem;
			letter-spacing: 4/75rem;
		}
		.tips{
			width:315/75rem;
			height:65/75rem;
			line-height:65/75rem;
			border-radius:40/75rem;
			background:#f0f0f0;
			color:#aaaaaa;
			font-size:24/75rem;
			position:absolute;
			bottom:-140/75rem;
			left:217/75rem;
			display:none;
		}
		.select{
			position:absolute;
			display:none;
			z-index:100;
			top:88/75rem;
			right:20/75rem;
			height:300/75rem;
			background:url('../../assets/images/container.jpg') no-repeat;
			background-size:100%;
			.triangle{
				position:absolute;
				top:87/75rem;
				right:20/75rem;
				width:0;
		        height:0;
		        border-left:14/75rem solid transparent;
		        border-right:14/75rem solid transparent;
		        border-bottom:20/75rem solid #aaaaaa;
			}
			.selection{
				float:left;
				margin-top:30/75rem;
				width:275/75rem;
				border-radius:8/75rem;
				li{
					font-size:24/75rem;
					width:245/75rem;
					height:55/75rem;
					line-height:55/75rem;
					text-align:center;
					border-top:1px solid #aaaaaa;
					margin-left:14/75rem;
					color:#a3a3a3;
					font-family:'微软雅黑';
				}
				li:first-child{
					border:0;
				}
			}
		}
		.show{
			display:block;
		}
		
	}
	.dqDqtalkTitle img{
		position:absolute;
		top:30/75rem;
		left:20/75rem;
		width:16/75rem;
		height:26/75rem;
	}
	.content{
		position:absolute;
		top:88/75rem;
		z-index:1;
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
			}
			img{
				width:50/75rem;
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
		z-index:10;
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
	.dqDqtalkShare{
		display:none;
		position:fixed;
		bottom:0;
		height:460/75rem;
		border:1/75rem solid #aaaaaa;
		background:white;
		z-index:100;
		p{
			font-size:20/75rem;
			color:#aaaaaa;
			margin:20/75rem 20/75rem;
			text-align:left;
		}
		li{
			width:120/75rem;
			height:110/75rem;
			display:inline-block;
			margin:20/75rem 60/75rem;
			a{
				display:inline-block;
				width:100%;
				height:100%;
				line-height:170/75rem;
				font-size:20/75rem;
				color:black;
				text-align:center;
			}
		}
		li:nth-child(1){
			a{
				background:url("../../assets/images/dq_letter.jpg") no-repeat top center;
				background-size:60/75rem;
			}
		}
		li:nth-child(2){
			a{
				background:url("../../assets/images/dq_weixin.jpg") no-repeat top center;
				background-size:60/75rem;
			}
		}
		li:nth-child(3){
			a{
				background:url("../../assets/images/dq_friend.jpg") no-repeat top center;
				background-size:60/75rem;
			}
		}
		li:nth-child(4){
			a{
				background:url("../../assets/images/dq_QQ.jpg") no-repeat top center;
				background-size:60/75rem;
			}
		}
		li:nth-child(5){
			a{
				background:url("../../assets/images/dq_qqzone.jpg") no-repeat top center;
				background-size:60/75rem;
			}
		}
		li:nth-child(6){
			a{
				background:url("../../assets/images/dq_blog.jpg") no-repeat top center;
				background-size:60/75rem;
			}
		}
		.cancel{
			width:550/75rem;
			height:90/75rem;
			border-top:1px solid black;
			color:black;
			line-height:90/75rem;
			font-size:34/75rem;
			display:inline-block;
			text-align:center;
			margin-left:100/75rem;
		}
	}
	.show{
		display:block;
	}
</style>