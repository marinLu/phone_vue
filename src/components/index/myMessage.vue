<template>
<div class="myMessage_container">
	<div class="myMessage_top">
			<router-link :to="{path:'/indexTalk'}"><img src="../../assets/images/left.png" alt=""></router-link>
			<h1>聊天信息</h1>
	</div>
	<div class="myMessage_con">
		<span class="title">置顶聊天</span>
		<span class="btn" ref="btn" @click="btn">on<i class="open" ref="yidong"><span></span><span></span></i><span class="close">off</span></span>
	</div>
	<div class="myMessage_con">
		<span class="title">置顶聊天</span>
		<span class="btn" ref="btn2" @click="btn2">on<i class="open" ref="yidong2"><span></span><span></span></i><span class="close">off</span></span>
	</div>
	<div class="myMessage_con">
		<span class="title">加入黑名单</span>
	</div>
	<div class="myMessage_con">
		<span class="title">清空聊天记录</span>
	</div>
	
</div>

	
</template>

<script>
export default{
		name:'myMessage',
		components:{
			
		},
		methods:{
			btn(){
				var self =this;
				this.$refs.btn.className=(this.$refs.btn.className=="btn")?"btn1":"btn"
				this.$refs.yidong.className=(this.$refs.yidong.className=="open")?"open1":"open"
			},
			btn2(){
				var self =this;
				this.$refs.btn2.className=(this.$refs.btn2.className=="btn")?"btn1":"btn"
				this.$refs.yidong2.className=(this.$refs.yidong2.className=="open")?"open1":"open"
			}
		}
	}
	
</script>

<style scoped lang="less">
.myMessage_container{
	
	width: 750/75rem;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: #fff;
	.myMessage_top{
		width: 100%;
		height: 86/75rem;
		position: relative;
		
		img{
			position: absolute;
			top:15/75rem;
			left:10/75rem;
		}
		h1{
			position: absolute;
			font-size: 35/75rem;
			top:15/75rem;
			left:310/75rem;
		}
	}
	.myMessage_con{
		border-top:20/75rem solid #ddd;
		font-size: 40/75rem;
		padding: 20/75rem 20/75rem;
		.title{
			display: inline-block;
			height: 50/75rem;
		}
		.btn{
			float: right;
			font-size: 25/75rem;
			display: inline-block;
			width: 100/75rem;
			height: 50/75rem;
			line-height: 45/75rem;
			background: #FEC32E;
			border:1/75rem solid #FEC32E;
			border-radius: 20/75rem;
			padding-left:30/75rem;
			position: relative;
			.close{
				position: absolute;
				right:15/75rem;
				color: #fff;
			}
			.open{
				display: inline-block;
				width: 50/75rem;
				height: 36/75rem;
				line-height: 40/75rem;
				background:#fff; 
				border:1/75rem solid #fff;
				border-radius: 20/75rem;
				position: absolute;
				top:6/75rem;
				right:7/75rem;
				overflow: hidden;
				z-index:2;
				span{
					position: absolute;
					display: inline-block;
					width: 27/75rem;
					height: 27/75rem;
					background: #EDEDED;
					border-radius: 50%;
				}
				span:first-child{
					left:-5/75rem;
					top:3/75rem;
				}
				span:last-child{
					right:-5/75rem;
					top:3/75rem;
				}
			}
		}
		.btn1{
			float: right;
			font-size: 25/75rem;
			display: inline-block;
			width: 100/75rem;
			height: 50/75rem;
			line-height: 45/75rem;
			background: #bbb;
			border:1/75rem solid #FEC32E;
			border-radius: 20/75rem;
			padding-left:30/75rem;
			position: relative;
			.close{
				position: absolute;
				right:15/75rem;
				color: #fff;
			}
			.open1{
				display: inline-block;
				width: 50/75rem;
				height: 36/75rem;
				line-height: 40/75rem;
				background:#fff; 
				border:1/75rem solid #fff;
				border-radius: 20/75rem;
				position: absolute;
				top:6/75rem;
				right:70/75rem;
				overflow: hidden;
				z-index:2;
				span{
					position: absolute;
					display: inline-block;
					width: 27/75rem;
					height: 27/75rem;
					background: #EDEDED;
					border-radius: 50%;
				}
				span:first-child{
					left:-5/75rem;
					top:3/75rem;
				}
				span:last-child{
					right:-5/75rem;
					top:3/75rem;
				}
			}
		}
	}	
}
	
</style>