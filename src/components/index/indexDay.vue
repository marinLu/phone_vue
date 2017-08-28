<template>
	<div class="indexDay_container">
			<div class="nav">
				<ul>
					<li><router-link :to="{path:'/indexRec'}" >推荐</router-link></li>
				<li><router-link :to="{path:'/indexExpert'}">圈子达人</router-link></li>
				<li><router-link :to="{path:'/indexGood'}" >论逗精选</router-link></li>
				<li><router-link :to="{path:'/indexDay'}" >今日槽点</router-link></li>
				</ul>
			</div>
			<div class="indexDay_news">
				<div class="indexDay_news_top">
					<h5>逗趣放槽点</h5>
					<p>更多</p>
				</div>

				<router-link class="indexDay_news_con" tag="div" :to="{path:'/dayUtails'}">
					<h2>希特勒自传《我的奋斗》进日本教材，日本网友：政府疯了</h2>
					<img src="../../assets/images/indexDay_news.jpg" alt="">
					<span class="comment">参与评论<i>3210</i></span>
					<span class="trans">参与转发<i>2470</i></span>
				</router-link>
				<div class="indexDay_news_con">
					<h2>希特勒自传《我的奋斗》进日本教材，日本网友：政府疯了</h2>
					<img src="../../assets/images/indexDay_news.jpg" alt="">
					<span class="comment">参与评论<i>3210</i></span>
					<span class="trans">参与转发<i>2470</i></span>
				</div>
				
				
			</div>
			
	</div>
</template>

<script>
export default {
	name:'indexDay',
	data(){
		return{

		}
	}
}
	
</script>


<style scoped lang="less">

.indexDay_container{
	
	width: 750/75rem;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: #fff;
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
			li:nth-child(4){
				color:#5181C1;
				border-bottom: 10/75rem solid #5181C1;
			}
		}
	}
	.indexDay_news{
			width: 750/75rem;
			margin: 0 auto;
			.indexDay_news_top{
				background: #F0F0F0;
			}
			.indexDay_news_top>p{
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
			.indexDay_news_top>p:after{
				position: absolute;
				content:'';
				width: 30/75rem;
				height: 30/75rem;
				background: url('../../assets/images/more.jpg') no-repeat ;
				top:5/75rem;
				left: 58/75rem;	
			}
			.indexDay_news_con{
				padding:10/75rem 0 10/75rem 20/75rem;
				background: #fff;
				border-bottom: 7/75rem solid #f0f0f0;
				height: 350/75rem;
				position: relative;
				h2{
					font-size: 30/75rem;
					width: 92%;
					height: 80/75rem;
					line-height: 40/75rem;
				}
				img{
					width: 196/75rem;
					height: 196/75rem;
				}
				.comment{
					position: absolute;
					font-size: 15/75rem;
					color:#f0f0f0;
					top:120/75rem;
					left:260/75rem;
				}
				.trans{
					position: absolute;
					font-size: 15/75rem;
					color:#f0f0f0;
					top:120/75rem;
					left:400/75rem;	
				}
			}
		}
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
	
</style>