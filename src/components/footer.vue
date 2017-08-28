<template>
	<div class="indexFooter clearfix">
		<ul>
			<li v-for="(data,index) in navs" ><router-link v-bind:to="{path:data.url,params:{index:index}}">{{data.name}}</router-link></li>
			
		</ul>	
	</div>
</template>

<script>
export default {
	name:"indexFooter",
	data(){
		return {
			navs:[
				{
					url:"/",
					name:'首页'
				},
				{
					url:"/humorous",
					name:'逗圈'
				},
				{
					url:"/thefunny",
					name:'论逗'
				},
				{
					url:"/mine",
					name:'我的'
				}
			]
		}
	}


}

</script>

<style scoped lang="less">

.indexFooter{
	width: 750/75rem;
	height:96/75rem;
	background: #fff;
	position: fixed;
	bottom:0;
	ul{
		height: 100%;
		overflow: hidden;
		li{
			width: 25%;
			height: 100%;
			float:left;
			a{
				display: block;
				width: 100%;
				height: 100%;
				text-align: center;
				padding-top:70/75rem;
				font-size:18/75rem;	
			}
		}
		li:nth-child(1) a{
			background: url(../assets/images/footer1.jpg) no-repeat (750/8-20)/75rem 24/75rem;
			background-size:40/75rem;
		}
		li:nth-child(2) a{
			background: url(../assets/images/footer2.jpg) no-repeat (750/8-20)/75rem 24/75rem;
			background-size:40/75rem;
		}
		li:nth-child(3) a{
			background: url(../assets/images/footer3.jpg) no-repeat (750/8-20)/75rem 24/75rem;
			background-size:40/75rem;
		}
		li:nth-child(4) a{
			background: url(../assets/images/footer4.jpg) no-repeat (750/8-20)/75rem 24/75rem;
			background-size:40/75rem;
		}
	}
}


</style>