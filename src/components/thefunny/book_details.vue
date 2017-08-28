<template>
	<div>
		<div class="BookDetailsHead">
			<div class="DetailsNav">
				<a href="javascript:;" v-on:click="back">&#x3c;</a>

				<h3>新书速递</h3>
			</div>
			<div class="DetailsPic">
				<img src="../../assets/images/1.jpg" alt="" />
			</div>
		</div>
		
		<div class="DetailsCon">
			<div class="Details">
				<div class="DetailsLeft">
					<h3>速度与激情8</h3>
					<p>美国/犯罪/动作</p>
					<p>上映时间：2007—4—2</p>
				</div>
				<div class="DetailsRight">
					<a href=""><img src="../../assets/images/good.png" alt="" /></a><span>2345</span>
					<a href=""><img src="../../assets/images/bad.png" alt="" /></a><span>1234</span>
				</div>
			</div>
			<div class="DetailsBuy">
				<span>选座购票</span><a href="">￥23起<span>&#x3e;</span></a>
			</div>
			<div class="DetailsSome">
				<h5>简介</h5>
				<p>多米尼克（范·迪塞尔 Vin Diesel 饰）与莱蒂（米歇尔·罗德里格兹 Michelle Rodriguez 饰）共度蜜月，布莱恩与米娅退出了赛车界，这支曾环游世界的顶级飞车家族队伍的生活正渐趋平淡。然而，一位神秘女子Cipher（查理兹·塞隆 Charlize T heron 饰）的出现，令整个队伍卷入信任与背叛的危机，面临前所未有的考验。</p>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default{
		name:'moveDetails',
		data() {
			return {
		
			}
		},
		methods:{
			back:function(){
				window.history.go(-1);
			}
		}
	}
	
var num = window.devicePixelRatio;
var bili = 1 / num;
var meta_vp = document.createElement('meta');
meta_vp.name = 'viewport';
meta_vp.content = 'width=device-width, user-scalable=no, initial-scale=' + bili + ', maximum-scale=' + bili + ', minimum-scale==' + bili + '';
document.head.appendChild(meta_vp);

// 设置html 的 font-size
var wid = document.documentElement.clientWidth / 10;
document.documentElement.style.fontSize = wid + 'px';
</script>

<style>
.BookDetailsHead {
  text-align: center;
  background: #3c3e4b;
}
.BookDetailsHead .DetailsNav {
  overflow: hidden;
}
.BookDetailsHead .DetailsNav a {
  display: inline-block;
  float: left;
  color: #FFFFFF;
  font-size: 0.42666667rem;
  margin-top: 0.38666667rem;
  margin-left: 0.32rem;
}
.BookDetailsHead .DetailsNav h3 {
  text-align: center;
  color: #FFFFFF;
  font-size: 0.42666667rem;
  margin-top: 0.38666667rem;
  margin-bottom: 0.46666667rem;
}
.DetailsCon{
	background: #FFFFFF;
}
.BookDetailsHead .DetailsPic img {
  height: 6.70666667rem;
  width: 4.86666667rem;
  margin-bottom: 0.54666667rem;
}
.Details {
  overflow: hidden;
}
.DetailsLeft,
.DetailsRight {
  float: left;
}
.DetailsLeft {
  margin-top: 0.8rem;
  margin-left: 0.32rem;
  margin-right: 3.45333333rem;
}
.DetailsLeft h3 {
  font-size: 0.46666667rem;
  margin-bottom: 0.38rem;
}
.DetailsLeft p {
  font-size: 0.28rem;
  margin-bottom: 0.3rem;
}
.DetailsRight {
  padding-top: 1.1rem;
}
.DetailsRight img {
  width: 0.58666667rem;
  height: 0.50666667rem;
  vertical-align: middle;
}
.DetailsRight span {
  font-size: 0.24rem;
  vertical-align: middle;
  margin-left: 0.1111111rem;
  margin-right: 0.1111111rem;
}
.DetailsBuy {
  margin-left: 0.32rem;
  margin-top: 0.38rem;
}
.DetailsBuy span,
.DetailsBuy a {
  font-size: 0.33333333rem;
}
.DetailsBuy a {
  margin-left: 5.33333333rem;
}
.DetailsSome {
  font-size: 0.33333333rem;
  margin-left: 0.32rem;
  margin-right: 0.4rem;
  margin-top:0.33333333rem ;
}
.DetailsSome h5{
	margin-bottom:0.33333333rem ;
}

</style>