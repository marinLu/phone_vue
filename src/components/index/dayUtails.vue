<template>
	<div class="dayUtails_container">
		<div class="dayUtails_top">
			<router-link :to="{path:'/indexDay'}"><img src="../../assets/images/left.png" alt=""></router-link>
			<h1>今日槽点</h1>
			<span>...</span>
		</div>
		<div class="dayUtails_con clearfix">
			<div class="logo"><i></i><span>逗小趣</span></div>
			<div class="content">
				<span class="content_author">@逗小趣</span><span class="content_title">希特勒自传《我的奋斗》进日本教材，日本网友：政府疯了</span>
				<p class="url">#逗趣放槽点#</p>
				<img src="../../assets/images/indexDay_news.jpg" alt="">
			</div>
		</div>
		<div class="dayUtails_comment">
			<div class="dayUtails_comment_top">
				<h5>评论<span>(265654)</span></h5>
			</div>
			<div class="list">
				<div class="list_con clearfix">
					<p class="temp"><span class="title">小日本玩啥呢</span>
					<span class="time">20分钟前</span></p>
					<i></i><p class="list_con_author">开心的小松鼠</p>
				</div>
			</div>
			<div class="list">
				<div class="list_con clearfix">
					<p class="temp"><span class="title">小日本玩啥呢</span>
					<span class="time">20分钟前</span></p>
					<i></i><p class="list_con_author">开心的小松鼠</p>
				</div>
			</div>
			<div class="list">
				<div class="list_con clearfix">
					<p class="temp"><span class="title">小日本玩啥呢</span>
					<span class="time">20分钟前</span></p>
					<i></i><p class="list_con_author">开心的小松鼠</p>
				</div>
			</div>
			<div class="list">
				<div class="list_con clearfix">
					<p class="temp"><span class="title">小日本玩啥呢</span>
					<span class="time">20分钟前</span></p>
					<i></i><p class="list_con_author">开心的小松鼠</p>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
	name:'dayUtails',
	data(){
		return{

		}
	}
}
</script>

<style scoped lang="less">
.dayUtails_container{
	position:absolute;
	overflow: auto;
	width: 750/75rem;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: #fff;
	.dayUtails_top{
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
		span{
			position: absolute;
			font-size: 35/75rem;
			top:3/75rem;
			right:10/75rem;
		}
	}
			
	.dayUtails_con{
		.logo{
			height: 60/75rem;
			padding: 10/75rem;
			border-top: 1/75rem solid #ddd;
			i{
				display: inline-block;
				width: 60/75rem;
				height: 60/75rem;
				border: 1/75rem solid #aaa;
				border-radius:50%;
				float: left;
				background:  url("../../assets/images/indexDay_logo.jpg") 10/75rem -10/75rem no-repeat ;
			}
			span{
				display: inline-block;;
				height: 60/75rem;
				line-height: 60/75rem;
				float: left;
				margin-left: 10/75rem;
				font-size: 20/75rem;
				font-weight: bold;
			}
		}
		.content{
			height: 470/75rem;
			.content_author{
				color: #B0B0B0;
				padding: 0 10/75rem;
				font-size: 16/75rem;
			}
			.content_title{
				color: #000;
				font-size: 16/75rem;
			}
			.url{
				color: #B0B0B0;
				padding-left: 85/75rem;
				font-size: 16/75rem;
			}
			img{
				width: 400/75rem;
				height: 290/75rem;
				margin: 40/75rem 175/75rem ;
			}
		}
	}
	.dayUtails_comment{
		.dayUtails_comment_top{
			background: #F0F0F0;
			padding: 5/75rem 0;
			h5{
			display: inline-block;
			height: 35/75rem;
			line-height: 35/75rem;
			font-size: 20/75rem;
			padding-left: 40/75rem;
			font-family: '宋体';
			}
			h5:before{
				content:'';
				position: absolute;
				width: 10/75rem;
				height: 35/75rem;
				background: #5483C2;
				left: 20/75rem;
			}
		}
		.list{
			.list_con{
				height: 80/75rem;
				padding: 10/75rem 0;
				border-bottom: 5/75rem solid #f0f0f0;
				.temp{
					margin-bottom: 20/75rem;
				}
				.title{
					padding-left: 20/75rem;
					font-size: 25/75rem;
				}
				.time{
					padding-left: 20/75rem;

				}
				.list_con_author{
					font-size: 14/75rem;
					height: 50/75rem;
					line-height: 50/75rem;
					float: left;
					padding-left: 1/75rem;
					
				}
				i{
					display: block;
					float: left;
					width: 40/75rem;
					height: 40/75rem;
					border: 1/75rem solid #fff;
					border-radius: 50%;
					margin-left:20/75rem; 
					background: url("../../assets/images/indexDay_logo1.jpg") 1/75rem -10/75rem no-repeat ;
				}
			}
			
		}
	}
}
	
</style>