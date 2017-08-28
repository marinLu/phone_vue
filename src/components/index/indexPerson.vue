<template>
	<div class="indexPerson_container">
		<div class="indexPerson_top">
			<img class="left" src="../../assets/images/left.png" alt="">
			<div class="personLogo">
				<img src="../../assets/images/dq_home_bigicon2.jpg" alt="">
			</div>
			<p class="author">卑鄙的我</p>
			<span class="guanzhu">关注<span>12</span></span> 
			<span class="fensi">粉丝<span>25</span></span>
			<p class="ziliao">我的资料</p>
		</div>
		<div class="indexPerson_nav">
			<ul class="clearfix">
				<li><a href="#">动态</a></li>
				<li><a href="#">相册</a></li>
				<li><a href="#">关注</a></li>
				<li><a href="#">粉丝</a></li>
			</ul>
		</div>
		<div class="indexPerson_con">
			<div class="indexPerson_con_top">
				<router-link class="dongtai" tag="p" :to="{path:'/indexTalk'}">全部动态（456）</router-link>
			</div>
			<div class="indexPerson_con_list clearfix">
				<h3>卑鄙的我</h3>
				<span class="time">2-22</span>
				<span class="like">656</span>
				<p class="title">评论话题</p>
				<p class="content">保时捷老总现身众泰展台：笑容不可描述！太辣眼睛了</p>
				<div class="description">
					<p>2017上海国际车展</p>
					<p>保时捷老总现身众泰展台：笑容不可描述！太辣眼睛了</p>
				</div>
			</div>
			<div class="indexPerson_con_list clearfix">
				<h3>卑鄙的我</h3>
				<span class="time">2-22</span>
				<span class="like">656</span>
				<p class="title">评论话题</p>
				<p class="content">保时捷老总现身众泰展台：笑容不可描述！太辣眼睛了</p>
				<div class="description">
					<p>2017上海国际车展</p>
					<p>保时捷老总现身众泰展台：笑容不可描述！太辣眼睛了</p>
				</div>
			</div>
		</div>
		
	</div>
	
</template>


<script>
export default {
	name:"indexPerson",

}
	
</script>

<style scoped lang="less">
.indexPerson_container{
	width: 750/75rem;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	.indexPerson_top{
		.left{
			padding-top: 20/75rem;
			padding-left: 10/75rem;
		}
		.personLogo{
			width: 163/75rem;
			height: 163/75rem;
			border:1/75rem solid #fff;
			border-radius: 50%;
			overflow: hidden;
			margin: 0 auto;
			img{
				width: 163/75rem;
				height: 163/75rem;
			}
		}
		.author{
			font-size: 35/75rem;
			margin:10/75rem auto;
			text-align: center;
		}
		.guanzhu{
			font-size: 25/75rem;
			margin-left: 260/75rem;			
		}
		.fensi{
			font-size: 25/75rem;
			margin-left: 50/75rem;			
		}
		.ziliao{
			font-size: 30/75rem;
			width: 180/75rem;
			height: 80/75rem;
			line-height: 80/75rem;
			text-align: right;
			border-radius:20/75rem;
			margin-left: 300/75rem;
			margin-top:20/75rem;
			background: url('../../assets/images/pen.jpg') 10/75rem 23/75rem no-repeat #ccc;
		}
	}
	.indexPerson_nav{
		padding: 20/75rem 0;
		ul{
			overflow: hidden;
			li{
				font-size: 35/75rem;
				float: left;
				margin-left: 55/75rem;
				margin-right: 55/75rem;
			}
		}
	}
	.indexPerson_con{
		.indexPerson_con_top{
			background: #aaa;
			.dongtai{
				font-size: 20/75rem;
				height: 50/75rem;
				line-height: 50/75rem;
			}
		}
		.indexPerson_con_list{
			height: 300/75rem;
			border-bottom: 10/75rem solid #aaa;
			padding: 30/75rem 0;
			overflow: hidden;
			h3{
				font-size: 30/75rem;
			}
			.time{
				font-size: 20/75rem;
			}
			.like{
				display: inline-block;
				font-size: 20/75rem;
				height: 50/75rem;
				line-height: 50/75rem;
				padding-left: 50/75rem;
				float: right;
				background: url('../../assets/images/zan.jpg') 15/75rem 10/75rem no-repeat;
				
			}
			.title{
				font-size: 30/75rem;
				margin: 10/75rem 0;
			}
			.content{
				font-size: 30/75rem;
			}
			.description{
				margin-top:20/75rem;
				height: 160/75rem;
				background-size: 160/75rem 160/75rem;
				background: url('../../assets/images/dq_home_bigicon2.jpg') #aaa no-repeat;
				p{
					font-size: 30/75rem;
					margin-left: 180/75rem;
					padding-top:20/75rem;
				}

			}

		}
	}
}


	
</style>