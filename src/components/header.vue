<template>
	<div class="indexHeader clearfix">
		<input type="search">
		<router-link :to="{path:'/indexSearch'}"><img src="../assets/images/search.jpg" alt=""></router-link>
	</div>
</template>

<script>
export default {
	name:"indexHeader",

}
</script>

<style scoped lang="less">
.indexHeader{
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




</style>