<template>
<div class="indexSearch_container">
  <div class="indexSearch_top clearfix">
  		<input type="search">
		<img src="../../assets/images/search.jpg" alt="">
  </div>
  <div class="indexSearch_con">
  	<p class="history">搜索历史</p>
  	<p class="content">进击的巨人</p>
  	<p class="content">进击的巨人</p>
  	<p class="content">进击的巨人</p>
  </div>
  <div class="indexSearch_middle">
  	
  </div>
  <div class="indexSearch_bottom">
  	
  </div>
	
</div>
	
</template>


<script>
export default {
	name:"indexSearch",

}
	
</script>

<style scoped lang="less">

.indexSearch_container{
	.indexSearch_top{
		width: 750/75rem;
		height: 88/75rem;
		background: #5483C2;
		position: fixed;
		top:0;
		input{
			width: 650/75rem;
			height:58/75rem;
			margin:15/75rem 50/75rem;
			border:1px solid #fff;
			border-radius: 12/75rem;
		}
		img{
			position: absolute;
			right:70/75rem;
			top:25/75rem;
			width:30/75rem;
		}
	}
	.indexSearch_con{
		.history{
			width: 690/75rem;
			font-size: 20/75rem;
			color: #ccc;
			height: 25/75rem;
			line-height: 25/75rem;
			padding:25/75rem 30/75rem;
			border-bottom: 1/75rem solid #ccc;
		}
		.content{
			width: 690/75rem;
			height: 35/75rem;
			font-size: 25/75rem;
			line-height: 35/75rem;
			border-bottom: 1/75rem solid #ccc;
			padding:25/75rem 30/75rem;
		}
	}
}


	
</style>