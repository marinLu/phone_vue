<template>
	<div>
	<!-- 内容 -->
	<div class="MusicContent">
		<div class="MusicTheatres">
			<div class="MusicTheatresTitle">
				<h3>华语新歌</h3>
				<router-link :to="{path:'/new_music'}">
					更多 <span>&#x3e;</span>
				</router-link>
				
				
			</div>
			<router-view></router-view>
			<div class="MusicTheatresCon">
				<div class="MusicShow">
					<ul>
						
						
						<router-link :to="{path:'/music_details'}">
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>好妹妹乐队</p>
							<p>评论数：2301</p>
						</li>
						</router-link>
						<router-view></router-view>
						
						
						
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>好妹妹乐队</p>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>好妹妹乐队</p>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>好妹妹乐队</p>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>好妹妹乐队</p>
							<p>评论数：2301</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		
		<div class="MusicAboutToShow">
			<div class="MusicTheatresTitle">
				<h3>华语新歌</h3>
				<a href="javascript:;">更多 <span>&#x3e;</span></a>
			</div>
			<div class="MusicShow">
					<ul>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>好妹妹乐队</p>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>好妹妹乐队</p>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>好妹妹乐队</p>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>好妹妹乐队</p>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>好妹妹乐队</p>
							<p>评论数：2301</p>
						</li>
					</ul>
				</div>
		</div>
		<div class="MusicTvShow">
			<div class="MusicTheatresTitle">
				<h3>华语新歌</h3>
				<a href="javascript:;">更多 <span>&#x3e;</span></a>
			</div>
			<div class="MusicShow">
					<ul>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>好妹妹乐队</p>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>好妹妹乐队</p>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>好妹妹乐队</p>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>好妹妹乐队</p>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>好妹妹乐队</p>
							<p>评论数：2301</p>
						</li>
					</ul>
				</div>
		</div>
	</div>

	</div>
</template>

<script>
	export default{
		name:'music',
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
body {
  background: #f0f0f0;
}

.MusicContent
 {
  position: absolute;
  left: 0;
  width: 100%;
  background: #FFFFFF;
  
}
.Head {
  height: 2.54666667rem;
  top: 0;
  background: #ffffff;
  width: 100%;
}
.Head .Title {
  font-size: 0.44rem;
  height: 1.17333333rem;
  text-align: center;
}
.Head .Title h3 {
  line-height: 1.17333333rem;
}
.Head .Nav {
  height: 1.37333333rem;
  overflow: hidden;
}
.Head .Nav ul {
  list-style: none;
}
.Head .Nav ul li {
  float: left;
  font-size: 0.38666667rem;
  margin: 0 0.82666667rem;
  line-height: 1.37333333rem;
}
.Title .Find {
  float: right;
}
.Title .Find img {
  width: 0.61333333rem;
  height: 0.61333333rem;
  position: absolute;
  top: 0.28rem;
  right: 0.72rem;
}
.Title h3 {
  display: inline-block;
}

.MusicContent {
  top: 2.54666667rem;
  bottom: 1.22666667rem;
  overflow: auto;
}
.MusicContent .MusicTheatres,
.MusicContent .MusicAboutToShow,
.MusicContent .MusicTvShow {
  margin-bottom: 0.32rem;
  background-color: #ffffff;
}
.MusicTheatres,
.MusicAboutToShow,
.MusicTvShow {
  padding-top: 0.66666667rem;
  overflow: hidden;
  padding-bottom: 0.5866666rem;
}

.MusicTheatresTitle {
  overflow: hidden;
}
.MusicTheatresTitle h3 {
  float: left;
  font-size: 0.41333333rem;
  margin-left: 0.26666667rem;
}
.MusicTheatresTitle a {
  float: right;
  font-size: 0.30666667rem;
  margin-right: 0.72rem;
}
.MusicTheatresCon,
.MusicShow {
  margin-top: 0.56rem;
}
.MusicShow ul {
  overflow: hidden;
  white-space: nowrap;
  width: 50000px;
}
.MusicShow li {
  float: left;
  margin-left: 0.26666667rem;
  display: inline-block;
}
.MusicShow img {
  height: 2.46666667rem;
  width: 2.46666667rem;
  margin-bottom: 0.2933333rem;
}
.MusicShow h3 {
  font-size: 0.30666667rem;
}
.MusicShow p {
  font-size: 0.24rem;
}


</style>