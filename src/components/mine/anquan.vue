<template>
	<div>
		<div class="Anquan">
			<div>
				<router-link to="../shezhi/">
					<span><</span>
				</router-link>	
				<a>账号安全</a>
			</div>	
			<div class="Zhanghao">
				<p>逗趣账号</p>
				<h4>邮箱</h4>
				<p>绑定邮箱</p>
			</div>
			<div class="Phone">
				<h4>手机</h4>
				<p>13699140229</p>
			</div>
			<div class="Pwd">
				<h4>账号密码</h4>
				<p>修改密码</p>
			</div>
			<div class="Weibo">
				<p>社交账号</p>
				<h4>新浪微博</h4>
				<p>尚未绑定</p>
			</div>
			<div class="QQ">
				<h4>QQ</h4>
				<p>尚未绑定</p>
			</div>
			<div class="Weixin">
				<h4>微信</h4>
				<p>尚未绑定</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"anquan",
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang="less">
	*{
    margin:0;
    padding:0;
    font-size: 28/75rem;
    font-family: "微软雅黑";
}
.Anquan{
	background: #fff;
}
.Anquan div:first-child{
    margin:0 22/75rem;
    padding:24/75rem 0;  
    color:black;
    span{
        margin-right: 268/75rem;
         font-weight: 700;
    }
    a{
    	font-size:32/75rem;
        font-weight: 700;
    }
}
.Anquan .Zhanghao{
	padding-top: 50/75rem;
    width:100%;
    height:180/75rem;
    border-bottom:1px solid gray;
    h4{
    	padding-top: 45/75rem;
    	padding-bottom: 18/75rem;
    	font-size: 35/75rem;
    }  
    
}
.Anquan .Phone,.Anquan .QQ,.Anquan .Weixin{
    width:100%;
    height:116/75rem;
    border-bottom:1px solid gray;  
}
.Anquan .Weixin{
	border-bottom: 0;
}
.Anquan .Pwd{
	width:100%;
    height:168/75rem;
}
.Anquan .Weibo{
    width:100%;
    height:262/75rem;
    p:first-child{
    	padding-bottom: 50/75rem;
    }
}
.Anquan div{
    p,h4{
      padding-left: 18/75rem;
      
    }
    h4{
    	padding-top: 23/75rem;
    	padding-bottom: 18/75rem;
    	font-size: 35/75rem;
    }
}

</style>