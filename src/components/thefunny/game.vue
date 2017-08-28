<template>
	<div>
	<!-- 内容 -->
	<div class="GameContent">
		<div class="GameTheatres">
			<div class="GameTheatresTitle">
				<h3>网络热游</h3>
				<router-link :to="{path:'/new_game'}">更多 <span>&#x3e;</span></router-link>
			</div>
			<router-view></router-view>
			<div class="GameTheatresCon">
				<div class="GameShow">
					<ul>
						
						
						<router-link :to="{path:'/game_details'}">
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>评论数：2301</p>
						</li>
						</router-link>
						<router-view></router-view>
						
						
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>评论数：2301</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		
		<div class="GameAboutToShow">
			<div class="GameTheatresTitle">
				<h3>热门单击</h3>
				<a href="javascript:;">更多 <span>&#x3e;</span></a>
			</div>
			<div class="GameShow">
					<ul>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>评论数：2301</p>
						</li>
					</ul>
				</div>
		</div>
		<div class="GameTvShow">
			<div class="GameTheatresTitle">
				<h3>火热手游</h3>
				<a href="javascript:;">更多 <span>&#x3e;</span></a>
			</div>
			<div class="GameShow">
					<ul>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
							<p>评论数：2301</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg"/></a>
							<h3>实名制</h3>
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
		name:'game',
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
.Head,
.GameContent,
.Foot {
  position: absolute;
  left: 0;
  width: 100%;
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

.GameContent {
  top: 2.54666667rem;
  bottom: 1.22666667rem;
  overflow: auto;
}
.GameContent .GameTheatres,
.GameContent .GameAboutToShow,
.GameContent .GameTvShow {
  margin-bottom: 0.32rem;
  background-color: #ffffff;
}
.GameTheatres,
.GameAboutToShow,
.GameTvShow {
  padding-top: 0.66666667rem;
  overflow: hidden;
  padding-bottom: 0.5866666rem;
}
.GameTheatresTitle {
  overflow: hidden;
}
.GameTheatresTitle h3 {
  float: left;
  font-size: 0.41333333rem;
  margin-left: 0.26666667rem;
}
.GameTheatresTitle a {
  float: right;
  font-size: 0.30666667rem;
  margin-right: 0.72rem;
}
.GameTheatresCon,
.GameShow {
  margin-top: 0.56rem;
}
.GameShow ul {
  overflow: hidden;
  white-space: nowrap;
  width: 50000px;
}
.GameShow li {
  float: left;
  margin-left: 0.26666667rem;
  display: inline-block;
}
.GameShow img {
  height: 2.34666667rem;
  width: 4.04rem;
  margin-bottom: 0.2933333rem;
}
.GameShow h3 {
  font-size: 0.30666667rem;
}
.GameShow p {
  font-size: 0.24rem;
}


</style>