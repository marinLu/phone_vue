<template>
	<div>
		<div class="Yingpiao">
			<div>
				<router-link to="../mine/">
					<span><</span>
				</router-link>
				<a>我的订单</a>
			</div>	
			<div><a href="javascript:;">影票</a>
				<router-link :to="{path:'/dingyue'}">订阅</router-link>
			</div>
			<div class="Neirong">
				<div>
					<img src="../../assets/images/mv.jpg" alt="" />
				</div>
				<div>
				  <h3>美女与野兽</h3>
				  <p>场次：<span>2017-08-17</span><span>20:38</span></p>
				  <p>地点：<span>北京传奇影视城(三里屯店)</span></p>
				  <p>单价：<span>¥80</span></p>
				</div>
				<div>x2</div>
			</div>
			<div class="Neirong">
				<div>
					<img src="../../assets/images/mv.jpg" alt="" />
				</div>
				<div>
				  <h3>美女与野兽</h3>
				  <p>场次：<span>2017-08-17</span><span>20:38</span></p>
				  <p>地点：<span>北京传奇影视城(三里屯店)</span></p>
				  <p>单价：<span>¥80</span></p>
				</div>
				<div>x1</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"yingpiao",
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
.Yingpiao div:first-child{
    padding:24/75rem 0 22/75rem;
    font-size:32/75rem;
    font-weight:700;
    background: #fff;
    span{
    	padding-left: 22/75rem;
        margin-right: 268/75rem;
    }
}
.Yingpiao div:nth-child(2){
	 background: #fff;
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
.Yingpiao{
     .Neirong{
     	padding-left: 22/75rem;
        height:245/75rem; 
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
        width:500/75rem;
        font-size: 24/75rem;
        float: left;
        padding-left: 22/75rem;
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
        font-size: 29/75rem;
        text-align: center;
        line-height:242/75rem;
        color: #c1c1c1;
    }
}


</style>