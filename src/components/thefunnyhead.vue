<template>
	<div>
		
		<div class="Head" id="thefunny">
			<div class="Title" id="thefunny">

				<h3>论逗</h3>
				<img src="../assets/images/ss.png" class="Find" @click="search"/>
			</div>
			<div class="Nav" id="thefunny">
				<ul>
					<li>
						<router-link :to="{path:'/thefunny/move'}">影视</router-link>
					</li>
					<li>
						<router-link :to="{path:'/thefunny/book'}">书籍</router-link>
					</li>
					<li>
						<router-link :to="{path:'/thefunny/game'}">游戏</router-link>
					</li>
					<li>
						<router-link :to="{path:'/thefunny/music'}">音乐</router-link>
					</li>
				</ul>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	name:"indexheader",
  data(){
    return {
      flag:false
    }
  },
 methods:{
     search:function(e){
        this.flag = ! this.flag;
        this.$emit('flag',this.flag);
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
#thefunny{
	background: #FFFFFF;
}
.Head{
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
}
.Head {
  height: 2.54666667rem;
  top: 0;
  background: #ffffff;
  width: 100%;
  text-align: center;
}
.Head .Title {
  font-size: 0.44rem;
  height: 1.17333333rem;
  position: fixed;
  top: 0;
  width: 100%;
}
.Head .Title h3 {
  line-height: 1.17333333rem;
  display: block;
}
.Head .Title a{
	display: inline-block;
}
.Head .Nav {
  height: 1.37333333rem;
  overflow: hidden;
  position: fixed;
  top:1.17333333rem;
}
.Head .Nav ul {
  list-style: none;
  overflow: hidden;
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
.Title .Find{
  width: 0.61333333rem;
  height: 0.61333333rem;
  position: absolute;
  top: 0.28rem;
  right: 0.72rem;
}
.Title h3 {
  display: inline-block;
}
</style>