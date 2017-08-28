<template>
	<div>
		<div class="Login">
			<p><span><</span><a>登陆</a></p>	
			<div class="Shuru">
				<input type="text" placeholder="账号"/><br />
				<input type="text" placeholder="密码"/>
			</div>
			<p class="Btn">登陆逗趣</p>
			<p class="Zhuce"><a>注册账号</a><a>|</a><a>忘记密码</a></p>
			<p><i>————</i><a>第三方</a><i>————</i></p>
			<div class="Tu">
				<div><img src="../../assets/images/wx.png" alt="" /></div>
				<div><img src="../../assets/images/wb.png" alt="" /></div>
				<div><img src="../../assets/images/qq.png" alt="" /></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"login",
		data(){
			return{
				
			}
		},
//		created(){
//			this.$axios.get("/static/json/data.json").then(res=>{
//				console.log(res.data);
//			})
//		}
	}
</script>

<style scoped lang="less">
*{
    margin:0;
    padding:0;
}
.Login{
    .Shuru{
        input{
            width:685/75rem;
            height:72/75rem;
            font-size: 28/75rem;
            color:gray;
            padding:10/75rem;
            border-radius: 10px;
            border:1px solid #F0F2F5;
        }
        input:first-child{
            margin-top: 326/75rem;
        }
    }
    .Btn{
       width:700/75rem;
       height:82/75rem;
       border-radius: 10px;
       background: #5582C3;
       margin-top:30/75rem; 
       color:#fff;
       text-align: center; 
       line-height:84/75rem; ;
    }
    .Zhuce{
        margin:70/75rem 150/75rem;
        a{
        	color:#B5B5B5;
            font-weight: normal;
            font-size: 28/75rem;   
        }
        a:nth-child(2){
            padding:0 70/75rem;         
        } 
    }
    p:nth-child(5){
        margin-top:174/75rem;
        text-align: center;
    	color:#B5B5B5;
        font-weight: normal;
        a{
        	margin:0 20/75rem;
        }  
        

    }
    .Tu{
        margin-top:72/75rem;
        margin-left: 80/75rem;
        div{
          width:90/75rem;
          height:90/75rem;
          display: inline-block;
          margin-right: 112/75rem;
          img{
              width:90/75rem;
              height:80/75rem;
          }
        }
    }
}
.Login:first-child{
    margin:0 22/75rem;
    padding:24/75rem 0;
    font-size:32/75rem;
    font-weight: bolder;
    span{
        margin-right: 296/75rem;
    }
}

</style>