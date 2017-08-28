<template>
	<div class="indexTalk_container">
		<div class="indexTalk_top">
			<router-link :to="{path:'/humOtherInfo'}"><img src="../../assets/images/left.png" alt=""></router-link>
			<span class="otherName">王尼玛</span>
			<router-link class="sets" tag="span" :to="{path:'/myMessage'}">设置</router-link>
		</div>
		<div class="indexTalk_content">
			<p class="time">3-24</p>
			<div class="bgOther"><p class="other">	我说怎么可能呢我说怎么可能呢我说怎么可能呢能呢我说怎么可能呢</p>
			</div>
			<div class="bgMy"><p class="mine">我说怎么可能呢</p></div>
		</div>
		<div class="indexTalk_bottom">
			<input type="text">
		</div>
		
	</div>
</template>

<script>
export default {
	name:"indexTalk",

}
	
</script>

<style scoped lang="less">
.indexTalk_container{
	width: 750/75rem;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	.indexTalk_top{
		padding: 20/75rem 10/75rem;
		span{
			font-size: 30/75rem;
		}
		.otherName{
			font-weight: 700;
			margin-left: 280/75rem;
			margin-right:250/75rem; 
		}

	}
	.indexTalk_content{
		height: 1180/75rem;
		background: #ddd;
		.bgOther{
			background: url('../../assets/images/huang.jpg') 10/75rem no-repeat;
			background-size: 80/75rem 80/75rem;
		}
		.bgMy{
			background: url('../../assets/images/huang.jpg') 660/75rem no-repeat;
			background-size: 80/75rem 80/75rem;
		}
		.time{
			color: #aaa;
			font-size: 18/75rem;
			text-align: center;
			padding-top:30/75rem;
			padding-bottom: 20/75rem;
		}
		.other{
			width: 60%;
			margin:20/75rem auto;
			padding-left: 30/75rem;
			padding-right: 30/75rem;
			height: 80/75rem;
			line-height: 40/75rem;
			border-radius: 30/75rem;
			font-size: 25/75rem;
			background: #aaa;
		}
		.mine{
			width: 30%;
			padding-left: 30/75rem;
			padding-right: 30/75rem;
			margin-left: 350/75rem;
			margin-top: 30/75rem;
			height: 80/75rem;
			line-height: 80/75rem;
			border-radius: 30/75rem;
			font-size: 25/75rem;
			background: orange;
		}
	}
	.indexTalk_bottom{
		input{
			width: 80%;
			height: 50/75rem;
			margin: 15/75rem;
			margin-left: 70/75rem;
			border: 1/75rem solid #ccc;
		}
	}
}
	
</style>