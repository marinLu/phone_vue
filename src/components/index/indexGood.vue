<template>
	<div class="indexGood_container">
			<div class="nav">
				<ul>
					<li><router-link :to="{path:'/indexRec'}" >推荐</router-link></li>
				<li><router-link :to="{path:'/indexExpert'}">圈子达人</router-link></li>
				<li><router-link :to="{path:'/indexGood'}" >论逗精选</router-link></li>
				<li><router-link :to="{path:'/indexDay'}" >今日槽点</router-link></li>
				</ul>
			</div>
			<div class="indexGood_movie">
				<div class="indexGood_movie_top">
					<h5>电影影评</h5>
					<p>更多</p>
				</div>


				<router-link class="indexGood_movie_con clearfix" tag="div" :to="{path:'/editorinfo'}">
					<div class="indexGood_movie_con_left">
						<img src="../../assets/images/indexGood_movie.jpg" alt="">
					</div>
					<div class="indexGood_movie_con_right">
						<p class="title">人民的名义</p>
						<p class="update">更新至36集/每天更新/腾讯视频，芒果TV,爱奇艺，优酷视频</p>
						<p class="comment"><span>3845</span>人参与讨论</p>
					</div>
				</router-link>
				<div class="indexGood_movie_con clearfix">
					<div class="indexGood_movie_con_left">
						<img src="../../assets/images/indexGood_movie.jpg" alt="">
					</div>
					<div class="indexGood_movie_con_right">
						<p class="title">人民的名义</p>
						<p class="update">更新至36集/每天更新/腾讯视频，芒果TV,爱奇艺，优酷视频</p>
						<p class="comment"><span>3845</span>人参与讨论</p>
					</div>
				</div>
			

				<div class="indexGood_movie_con clearfix">
					<div class="indexGood_movie_con_left">
						<img src="../../assets/images/indexGood_movie.jpg" alt="">
					</div>
					<div class="indexGood_movie_con_right">
						<p class="title">人民的名义</p>
					<p class="update">更新至36集/每天更新/腾讯视频，芒果TV,爱奇艺，优酷视频</p>
						<p class="comment"><span>3845</span>人参与讨论</p>
					</div>
				</div>
				
				<div class="indexGood_movie_con clearfix">
					<div class="indexGood_movie_con_left">
						<img src="../../assets/images/indexGood_movie.jpg" alt="">
					</div>
					<div class="indexGood_movie_con_right">
						<p class="title">人民的名义</p>
						<p class="update">更新至36集/每天更新/腾讯视频，芒果TV,爱奇艺，优酷视频</p>
						<p class="comment"><span>3845</span>人参与讨论</p>
					</div>
				</div>
				
			</div>
			
	</div>
</template>

<script>
export default {
	name:'indexGood',
	data(){
		return{

		}
	}
}
	
</script>


<style scoped lang="less">
.indexGood_container{
	
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
			li:nth-child(3){
				color:#5181C1;
				border-bottom: 10/75rem solid #5181C1;
			}
		}
	}
	.indexGood_movie{
			width: 750/75rem;
			margin: 0 auto;
			.indexGood_movie_top{
				background: #F0F0F0;
			}
			.indexGood_movie_top>p{
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
			.indexGood_movie_top>p:after{
				position: absolute;
				content:'';
				width: 30/75rem;
				height: 30/75rem;
				background: url('../../assets/images/more.jpg') no-repeat ;
				top:5/75rem;
				left: 58/75rem;	
			}
			.indexGood_movie_con{
				padding:10/75rem 0 10/75rem 20/75rem;
				background: #fff;
				border-bottom: 7/75rem solid #f0f0f0;
				.indexGood_movie_con_left,.indexGood_movie_con_right{
					float:left;
				}
				.indexGood_movie_con_left{
					img{
						width: 152/75rem;
						height: 199/75rem;
					}
				}
				.indexGood_movie_con_right{
					width: 400/75rem;
					margin-left:25/75rem; 
					.title{
						font-size: 30/75rem;
						font-weight: 700;

					}
					.update{
						 height: 50/75rem;
						 line-height: 25/75rem;
						font-size: 16/75rem;
						margin:20/75rem 0;
						color:#BCBCBC;
					}
					.comment{
						height: 25/75rem;
						 line-height: 25/75rem;
						color:#BCBCBC;
						font-size: 16/75rem;
					}
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