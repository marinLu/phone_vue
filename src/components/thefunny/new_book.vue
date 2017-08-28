<template>
	<div>
		<div class="NewMusicTitle">
				<strong class="NewMusicBack" v-on:click="back">&#x3c;</strong>
				<h3>新书速递</h3>
			</div>
			<div class="NewMusicCon">
				
				<ul>
					
					
					<router-link :to="{path:'/book_details'}">
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					</router-link>
					<router-view></router-view>
					
					
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../assets/images/1.jpg" alt="" />
						</a>
						<h3>实名制</h3>
						<p>评论数：321098</p>
					</li>
				</ul>
				
			</div>
	</div>
</template>

<script>
	export default{
		name:'newmove',
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
.NewMusicTitle {
  position: fixed;
  height: 1.17333333rem;
  top: 0;
  background: #ffffff;
  width: 100%;
  border-bottom: 1px solid #F0F0F0;
  z-index: 1000;
}
.NewMusicCon {
  position: absolute;
  top: 1.17333333rem;
  overflow: auto;
  background: #FFFFFF;
}
.NewMusicTitle strong {
  float: left;
  font-size: 0.48rem;
  line-height: 1.17333333rem;
  margin-left: 0.28rem;
  font-weight: 700;
}
.NewMusicTitle h3 {
  text-align: center;
  font-size: 0.42666667rem;
  line-height: 1.17333333rem;
}
.NewMusicCon ul {
  list-style: none;
  overflow: hidden;
}
.NewMusicCon ul li {
  float: left;
  margin-top: 0.6rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
}
.NewMusicCon ul li img {
  width: 2.50666667rem;
  height: 3.22666667rem;
}
.NewMusicCon ul li h3 {
  font-size: 0.37333333rem;
}
.NewMusicCon ul li p {
  font-size: 0.22666667rem;
}

</style>
<style>
	body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, p, blockquote, table, th, td, embed, object {
    padding: 0;
    margin: 0; 
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
    fieldset, img, abbr {
    border: 0;
}
address, caption, cite, code, dfn, em, 
h1, h2, h3, h4, h5, h6, strong, th, var {
    font-weight: normal;
    font-style: normal;
}
ul {
    list-style: none;
}
caption, th {
    text-align: left;
}
h1, h2, h3, h4, h5, h6 {
    font-size: 1.0em;
}
q:before, q:after {
    content: ”;
}
a, ins {
    text-decoration: none;
}
a{
	color: black;
}

</style>