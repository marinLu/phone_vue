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
	<!--		<img class="Smalltu" src="../../assets/images/5-4.png" alt="" />-->
	        <img :src="info.Src" class="Smalltu" alt="" />
			<span class="title">{{info.title}}</span>
			<span class="time">{{info.time}}</span>
			<p class="Info">{{info.info}}</p>
		</div>
			
	</div>

</template>

<script>
	export default {
		name: 'sixin',
		data(){
			return{
			  infoList:[
			   {
			   	 title:"水果味的小仙女",
			   	 time:"3-24",
			   	 info:"春风十里，不如直播一场，我在直播等你！。。",
			   	 Src:require('../../assets/images/5-4.png')			    
			   },
			   {
			   	 title:"温万妮",
			   	 time:"3-24",
			   	 info:"关注我就是你的人了",
			   	 Src:require('../../assets/images/5-5.png')	
			   },
			   {
			   	 title:"毒砒霜少女",
			   	 time:"3-24",
			   	 info:"加我微信号121212",
			   	 Src:require('../../assets/images/5-6.png')	
			   },
			   {
			   	 title:"溪尾",
			   	 time:"3-24",
			   	 info:"若你喜欢怪人&nbsp;其实我很美",
			   	 Src:require('../../assets/images/5-7.png')	
			   },
			   {
			   	 title:"告白",
			   	 time:"3-24",
			   	 info:"468957997",
			   	 Src:require('../../assets/images/3-4.png')	
			   },
			   {
			   	 title:"内涵姐",
			   	 time:"3-24",
			   	 info:"谢谢你的关注",
			   	 Src:require('../../assets/images/3-5.png')	
			   },
			   {
			   	 title:"为清华",
			   	 time:"3-24",
			   	 info:"你知道我在等你吗",
			   	 Src:require('../../assets/images/3-6.png')	
			   },
			   {
			   	 title:"女流氓",
			   	 time:"3-24",
			   	 info:"我是逗币人咖秀",
			   	 Src:require('../../assets/images/3-7.png')	
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
			border-top: 2/75rem solid #ddd;
			padding: 20/75rem 20/75rem;
			font-size: 20/75rem;
			position: relative;
			.Smalltu {
				width: 90/75rem;
				height: 90/75rem;
			}
			.title {
				position: absolute;
				top: 30/75rem;
				left: 135/75rem;
				font-size: 26/75rem;
			}
			p {
				position: absolute;
				top: 63/75rem;
				left: 135/75rem;
				color: #ddd;
				font-size: 16/75rem;
			}
			.time {
				float: right;
				margin-right: 40/75rem;
				color: #ddd;
			}
		}
	}
</style>