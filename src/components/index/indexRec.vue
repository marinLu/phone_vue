<template>
	<div class="indexRec_container clearfix">
		<div class="nav">
			<ul>
				<li><router-link :to="{path:'/indexRec'}" >推荐</router-link></li>
				<li><router-link :to="{path:'/indexExpert'}">圈子达人</router-link></li>
				<li><router-link :to="{path:'/indexGood'}" >论逗精选</router-link></li>
				<li><router-link :to="{path:'/indexDay'}" >今日槽点</router-link></li>
			</ul>
		</div>
		<div class="indexRec_banner">
			<div class="block">
			<el-carousel>
		      <el-carousel-item v-for="item in 2" :key="item">
		        <router-link :to="{path:'/thefunny/move'}"><img src="../../assets/images/index_banner.jpg" alt=""></router-link>
		      </el-carousel-item>
		    </el-carousel>
			  </div>
				
			</div>
		<div class="indexRec_news">
			<div class="indexRec_news_top">
				<h5>话题推荐</h5>
				<p v-on:click="dianji">更多</p>
			</div>
			<router-link :to="{path:'/humTalkRecommend'}"><div class="indexRec_news_first">
				<h1>狗狗也有社交恐惧症吗？</h1>
				<p class="title">单身狗聚集地</p>
				<p class="time">2017-4-17</p>
				<p class="star">评论：<span>4328</span></p>
			</div></router-link>
			<router-link :to="{path:'/humTalkRecommend'}"><div class="indexRec_news_second">
				<h1>没想到你是这样的小鹿男！</h1>
				<p class="title">阴阳师手游部落</p>
				<p class="time">2016-2-18</p>
				<p class="star">评论：<span>6890</span></p>
				<p class="description">小鹿男强势来袭，爽到你不敢想象</p>
				<img src="../../assets/images/indexRec_news.jpg" alt="">
			</div></router-link>
		</div>
		<div class="indexRec_music">
			<div class="indexRec_music_top">
				<h5>最新单曲</h5>
				<p>更多</p>
			</div>
			<div class="indexRec_music_list">
				<router-link class="indexRec_music_list_more" tag="div" :to="{path:'/thefunny/music'}">
					<img src="../../assets/images/indexRec_music.png" alt="">
					<p class="title">明日何其多</p>
					<p class="author">谭咏麟/陈奕迅</p>
				</router-link>
				<router-link class="indexRec_music_list_more" tag="div" :to="{path:'/thefunny/music'}">
					<img src="../../assets/images/indexRec_music.png" alt="">
					<p class="title">明日何其多</p>
					<p class="author">谭咏麟/陈奕迅</p>
				</router-link>
				<router-link class="indexRec_music_list_more" tag="div" :to="{path:'/thefunny/music'}">
					<img src="../../assets/images/indexRec_music.png" alt="">
					<p class="title">明日何其多</p>
					<p class="author">谭咏麟/陈奕迅</p>
				</router-link>
				<router-link class="indexRec_music_list_more" tag="div" :to="{path:'/thefunny/music'}">
					<img src="../../assets/images/indexRec_music.png" alt="">
					<p class="title">明日何其多</p>
					<p class="author">谭咏麟/陈奕迅</p>
				</router-link>
				<router-link class="indexRec_music_list_more" tag="div" :to="{path:'/thefunny/music'}">
					<img src="../../assets/images/indexRec_music.png" alt="">
					<p class="title">明日何其多</p>
					<p class="author">谭咏麟/陈奕迅</p>
				</router-link>
				<router-link class="indexRec_music_list_more" tag="div" :to="{path:'/thefunny/music'}">
					<img src="../../assets/images/indexRec_music.png" alt="">
					<p class="title">明日何其多</p>
					<p class="author">谭咏麟/陈奕迅</p>
				</router-link>
			</div>
		</div>
		<div class="indexRec_take">
			<div class="indexRec_take_top">
				<h5>我的订阅</h5>
			</div>
			
			<div class="indexRec_take_first">
				<div class="indexRec_take_left">
					<img src="../../assets/images/indexRec_take.png" alt="">
				</div>
				<div class="indexRec_take_right">
					<h3>时尚新娘</h3>
					<span class="tab">标签：</span>
					<span>时尚</span>
					<span>国际</span>
					<span>新娘</span>
					<p>2017年5月刊</p>
				</div>
			</div>
			<div class="indexRec_take_first">
				<div class="indexRec_take_left">
					<img src="../../assets/images/indexRec_take.png" alt="">
				</div>
				<div class="indexRec_take_right">
					<h3>时尚新娘</h3>
					<span class="tab">标签：</span>
					<span>时尚</span>
					<span>国际</span>
					<span>新娘</span>
					<p>2017年5月刊</p>
				</div>
			</div>
			
		</div>
		<div class="indexRec_every">
			<h5>每日早茶</h5>
			<p>每日早茶每日早茶每日早茶每日早茶每日早茶每日早茶每日早茶每日早茶</p>
			<p class="author">————刘易斯</p>
			
		</div>
	</div>
</template>

<script>
		
	export default{
		name:'indexRec',
		components:{
			
		},
		beforeCreate(){
			
		},
		
		methods:{
			dianji:function(e){
				this.$axios.get('/').then(function(data){
					console.log(data)
				})
			}
		}
	}
	
</script>

<style scoped lang="less">

body::scrollbar{
	display: none;
}
.indexRec_container{
	width: 750/75rem;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	.nav{
		width: 750/75rem;
		margin: 0 auto;
		height: 80/75rem;
		ul{
			overflow: hidden;
			li{
				float: left;
				width: 25%;
				a{
					display: block;
					font-size: 30/75rem;
					font-weight: 700;
					height: 70/75rem;
					line-height: 70/75rem;
					text-align: center;
				}
			}
			li:first-child{
				color:#5181C1;
				border-bottom: 10/75rem solid #5181C1;
			}
		}
	}
	.indexRec_banner{
		width: 100%;
		.el-carousel__item{
			height: 300/75rem;
		}
		  .el-carousel__item:nth-child(2n) {
		     background-color: #99a9bf;
		  }
		  .el-carousel__item:nth-child(2n+1) {
		     background-color: #d3dce6;
		  }
		img{
			width: 100%;
			height: 270/75rem;
		}
	}
	.indexRec_news{
			width: 710/75rem;
			margin: 0 auto;
			.indexRec_news_top{
				background: #F0F0F0;
			}
			.indexRec_news_top>p{
				float: right;
				display: inline-block;
				height: 35/75rem;
				line-height: 35/75rem;
				font-size: 20/75rem;
				padding-right: 73/75rem;
				font-family: '微软雅黑';
				color: #5483C2;
				position: relative;;
			}
			.indexRec_news_top>p:after{
				position: absolute;
				content:'';
				width: 30/75rem;
				height: 30/75rem;
				background: url('../../assets/images/more.jpg') no-repeat ;
				top:5/75rem;
				left: 58/75rem;	
			}
			.indexRec_news_first,.indexRec_news_second{
				height: 260/75rem;
				h1{
					font-size: 35/75rem;
					font-weight: 700;
					font-family: "微软雅黑";
					margin:20/75rem 0;
				}
				.title,.time,.star{
					float: left;
					margin-right: 50/75rem;
					font-size: 20/75rem;
					color:#AAABAB;
				}
			}
			.indexRec_news_second{
				overflow: hidden;
				position: relative;
				.description{
					position: absolute;
					top:118/75rem;
					font-size: 20/75rem;
				}
				img{
					width: 192/75rem;
					height: 192/75rem;
					position: absolute;
					top:13/75rem;
					right: 20/75rem;
				}
			}
	}
	.indexRec_music{
		width: 710/75rem;
		margin: 0 auto;
		background: #F0F0F0;
			.indexRec_music_top{	
			}
			.indexRec_music_top>p{
				float: right;
				display: inline-block;
				height: 35/75rem;
				line-height: 35/75rem;
				font-size: 20/75rem;
				padding-right: 73/75rem;
				font-family: '微软雅黑';
				color: #5483C2;
				position: relative;;
			}
			.indexRec_music_top>p:after{
				position: absolute;
				content:'';
				width: 30/75rem;
				height: 30/75rem;
				background: url('../../assets/images/more.jpg') no-repeat ;
				top:5/75rem;
				left: 58/75rem;	
			}
			.indexRec_music_list{
				margin:20/75rem 0;
				overflow: hidden;
				.indexRec_music_list_more{
					float: left;
					.title{
						font-size: 20/75rem;
						font-weight: bold;
						margin: 10/75rem auto 10/75rem 10/75rem;
					}
					.author{
						font-size: 18/75rem;
						color: #AAAAAA;
						margin-left: 10/75rem;
					}
					img{
						width: 194/75rem;
						height: 194/75rem;
					}	
				}
				.indexRec_music_list_more:nth-child(2){
					margin-left: 45/75rem;
					margin-right: 45/75rem;
				}
				.indexRec_music_list_more:nth-child(5){
					margin-left: 45/75rem;
					margin-right: 45/75rem;
					margin-top: 20/75rem;
				}
				.indexRec_music_list_more:nth-child(4){
					margin-top: 20/75rem;
				}
				.indexRec_music_list_more:nth-child(6){
					margin-top: 20/75rem;
				}

			}
			

	}
	.indexRec_take{
		width: 710/75rem;
		margin: 0 auto;
		.indexRec_take_first{
			overflow: hidden;
			.indexRec_take_left,.indexRec_take_right{
			float: left;
			}
			.indexRec_take_left{
				img{
					width: 179/75rem;
					height: 235/75rem;
				}
			}
			.indexRec_take_right{
				margin-left: 40/75rem;
				font-size: 18/75rem;
				h3{
					font-size: 30/75rem;
					font-weight: 700;
					margin:25/75rem 0;
				}
				p{
					margin-top:25/75rem;
				}
				span:not(.tab){
					padding: 5/75rem 10/75rem;
					background: #C8C8C8;
					border: 1/75rem solid #fff;
					border-radius: 15/75rem;
				}
			}
		}	
	}
	.indexRec_every{
		width: 710/75rem;
		margin: 0 auto;
		position: relative;
		h5:before{
		content:'';
		position: absolute;
		width: 10/75rem;
		height: 35/75rem;
		background: #5483C2;
		left: 0;
		}
		p{
			font-size: 25/75rem;
			margin: 40/75rem;
			line-height: 35/75rem;
		}
		.author{
			position: absolute;
			right: 20/75rem;
			top:100/75rem;
		}

	}
	h5{
		display: inline-block;
		height: 35/75rem;
		line-height: 35/75rem;
		font-size: 20/75rem;
		padding-left: 20/75rem;
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

</style>