<template>
<div>
	<div class="Title">
		<router-link to="/thefunny/move">
			<strong class="Back">&#x3c;</strong>
		</router-link>
		
		<h3>影院热映</h3>
	</div>
	<div class="Con">
				
				<ul>
					
					<router-link :to="{path:'/move_details'}">
					<li>
						<div class="Img">
							<a href="javascript:;">
								<img src="../../assets/images/1.jpg" alt="" />
							</a>
						</div>
						<div class="Msg">
							<h3 class="MoveName">速度与激情12</h3>
							<p class="Director">导演：bob / bob / bob</p>
							<p class="ToStar">主演：bob / bob / bob</p>
							<p class="Label">标签：<span>中国</span><span>最牛逼</span><span>哈哈</span>
							</p>
							<p class="Comment">评论数：321098</p>
						</div>
					</li>
					</router-link>
					<router-view></router-view>
					
					<li>
						<div class="Img">
							<a href="javascript:;">
								<img src="../../assets/images/1.jpg" alt="" />
							</a>
						</div>
						<div class="Msg">
							<h3 class="MoveName">速度与激情12</h3>
							<p class="Director">导演：bob / bob / bob</p>
							<p class="ToStar">主演：bob / bob / bob</p>
							<p class="Label">标签：<span>中国</span><span>最牛逼</span><span>哈哈</span>
							</p>
							<p class="Comment">评论数：321098</p>
						</div>
					</li>
					<li>
						<div class="Img">
							<a href="javascript:;">
								<img src="../../assets/images/1.jpg" alt="" />
							</a>
						</div>
						<div class="Msg">
							<h3 class="MoveName">速度与激情12</h3>
							<p class="Director">导演：bob / bob / bob</p>
							<p class="ToStar">主演：bob / bob / bob</p>
							<p class="Label">标签：<span>中国</span><span>最牛逼</span><span>哈哈</span>
							</p>
							<p class="Comment">评论数：321098</p>
						</div>
					</li>
					<li>
						<div class="Img">
							<a href="javascript:;">
								<img src="../../assets/images/1.jpg" alt="" />
							</a>
						</div>
						<div class="Msg">
							<h3 class="MoveName">速度与激情12</h3>
							<p class="Director">导演：bob / bob / bob</p>
							<p class="ToStar">主演：bob / bob / bob</p>
							<p class="Label">标签：<span>中国</span><span>最牛逼</span><span>哈哈</span>
							</p>
							<p class="Comment">评论数：321098</p>
						</div>
					</li>
					<li>
						<div class="Img">
							<a href="javascript:;">
								<img src="../../assets/images/1.jpg" alt="" />
							</a>
						</div>
						<div class="Msg">
							<h3 class="MoveName">速度与激情12</h3>
							<p class="Director">导演：bob / bob / bob</p>
							<p class="ToStar">主演：bob / bob / bob</p>
							<p class="Label">标签：<span>中国</span><span>最牛逼</span><span>哈哈</span>
							</p>
							<p class="Comment">评论数：321098</p>
						</div>
					</li>
					<li>
						<div class="Img">
							<a href="javascript:;">
								<img src="../../assets/images/1.jpg" alt="" />
							</a>
						</div>
						<div class="Msg">
							<h3 class="MoveName">速度与激情12</h3>
							<p class="Director">导演：bob / bob / bob</p>
							<p class="ToStar">主演：bob / bob / bob</p>
							<p class="Label">标签：<span>中国</span><span>最牛逼</span><span>哈哈</span>
							</p>
							<p class="Comment">评论数：321098</p>
						</div>
					</li>
					<li>
						<div class="Img">
							<a href="javascript:;">
								<img src="../../assets/images/1.jpg" alt="" />
							</a>
						</div>
						<div class="Msg">
							<h3 class="MoveName">速度与激情12</h3>
							<p class="Director">导演：bob / bob / bob</p>
							<p class="ToStar">主演：bob / bob / bob</p>
							<p class="Label">标签：<span>中国</span><span>最牛逼</span><span>哈哈</span>
							</p>
							<p class="Comment">评论数：321098</p>
						</div>
					</li>
					<li>
						<div class="Img">
							<a href="javascript:;">
								<img src="../../assets/images/1.jpg" alt="" />
							</a>
						</div>
						<div class="Msg">
							<h3 class="MoveName">速度与激情12</h3>
							<p class="Director">导演：bob / bob / bob</p>
							<p class="ToStar">主演：bob / bob / bob</p>
							<p class="Label">标签：<span>中国</span><span>最牛逼</span><span>哈哈</span>
							</p>
							<p class="Comment">评论数：321098</p>
						</div>
					</li>
					
					
				</ul>
				
			</div>
</div>
</template>

<script>
	export default{
		name:'hotMove',
		data() {
			return {
		
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
.Title {
  position: fixed;
  height: 1.17333333rem;
  top: 0;
  background: #ffffff;
  width: 100%;
  border-bottom: 1px solid #F0F0F0;
  z-index: 1000;
  text-align: center;
}
.Con {
  position: absolute;
  top: 1.17333333rem;
  overflow: auto;
  width: 100%;
}
.Title strong {
  float: left;
  font-size: 0.48rem;
  line-height: 1.17333333rem;
  margin-left: 0.28rem;
  font-weight: 700;
}
.Title h3 {
  text-align: center;
  font-size: 0.42666667rem;
  line-height: 1.17333333rem;
}
body {
  background: #F0F0F0;
}
.Con ul {
  list-style: none;
  width: 100%;
}
.Con ul li{
  margin-bottom: 0.16rem;
  background: #FFFFFF;
  width: 100%;
  display: block;
  overflow: hidden;
}
.Con ul li .Msg,
.Con ul li .Img{
  float: left;
}
.Con ul li .Img img{
  width: 2rem;
  height: 2.66666667rem;
  margin-top: 0.34666667rem;
  margin-left: 0.28rem;
  margin-right: 0.41333333rem;
  margin-bottom: 0.300001rem;
}
.Con ul li .Msg {
  margin-top: 0.29333333rem;
}
.Con ul li .Msg .MoveName {
  font-size: 0.50666667rem;
}
.Con ul li .Msg p {
  font-size: 0.30666667rem;
  margin: 0.20666667rem 0;
}
.Con ul li .Msg .Label span {
  width: 0.93333333rem;
  height: 0.36rem;
  margin: 0 0.09333333rem;
  background: #F0F0F0;
  border-radius: 40%;
}


</style>