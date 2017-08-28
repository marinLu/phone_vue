<template>
	<div class="myProtect_container">
		<div class="myProtect_top">
			<router-link to="../wode/">
				<img src="../../assets/images/left.png" alt="">
			</router-link>
			<h1>我的消息</h1>
		</div>
		<div class="myProtect_nav">
			<ul class="clearfix">
				<li>
					<router-link :to="{path:'/pinglun'}">评论</router-link>
				</li>
				<li>
					<router-link :to="{path:'/sixin'}">私信</router-link>
				</li>
				<li>
					<router-link :to="{path:'/tongzhi'}">通知</router-link>
				</li>
			</ul>
		</div>
		<div class="myProtect_con" v-for="info in infoList">
			<div class="Pinglun">
				<div class="Pinglun_img">
					<img :src="info.Src1" alt="" />
				</div>
				<div class="Pinglun_title">
					<p>{{info.name}}</p>
					<p>{{info.time}}</p>
				</div>
			</div>
			<div class="Pinglun_wenzi">
			<h3>{{info.title}}</h3>
			</div>
			<div class="Pinglun_con">
				<div class="Con_left">
					<img :src="info.Src2" alt="" />
				</div>
				<div class="Con_right">
					<h5>{{info.title1}}</h5>
					<p>{{info.title2}}<span>{{info.title3}}</span></p>
				</div>
			</div>
		</div>
		
	</div>

</template>

<script>
	export default {
		name: 'pinglun',
		data(){
			return{
				infoList:[
			   {
			   	 title:"向这些奋战在中国航天战线的  为中国航天事业作出巨大贡献的人们致敬! 值得中国人骄傲和自豪的切要记住的航天英雄点赞！",
			   	 title1:"卑鄙的我",
			   	 title2:"#中国首艘货运飞船天舟一号发射成功#",
			   	 title3:"中国骄傲，给中国航天员点个赞。",
			   	 name:"李三夜",
			   	 time:"2-22  01:18",
			   	 Src1:require('../../assets/images/7-1.png'),
			   	 Src2:require('../../assets/images/7-2.png')
			   },
			   {
			   	 title:"么么哒",
			   	 title1:"卑鄙的我",
			   	 title2:"#中国首艘货运飞船天舟一号发射成功#",
			   	 title3:"中国骄傲，给中国航天员点个赞。",
			   	 name:"我的土豆会发芽",
			   	 time:"2-22  01:18",
			   	 Src1:require('../../assets/images/7-1.png'),
			   	 Src2:require('../../assets/images/7-2.png')
			   },
			    {
			   	 title:"赞赞赞",
			   	 title1:"卑鄙的我",
			   	 title2:"#中国首艘货运飞船天舟一号发射成功#",
			   	 title3:"中国骄傲，给中国航天员点个赞。",
			   	 name:"沈奎奎",
			   	 time:"2-22  01:18",
			   	 Src1:require('../../assets/images/7-1.png'),
			   	 Src2:require('../../assets/images/7-2.png')
			   }
			 ]
			}
		}
	}
</script>

<style scoped lang="less">
	.myProtect_container {
		position: absolute;
		overflow: auto;
		width: 750/75rem;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background: #fff;
		.myProtect_top {
			width: 100%;
			height: 86/75rem;
			position: relative;
			img {
				position: absolute;
				top: 15/75rem;
				left: 20/75rem;
			}
			h1 {
				position: absolute;
				font-size: 35/75rem;
				top: 15/75rem;
				left: 310/75rem;
			}
		}
		.myProtect_nav {
			height: 68/75rem;
			ul {
				width: 650/75rem;
				margin: 20/75rem auto;
				font-size: 35/75rem;
				font-weight: 700;
				li {
					float: left;
					height: 68/75rem;
				}
				li:nth-child(2) {
					margin: 0 200/75rem;
				}
			}
		}
		.myProtect_con {
			width: 100%;
			border-bottom: 20/75rem solid #ddd;
			padding: 10/75rem 10/75rem;
			
			.Pinglun_con{
				overflow: hidden;
				width:100%;
				height:135/75rem;
				margin-top:26/75rem;	
				
				.Con_left{
					float: left;
					width:135/75rem;
					height:135/75rem;
					margin-right:25/75rem;
					img{
						width:135/75rem;
						height:135/75rem;
					}
				}
				.Con_right{
					float: left;
					height:135/75rem;
					width:515/75rem;
					h5{
					 font-size: 26/75rem;
					 margin-top: 20/75rem;	
					 margin-bottom: 10/75rem;	
					}
					p{
					 line-height:35/75rem;
					 font-size: 23/75rem;
					 word-wrap:break-word;
					  span{
					  	color:#A9A9A9;
					  }
					}
				}
			}
			.Pinglun_wenzi{
				width:100%;
				h3{
					font-size: 30/75rem;
					line-height:30/75rem;
				}
			}
			.Pinglun{
				overflow: hidden;
				margin-bottom: 20/75rem;
				
				.Pinglun_img{
				width:85/75rem;
				height:85/75rem;
				float:left;
				margin-right: 30/75rem;
				img{
					width:90/75rem;
				    height:90/75rem;
				}
			  }
			  .Pinglun_title{
			  	float:left;
			  	
			  	p:first-child{
			  		margin-top: 8/75rem;
			  		font-size: 26/75rem;
			  		margin-bottom: 28/75rem;
			  	}
			  	p:last-child{
			  		font-size: 16/75rem;
			  	}
			  }
			}
			
		}
	}
</style>