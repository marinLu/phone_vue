<template>

	<div class="box">
		<div class="header">
			<h5 class="h3">我的</h5>
		</div>

		<div class="container">
			<div class="container-top">
				<div class="container-left">
					<img class="img1" src="../../assets/images/1-1.png" />
					<img class="img2" src="../../assets/images/1-11.png" />
					<p class="p1">卑鄙的我</p>
					<p class="p2">关注12</p>
					<p class="p3">粉丝12</p>
					<router-link :to="{path:'/dongtai'}">
						<p class="p4">个人主页</p>
					</router-link>
					
				</div>
			</div>
		</div>
		<div class="con">
			<ul class="con-ul">
				<li>
					<router-link :to="{path:'/pinglun'}">消息提醒
					<img src="../../assets/images/left.png" alt="" />
					</router-link>
					
				</li>
				<li>
					<router-link :to="{path:'/shoucang'}">我的收藏
					<img src="../../assets/images/left.png" alt="" />
					</router-link>
					
				</li>
				<li>
					<router-link :to="{path:'/doubi'}">我的逗币
					<img src="../../assets/images/left.png" alt="" />
					</router-link>

				</li>
				<li>
					<router-link :to="{path:'/yingpiao'}">我的订单
					<img src="../../assets/images/left.png" alt="" />
					</router-link>

				</li>
				<li class="a5">
					<router-link :to="{path:'/shezhi'}">设置
					<img src="../../assets/images/left.png" alt="" />
					</router-link>	
				</li>

			</ul>
		</div>
		 <IndexFooter></IndexFooter>
	</div>
</template>

<script>
	import IndexFooter from "../footer";
	export default {

		name: 'wode',

		data() {
			return {

			}
		},
		components:{
		  IndexFooter
		}

	}
</script>

<style scoped lang="less">
.h3 {
	font-size: 33/75rem;
	margin: 30/75rem auto;
	padding-left: 320/75rem;
	font-weight: 600;
}

.container-left {
	background: #fc8728;
	width: 100%;
	height: 265/60rem;
	/*margin-top: 50/75rem;*/
}

.container-left {
	position: relative;
}

.img1 {
	padding-top: 100/75rem;
	padding-left: 10/75rem;
	width: 180/75rem;
	height: 180/75rem;
}

.img2 {
	position: absolute;
	top: 160/75rem;
	right: 50/75rem;
	width: 30/75rem;
	height: 30/75rem;
}

.p1 {
	position: absolute;
	top: 120/75rem;
	left: 200/75rem;
	margin-top: ;
	font-size: 45/75rem;
}

.p2 {
	position: absolute;
	top: 230/75rem;
	left: 200/75rem;
	font-size: 40/75rem;
}

.p3 {
	position: absolute;
	top: 230/75rem;
	font-size: 40/75rem;
	left: 400/75rem;
}

.p4 {
	position: absolute;
	top: 160/75rem;
	font-size: 35/75rem;
	right: 150/75rem;
}
.con .con-ul li{
	width: 100%;
	height:100/75rem;
	margin-top: 20/75rem;
	background: #fff;
	position:relative;
	a{
	  font-size: 33/75rem;
	  color: #000000;
	  line-height: 100/75rem;
	  padding-left: 20/75rem;	 
	}
	img{
		position: absolute;
		right:20/75rem;
		top:37/75rem;
	}
}
/*.con {
	background: #F0F0F0
}*/

/*.con>.con-ul>li>a {
	color: #000000;
	background: white;
	padding-top: 30/75rem;
	padding-bottom: 30/75rem;
	padding-left: 20/75rem;
	padding-right: 500/75rem;
	margin-left: -30/75rem;
}

.con>.con-ul>li {
	padding-top: 100/75rem;
	font-size: 30/75rem;
	padding-left: 60/75rem;
}

.con>.con-ul>li>.a5 {
	margin-right: 100/75rem;
}*/
</style>