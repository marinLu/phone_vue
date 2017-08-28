<template>
	<div class="indexExpert_container">
		<div class="nav">
			<ul>
				<li><router-link :to="{path:'/indexRec'}" >推荐</router-link></li>
				<li><router-link :to="{path:'/indexExpert'}">圈子达人</router-link></li>
				<li><router-link :to="{path:'/indexGood'}" >论逗精选</router-link></li>
				<li><router-link :to="{path:'/indexDay'}" >今日槽点</router-link></li>
			</ul>
		</div>
		<div class="indexExpert_banner">
			<div class="block">
			<el-carousel>
		      <el-carousel-item v-for="item in 2" :key="item">
		         <router-link :to="{path:'/humOtherInfo'}"><img src="../../assets/images/index_banner.jpg" alt=""></router-link>
		      </el-carousel-item>
		    </el-carousel>
			  </div>
		</div>
		<div class="indexExpert_news">
			<div class="indexExpert_news_top">
				<h5>达人话题</h5>
				<p>更多</p>
			</div>
			<div class="indexExpert_news_first">
				<h1>你真的适合做一名UI设计师吗</h1>
				<p class="title">设计圈</p>
				<p class="time">2017-4-17</p>
				<p class="star">评论：<span>4328</span></p>
				<p class="description">作为大有可为的UI设计行业，吸引了无数青年才俊的加入</p>
			</div>
			<div class="indexExpert_news_second">
				<h1>做UI如何提高自身的审美</h1>
				<p class="title">设计圈</p>
				<p class="time">2016-2-18</p>
				<p class="star">评论：<span>6890</span></p>
				<img src="../../assets/images/indexExpert_news.jpg" alt="">
			</div>
			<router-link class="indexExpert_news_third" tag="div" :to="{path:'/talkjoy'}">
				<h1>阴阳师美图来一波~</h1>
				<p class="title">阴阳师手游部落</p>
				<p class="time">2016-2-18</p>
				<p class="star">评论：<span>6890</span></p>
				<img src="../../assets/images/indexRec_news.jpg" alt="">
			</router-link>
			
				
		</div>
	</div>


 
</template>


<script>

export default {
	name:'indexExpert',
	data(){
		return{

		}
	}
}
	
</script>

<style scoped lang="less">
body::scrollbar{
	display: none;
}
.indexExpert_container{
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
			li:nth-child(2){
				color:#5181C1;
				border-bottom: 10/75rem solid #5181C1;
			}
		}
	}
	.indexExpert_banner{
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
	.indexExpert_news{
			width: 710/75rem;
			margin: 0 auto;
			.indexExpert_news_top{
				background: #F0F0F0;
			}
			.indexExpert_news_top>p{
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
			.indexExpert_news_top>p:after{
				position: absolute;
				content:'';
				width: 30/75rem;
				height: 30/75rem;
				background: url('../../assets/images/more.jpg') no-repeat ;
				top:5/75rem;
				left: 58/75rem;	
			}
			.indexExpert_news_first,.indexExpert_news_second,.indexExpert_news_third{
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
			.indexExpert_news_first{
				position: relative;
				.description{
					position: absolute;
					top:118/75rem;
					font-size: 20/75rem;
				}
			}
			.indexExpert_news_second,.indexExpert_news_third{
				overflow: hidden;
				position: relative;
				
				img{
					width: 192/75rem;
					height: 192/75rem;
					position: absolute;
					top:13/75rem;
					right: 20/75rem;
				}
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