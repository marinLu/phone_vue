<template>
	<div>
		<div>
		<div class="Daohang">
			<p>
				<router-link to="../mine/">
					<span><</span>
				</router-link>		
				<a>我的逗币</a><a href="#" class="Chongzhi">充值</a>
			</p>		
		</div>
		<div class="Price">326.00</div>
		<div class="Jiaoyi">
		  <p>交易记录</p>
		  <p>电影票</p>
		  <p>交易成功<span>－80</span></p>
		  <p>2017-08-17  16:55 </p>
		</div>
		<div class="Zhazhi">
		  <p>杂志订阅</p>
		  <p>《男人装》周刊</p>
		  <p>交易成功</p>
		  <p>2017-08-17  16:55 </p>
		</div>
	   </div>
	</div>
	
</template>

<script>
	
	
	export default {
		
		name:'doubi',
		
		data(){
			
			return {
				
			}
			
		}

	
	}
</script>
<style scoped lang="less">
*{
    margin:0;
    padding:0;
}
.Daohang{
    width:748/75rem;
    height:84/75rem;
    background: #F0F0F0;
    font-size:32/75rem;
    p{
        margin:0 20/75rem;
        padding:24/75rem 0;
        background: #F0F0F0;
        font-weight:700;
        span{
            margin-right: 266/75rem;
        }
        .Chongzhi{
        	margin-left:220/75rem;
        	color:#6D92C9;
        	font-weight:normal;
        }
    }     
}
.Price{
    width:100%;
    height:318/75rem;
    border-bottom: 2px solid #e4e4e4;
    line-height:318/75rem; 
    text-align: center;
    color: #5582C2;
    font-size: 36/75rem;
}
.Jiaoyi{
    width:100%;
    height:238/75rem;
    padding-left: 22/75rem;
    border-bottom: 2px solid #e4e4e4;
    p:first-child{
    	color:#6D92C9;
    	padding-top:20/75rem;
    	padding-bottom:58/75rem;
    }
    p:nth-child(2){
         font-size: 30/75rem;
         color:black;
         padding-bottom: 30/75rem;
    }
    p:nth-child(3){
    	padding-bottom: 18/75rem;
    	span{
    		margin-left: 534/75rem;
    		color:black;
    		font-size: 30/75rem;
    	}
    }
    p{
         font-size: 22/75rem;
         color:#AAAAAA;
    }
    
}
.Zhazhi{
    width:100%;
    height:238/75rem;
    margin-left: 22/75rem;
    border-bottom: 2px solid #e4e4e4;
    p{
        font-size: 22/75rem;
        color:#AAAAAA;
        
    }
    p:first-child{
        padding-top: 60/75rem;
        padding-bottom: 28/75rem;
        font-size: 30/75rem;
        color: black;
    }
    p:nth-child(2){
    	padding-bottom: 22/75rem;
    }
    p:nth-child(3){
    	padding-bottom: 18/75rem;
    	
    }
}
</style>