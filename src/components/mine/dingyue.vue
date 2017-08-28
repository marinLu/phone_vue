<template>
	<div>
		<div class="Dingyue">
			<div>
				<span><</span>
				<a>我的订单</a></div>	
			<div>
				<router-link to="../yingpiao/">影票</router-link>		
				<a href="javascript:;">订阅</a>
			</div>
			<div class="Neirong">
				<div>
					<img src="../../assets/images/cun.jpg" alt="" />
				</div>
				<div>
				  <h3>男人装</h3>
				  <p>时尚&nbsp;/&nbsp;画册&nbsp;/&nbsp;明星&nbsp;/娱乐</p>
				  <p>订阅：<span>2017-08</span></p>
				  <p>价格：<span>¥150</span></p>
				</div>
				<div>¥150/年</div>
			</div>	
		</div>
	</div>
</template>

<script>
	export default{
		name:"dingyue",
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
}
.Dingyue{
	background: #fff;
}
.Dingyue div:first-child{
    margin:0 22/75rem;
    padding:24/75rem 0;
    font-size:32/75rem;
    font-weight:700;
    span{
        margin-right: 268/75rem;
    }
}
.Dingyue div:nth-child(2){
     height:84/75rem;
     font-size: 32/75rem;
     line-height:84/75rem; 
    a{  
        display: inline-block;
        width:49%;
        height:84/75rem;
        text-decoration: none;
        color:gray;
        text-align: center; 
        background: #fff; 
    }
    a:last-child{
        background: gray;
        color:#fff;
    }
}
.Dingyue{
     .Neirong{
        height:238/75rem; 
        overflow: hidden; 
        background: #fff;
     }
    .Neirong:last-child{
        margin-top: 20/75rem;
    }
    .Neirong div:first-child{
       width:150/75rem;
       float: left;
       img{
           width:150/75rem;
           height:202/75rem;
       }
    }
    .Neirong div:nth-child(2){
        width:450/75rem;
        font-size: 24/75rem;
        float: left;
        margin-top: 30/75rem;
        line-height: 40/75rem;
        h3{
        	font-size: 30/75rem;
        	color:black;
        	font-weight:700;
        	padding-bottom: 20/75rem;
        }
        p{
        	color: #c1c1c1;
        	padding-bottom:10/75rem;
        }
    }
    .Neirong div:last-child{
        float: left;
        font-size: 24/75rem;
        text-align: center;
        line-height:242/75rem;
        color: #c1c1c1;
    }
}

</style>