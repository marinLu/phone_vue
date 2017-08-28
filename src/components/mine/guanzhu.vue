<template>
	<div class="box">
		<div class="header">
			<div class="header-top">
				<img class="img1" src="../../assets/images/2-1.png" />
				<span class="p1">卑鄙的我</span>
				<span class="p2">关注12</span>
				<span class="p3">粉丝25</span>
				<img class="img2" src="../../assets/images/2-5.png" />

			</div>
			<div class="header-botttom">
				<ul>
					<li>
						<router-link :to="{path:'/dongtai'}" >动态</router-link>
					</li>
					<li>
						<router-link :to="{path:'/xiangce'}">相册</router-link>
					</li>
					<li>
						<router-link :to="{path:'/guanzhu'}" class="a1">关注</router-link>
					</li>
					<li>
						<router-link :to="{path:'/fensi'}">粉丝</router-link>
					</li>
				</ul>

			</div>
		</div>
		<div class="contanier">
			<div class="shuai">
				<img class="img3" src="../../assets/images/3-4.png" />
				<h3 class="h3">帅帅的国王</h3>
				<p class="p5">总有一首歌,让你时而仰天沉默</p>
				<p class="p6">@番茄酱 等65人关注了他</p>
				<img class="img5" src="../../assets/images/3-3.png" alt="" />
			</div>
			<div class="wang">
				<img class="img4" src="../../assets/images/3-5.png" />
				<h3 class="h4">王小二</h3>
				<p class="p7">懂得珍惜，才配拥有</p>
				<p class="p8">@非洲人 等78人关注了他</p>
				<img class="img16" src="../../assets/images/3-3.png" alt="" />
			</div>
			<div class="mo">
				<img class="img15" src="../../assets/images/3-6.png" />
				<h3 class="h5">默默滴考拉</h3>
				<p class="p9">你喜欢的人，就是你动力</p>
				<p class="p10">@逗逼小羊羊等75人关注了她</p>
				<img class="img17" src="../../assets/images/3-3.png" alt="" />
			</div>
			<!--<div class="gu">
					<img class="img6" src="../../assets/images/3-7.png"/>
					<h3 class="h6">古月堂</h3>
					<p class="p11">人应该充满境界高的思想</p>
					<p class="p12">@百合花也有今天等454人关注了他</p>
					<img class="img18" src="../../assets/images/3-3.png" alt="" />
				</div>
				<div class="li">
					<img class="img7" src="../../assets/images/3-8.png"/>
					<h3 class="h7">李玲玲</h3>
					<p class="p13">这种农民在中国有九亿</p>
					<p class="p14">@云淡风轻等27人关注了她</p>
					<img class="img19" src="../../assets/images/3-3.png" alt="" />
				</div>
				-->
		</div>

	</div>
</template>

<script>
	export default {

		name: 'guanzhu',

		data() {
			return {

			}
		}

	}
</script>

<style scoped lang="less">
	ul {
		list-style: none;
	}
	
	.header-top {
		background: url("../../assets/images/2-0.png");
		width: 100%;
		height: 500/75rem;
	}
	
	.header-top {
		position: relative;
	}
	
	.img1 {
		padding-left: 250/75rem;
		padding-top: 70/75rem;
		width: 200/75rem;
		height: 200/75rem;
	}
	
	p {
		font-size: 30/75rem;
		padding-left: 130/75rem;
		padding-top: 10/75rem;
		color: #cbcac5;
	}
	
	.h3 {
		font-size: 40/75rem;
		padding-left: 150/75rem;
		margin-top: -90/75rem;
	}
	
	.h4 {
		font-size: 40/75rem;
		padding-left: 150/75rem;
		margin-top: -90/75rem;
	}
	
	.h5 {
		font-size: 40/75rem;
		padding-left: 150/75rem;
		margin-top: -90/75rem;
	}
	
	.p1 {
		font-size: 50/75rem;
		padding-left: 250/75rem;
		padding-top: 30/75rem;
	}
	
	.img3 {
		width: 100/75rem;
		padding-left: 20/75rem;
		margin-top: 30/75rem;
		height: 100/75rem;
	}
	
	.img4 {
		width: 100/75rem;
		padding-left: 20/75rem;
		padding-top: 20/75rem;
		height: 100/75rem;
	}
	
	.img15 {
		width: 100/75rem;
		padding-left: 20/75rem;
		padding-top: 20/75rem;
		height: 100/75rem;
	}
	
	.img5 {
		width: 100/75rem;
		padding-left: 590/75rem;
		margin-top: -170/75rem;
		height: 100/75rem;
	}
	
	.img16 {
		width: 100/75rem;
		padding-left: 590/75rem;
		margin-top: -170/75rem;
		height: 100/75rem;
	}
	
	.img17 {
		width: 100/75rem;
		padding-left: 590/75rem;
		margin-top: -170/75rem;
		height: 100/75rem;
	}
	
	.contanier {
		background: white;
	}
	
	.p2 {
		position: absolute;
		top: 340/75rem;
		left: 200/75rem;
		font-size: 40/75rem;
	}
	
	.p3 {
		position: absolute;
		top: 340/75rem;
		left: 400/75rem;
		font-size: 40/75rem;
	}
	
	.img2 {
		padding-left: 230/75rem;
		padding-top: 80/75rem;
		background-size: 90/75rem;
		height: 70/75rem;
	}
	
	ul>li>a {
		padding-right: 90/75rem;
		margin: 30/75rem 0/75rem;
		float: left;
		font-weight: bold;
		text-decoration: none;
		font-size: 40/75rem;
		overflow: hidden;
	}
	
	.a1 {
		padding-left: 20/75rem;
		color: #5489bb;
	}
	
	.a2 {
		padding-left: 40/75rem;
	}
	
	.p12 {
		background: #c8c8c8;
		font-size: 40/75rem;
		margin-top: -90/75rem;
		margin-left: 20/75rem;
	}
	
	.dongtai {
		width: 100%;
		height: 100/75rem;
	}
	
	.container {
		position: relative;
	}
	
	.dongtai {
		position: absolute;
		top: 200/75rem;
		right: 10/75rem;
	}
	
	.benbi {
		position: absolute;
		top: 190/75rem;
		left: 10/75rem;
		font-size: 40/75rem;
	}
	
	.bang>p {
		position: absolute;
		top: 120/75rem;
		right: 1020/75rem;
		font-size: 30/75rem;
	}
	
	.p11 {
		font-weight: bold;
		padding-left: 250/75rem;
		margin-top: -180/75rem;
	}
	
	.p13 {
		color: #aeaeae;
		font-size: 33/75rem;
		padding-left: 200/75rem;
		padding-right: 20/75rem;
		margin-top: 20/75rem;
	}
	
	.chezhan {
		background: #c8c8c8;
		width: 100%;
		height: 200/75rem;
	}
	
	.img10 {
		width: 150/75rem;
		height: 150/75rem;
		padding: 22/75rem 20/75rem;
	}
	
	.img13 {
		width: 100/75rem;
		;
		height: 100/75rem;
	}
	
	.footer {
		position: relative;
	}
	
	.footer-bottom {
		position: absolute;
		top: 1300/75rem;
		left: 10/75rem;
	}
	
	.bang1 {
		position: absolute;
		top: -10/75rem;
		right: 120/75rem;
	}
	
	.p20 {
		margin-top: -700/75rem;
		font-size: 30/75rem;
	}
	
	.p21 {
		margin-top: 20/75rem;
		font-size: 30/75rem;
	}
</style>