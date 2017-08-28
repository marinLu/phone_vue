<template>
	<div>
		<div class="Shezhi">
			<div>
				<p>
					<router-link to="../mine/">
						<span><</span>
					</router-link>
					<a>设置</a>
				</p>	
			</div>
			<div>
				<router-link :to="{path:'/xingqu'}">
					<p>兴趣标签</p>
				</router-link>
				
			</div>
			<div>
				<router-link :to="{path:'/anquan'}">
					<p>账号安全</p>
				</router-link>
			  
			</div>
			<div>
				<router-link :to="{path:'/heiname'}">
					<p>黑名单</p>
				</router-link> 
			</div>
			<div @click="Clear_hc">
			  <p>清除缓存</p>
			</div>
			<div>
			  <p>检查更新</p>
			</div>
			<div class="Tuichu">
			    <router-link :to="{path:'/login'}">
					<p>退出登录</p>
				</router-link> 		  
			</div>		
		</div>
		<div class="Tankuang" v-show="temp">{{res}}</div>
	</div>
</template>

<script>
	export default{
		name:"shezhi",
		data(){
			return{
			  temp:false,
			  res:"正在清理，请稍后。。。"
			}
		},
		methods:{
			Clear_hc:function(){
				this.temp=true;
				var $this=this;
			    setTimeout(function(){
					$this.res="清理完成";
				},1000)
				setTimeout(function(){
					$this.temp=false;
				},1500)
			}
		}
	}
</script>

<style scoped lang="less">
*{
    margin:0;
    padding:0;
    list-style: none;
    font-size:32/75rem;
}
.Shezhi{
	background: #F0F2F5;
}
.Shezhi div:first-child{
    margin-top:0;
    background: #fff;
    color:black;
    font-weight:700;
    span{
        margin-right: 268/75rem;
    }
}
.Shezhi div{
   width:100%;
   height:68/75rem;
   background:#fff; 
   color:black;
   margin-top:20/75rem;

   p{
      height:68/75rem;
      line-height:68/75rem;
      margin-left: 20/75rem;
   }
}
.Shezhi{
    .Tuichu{
        p{
            text-align: center;
        }
    }
}
.Tankuang{
	background: #5582c3;
	width:360/75rem;
	height:150/75rem;
	box-shadow:10/75rem 10/75rem 40/75rem #666666; 
	border-radius:20/75rem;
	position: fixed;
	top:352/75rem;
	left:390/75rem;
	color:#fff;
	font-size: 30/75rem;
	padding:30/75rem 0 30/75rem 20/75rem;
	box-sizing: border-box;
}

</style>