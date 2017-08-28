<template>
	<div>
		<div class="BookContent">
			<div class="BookTheatres">
				<div class="BookTheatresTitle">
					<h3>新书速递</h3>
					
					<router-link :to="{path:'/new_book'}">
					更多 <span>&#x3e;</span>
					</router-link>
					
					
					
			</div>
			<router-view></router-view>
			
			
			<div class="BookTheatresCon">
				<div class="BookShow">
					<ul>
						
						
						<router-link :to="{path:'/book_details'}">
						<li>
							<a href="javascript:;"><img src="../../assets/images/1.jpg"/></a>
							<div class="BookSmail">
								<h3>实名制</h3>
								<p class="BookFirst">作何：BOB</p>
								<p class="BookSecond">评论数：2301</p>
							</div>
						</li>
						</router-link>
						<router-view></router-view>
						
						<li>
							<a href="javascript:;"><img src="../../assets/images/1.jpg"/></a>
							<div class="BookSmail">
								<h3>实名制</h3>
								<p class="BookFirst">作何：BOB</p>
								<p class="BookSecond">评论数：2301</p>
							</div>
						</li>
						<li>
							<a href="javascript:;"><img src="../../assets/images/1.jpg"/></a>
							<div class="BookSmail">
								<h3>实名制</h3>
								<p class="BookFirst">作何：BOB</p>
								<p class="BookSecond">评论数：2301</p>
							</div>
						</li>
						<li>
							<a href="javascript:;"><img src="../../assets/images/1.jpg"/></a>
							<div class="BookSmail">
								<h3>实名制</h3>
								<p class="BookFirst">作何：BOB</p>
								<p class="BookSecond">评论数：2301</p>
							</div>
						</li>
						<li>
							<a href="javascript:;"><img src="../../assets/images/1.jpg"/></a>
							<div class="BookSmail">
								<h3>实名制</h3>
								<p class="BookFirst">作何：BOB</p>
								<p class="BookSecond">评论数：2301</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		
		<div class="BookAboutToShow">
			<div class="BookTheatresTitle">
				<h3>杂志速食</h3>
				<a href="javascript:;">更多 <span>&#x3e;</span>
					</a>
				</div>
				<div class="BookShow">
					<ul>
						<li>
							<a href="javascript:;"><img src="../../assets/images/1.jpg"/></a>
							<div class="BookSmail">
								<h3>实名制</h3>
								<p class="BookFirst">作何：BOB</p>
								<p class="BookSecond">评论数：2301</p>
							</div>
						</li>
						<li>
							<a href="javascript:;"><img src="../../assets/images/1.jpg" /></a>
							<div class="BookSmail">
								<h3>实名制</h3>
								<p class="BookFirst">作何：BOB</p>
								<p class="BookSecond">评论数：2301</p>
							</div>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg" /></a>
							<div class="BookSmail">
								<h3>实名制</h3>
								<p class="BookFirst">作何：BOB</p>
								<p class="BookSecond">评论数：2301</p>
							</div>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg" /></a>
							<div class="BookSmail">
								<h3>实名制</h3>
								<p class="BookFirst">作何：BOB</p>
								<p class="BookSecond">评论数：2301</p>
							</div>
						</li>
						<li>
							<a href=""><img src="../../assets/images/1.jpg" /></a>
							<div class="BookSmail">
								<h3>实名制</h3>
								<p class="BookFirst">作何：BOB</p>
								<p class="BookSecond">评论数：2301</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="BookTvShow">
				<div class="BookTheatresTitle">
					<h3>热书分类</h3>
					<a href="javascript:;">更多<span>&#x3e;</span></a>
			</div>
			<div class="BookShow">
					<ul>
						<li>
							<a href="javascript:;"><img src="../../assets/images/1.jpg"/></a>
							<div class="BookSmail">
								<h3>实名制</h3>
								<p class="BookFirst">作何：BOB</p>
								<p class="BookSecond">评论数：2301</p>
							</div>
						</li>
						<li>
							<a href="javascript:;"><img src="../../assets/images/1.jpg"/></a>
							<div class="BookSmail">
								<h3>实名制</h3>
								<p class="BookFirst">作何：BOB</p>
								<p class="BookSecond">评论数：2301</p>
							</div>
						</li>
						<li>
							<a href="javascript:;"><img src="../../assets/images/1.jpg"/></a>
							<div class="BookSmail">
								<h3>实名制</h3>
								<p class="BookFirst">作何：BOB</p>
								<p class="BookSecond">评论数：2301</p>
							</div>
						</li>
						<li>
							<a href="javascript:;"><img src="../../assets/images/1.jpg"/></a>
							<div class="BookSmail">
								<h3>实名制</h3>
								<p class="BookFirst">作何：BOB</p>
								<p class="BookSecond">评论数：2301</p>
							</div>
						</li>
						<li>
							<a href="javascript:;"><img src="../../assets/images/1.jpg"/></a>
							<div class="BookSmail">
								<h3>实名制</h3>
								<p class="BookFirst">作何：BOB</p>
								<p class="BookSecond">评论数：2301</p>
							</div>
						</li>
					</ul>
				</div>
		</div>
	</div>
	</div>
</template>

<script>
	export default{
	name:'book',
	data(){
		return{

		}
	}
}
	
	
	var num = window.devicePixelRatio;
	var bili = 1 / num;
	var meta_vp = document.createElement('meta');
	meta_vp.name = 'viewport';
	meta_vp.content = 'width=device-width, user-scalable=no, initial-scale=' + bili + ', maximum-scale=' + bili + ', minimum-scale==' + bili + '';
	document.head.appendChild(meta_vp);
	
	
	var wid = document.documentElement.clientWidth / 10;
	document.documentElement.style.fontSize = wid + 'px';
</script>

<style>
body {
  background: #f0f0f0;
}
.Head,
.BookContent,
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
.BookContent {
  top: 2.54666667rem;
  bottom: 1.22666667rem;
  overflow: auto;
}
.BookContent .TBookheatres,
.BookContent .BookAboutToShow,
.BookContent .BookTvShow {
  height: 5.93333333rem;
  margin-bottom: 0.32rem;
  background-color: #ffffff;
}
.BookTheatres,
.BookAboutToShow,
.BookTvShow {
  padding-top: 0.66666667rem;
  overflow: hidden;
}
.BookTheatres{
	background: #FFFFFF;
	margin-bottom: 0.32rem;
}
.BookTheatresTitle {
  overflow: hidden;
}
.BookTheatresTitle h3 {
  float: left;
  font-size: 0.41333333rem;
  margin-left: 0.26666667rem;
}
.BookTheatresTitle a {
  float: right;
  font-size: 0.30666667rem;
  margin-right: 0.72rem;
}
.BookTheatresCon,
.BookShow {
	background: #FFFFFF;
 	margin-top: 0.56rem;
}

.BookShow ul {
  overflow: hidden;
  white-space: nowrap;
  width: 50000px;
}
.BookShow li {
  width: 6.34666667rem;
  height: 3.10666667rem;
  float: left;
  margin-left: 0.26666667rem;
  display: inline-block;
  border: 1px solid #f0f0f0;
  
  padding-top: 0.14666667rem;
}
.BookShow img {
  height: 2.68rem;
  width: 2.01333333rem;
}
.BookShow h3 {
  font-size: 0.4rem;
  margin-bottom: 0.42666667rem;
}
.BookShow p {
  font-size: 0.24rem;
}
.BookSecond {
  margin-top: 0.93333333rem;
  font-size: 0.29333333rem;
  font-weight: 700;
}
.BookShow .BookSmail {
  display: inline-block;
  padding-left: 0.45333333rem;
}

</style>