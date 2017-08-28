<template>
	<div class="dqEditorInfoContainer">
		<div class="dqEditorInfoTitle">
			<img src="../../assets/images/left.png" alt="" class="clearfix" @click="back">
			<span class="title">编辑逗圈资料</span>
		</div>
		<div class="dqEditorInfoAddIcon">
			<span>+</span>
			<p>添加头像</p>
		</div>
		<div class="dqEditorInfoAddContent">
			<input type="text" placeholder="添加逗圈名称 (2-18个字)">
			<textarea placeholder="填写简介 (0-56个字)">
			</textarea>
		</div>
		<div class="dqEditorInfoSubmit">提交</div>
		<div class="dqEditorInfoAccept">
			<label>
				<input type="radio">
				<span>我已阅读并同意</span>
				<a href="javascript:;">服务声明</a>
			</label>
		</div>
	</div>
</template>
<script>
	export default {

		name:'dqEditorInfo',
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
	.dqEditorInfoContainer{
		width:100%;
		font-family:'微软雅黑';
		color:#aaaaaa;
		text-align:center;
		background:white;
	}
	.dqEditorInfoTitle{
		width:10rem;
		height:85/75rem;
		line-height:85/75rem;
		font-size:34/75rem;
		font-weight:700;
		position:relative;
		border-bottom:3/75rem solid #aaaaaa;
		color:black;
		img{
			position:absolute;
			top:30/75rem;
			left:20/75rem;
			width:18/75rem;
		}
	}
	.dqEditorInfoAddIcon{
		width:155/75rem;
		height:120/75rem;
		font-size:36/75rem;
		display:inline-block;
		margin-top:250/75rem;
		margin-bottom:220/75rem;
		span{
			font-size:88.8/75rem;
		}
	}
	.dqEditorInfoAddContent{
		width:510/75rem;
		text-align:center;
		margin:0 auto;
		font-family:'微软雅黑';
		input{
			width:100%;
			height:70/75rem;
			line-height:70/75rem;
			border:0;
			text-align:center;
			text-indent:0;
			border-bottom:2px solid #aaaaaa;
			font-family:'微软雅黑';
			font-size:30/75rem;
		}
		textarea{
			width:100%;
			height:100/75rem;
			line-height:100/75rem;
			border:0;
			text-align:center;
			resize:none;
			font-family:'微软雅黑';
			font-size:30/75rem;
		}
	}
	.dqEditorInfoSubmit{
		width:360/75rem;
		height:70/75rem;
		border-radius:8/75rem;
		background:#e3e2e2;
		margin:0 auto;
		font-size:36/75rem;
		line-height:70/75rem;
		margin-top:230/75rem;
	}
	.dqEditorInfoAccept{
		font-size:28/75rem;
		padding:30/75rem;
		input{
			width:30/75rem;
			height:30/75rem;
			border:1px solid #5483c2; 
			vertical-align:middle;
		}
		a{
			color:#151515;
			
		}
	}
</style>