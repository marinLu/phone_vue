<template>
	<div class="dqNewTalkContainer">
		<div class="dqNewTalkTitle">
			<img src="../../assets/images/left.png" alt="" class="clearfix" @click="back">
			<span class="title">编辑新话题</span>
		</div>
		<div class="dqNewTalkAddTitle">
			<input type="text" placeholder="添加标题" />
		</div>
		<div class="dqNewTalkAddContent">
			<textarea placeholder="添加内容">
			</textarea>
		</div>
	</div>
</template>
<script>
	export default {

		name:'dq_bjxht',
		data(){
			return {

			}
		},
		methods:{
			back:function(e){
				window.history.go(-1);
			}
		}

	}
</script>
<style scoped lang="less">
	.dqNewTalkContainer{
		width:100%;
		font-family:'微软雅黑';
		background:white;
		height:100%;
	}
	.dqNewTalkTitle{
		width:10rem;
		height:85/75rem;
		line-height:85/75rem;
		font-size:34/75rem;
		text-align:center;
		font-weight:700;
		position:relative;
		border-bottom:3/75rem solid #aaaaaa;
	}
	.dqNewTalkTitle img{
		position:absolute;
		top:30/75rem;
		left:20/75rem;
		width:18/75rem;
	}
	.dqNewTalkAddTitle{
		width:710/75rem;
		height:69/75rem;
		border-bottom:2/75rem solid #aaaaaa;
		display:inline-block;
		margin-left:20/75rem;
		input{
			font-size:30/75rem;
			color:#aaaaaa;
			border:0;
			width:100%;
			height:100%;
			line-height:100%;
			float:left;
			text-indent:0;
		}
	}
	.dqNewTalkAddContent{
		width:710/75rem;
		min-height:50/75rem;
		display:inline-block;
		margin:0 auto;
		textarea{
			width:100%;
			min-height:50/75rem;
			color:#aaaaaa;
			line-height:50/75rem;
			border:0;
			font-size:20/75rem;
			margin-left:20/75rem;
			resize:none;
		}
	}
</style>