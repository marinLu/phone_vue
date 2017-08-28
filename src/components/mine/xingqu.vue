<template>
	<div>
		<div class="Xingqu">
			<div>
				<p>你对什么感兴趣？</p>
				<p>选择想要看到的内容吧</p>
			</div>
			<div class="Xq_neirong">
				<ul class="Yingyin">
				   <li>
				   	  <i></i>
				   	  <p>书影音</p>
				   </li>
			   	   <li class="Xq_yingshi">
			   	   	 <p>影视</p>
			   	   </li>
			   	   <li class="Xq_dushu">
			   	   	 <p>读书</p>
			   	   </li>
			   	   <li class="Xq_yinyue">
			   	   	 <p>音乐</p>
			   	   </li>
				</ul>
				
				<ul  class="Shenghuo">
				   <li>
				   	  <i></i>
				   	  <p>会生活</p>
				   </li>
			   	   <li class="Xq_yingshi">
			   	   	 <p>旅行</p>
			   	   	 <p>手作</p>
			   	   </li>
			   	   <li class="Xq_dushu">
			   	   	 <p>居家</p>
			   	   	 <p>运动健身</p>
			   	   </li>
			   	   <li class="Xq_yinyue">
			   	   	 <p>美食</p>
			   	   	 <p>时尚</p>
			   	   </li>
				</ul>
				
				<ul class="Shijie">
				   <li>
				   	  <i></i>
				   	  <p>看世界</p>
				   </li>
			   	   <li class="Xq_yingshi">
			   	   	 <p>人文</p>
			   	   	 <p>艺术</p>
			   	   </li>
			   	   <li class="Xq_dushu">
			   	   	 <p>科技</p>
			   	   	 <p>画画儿</p>
			   	   </li>
			   	   <li class="Xq_yinyue">
			   	   	 <p>摄影</p>
			   	   	 <p>建筑</p>
			   	   </li>
				</ul>
				
				<ul class="Chengzhang">
				   <li>
				   	  <i></i>
				   	  <p>在成长</p>
				   </li>
			   	   <li class="Xq_yingshi">
			   	   	 <p>故事</p>
			   	
			   	   </li>
			   	   <li class="Xq_dushu">
			   	   	 <p>情感</p>
			   	   	 <p>涨知识</p>
			   	   </li>
			   	   <li class="Xq_yinyue">
			   	   	 <p>成长</p>
			   	   	 <p>理财</p>
			   	   </li>
				</ul>
				
				<ul class="Yisi">

				   <li>
				   	  <i></i>
				   	  <p>有意思</p>
				   </li>
			   	   <li class="Xq_yingshi">
			   	   	 <p>找乐</p>
			   	     <p>动漫</p>
			   	   </li>
			   	   <li class="Xq_dushu">
			   	   	 <p>宠物</p>
			   	   	 <p>自然</p>
			   	   </li>
			   	   <li class="Xq_yinyue">
			   	   	 <p>娱乐八卦</p>
			   	   	 <p>美女</p>
			   	   </li>
				</ul>
				<router-link to="../shezhi/">
					<div class="Btn">选好了，保存</div>
				</router-link>
				
			</div>
			
			
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped lang="less" >
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: "微软雅黑";
}

.Xingqu div:first-child{
    height:206/75rem;
    p{
        text-align: center;
    }
    p:first-child{
        padding-top: 68/75rem;
        color:#FEC22E;
        font-size: 36/75rem;
    }
    p:last-child{
    	padding-top: 16/75rem;
        color:#B6B6B6;
        font-size: 24/75rem;
    }
}
.Xingqu .Xq_neirong{
    .Btn{
       color:#FFC84B;
       font-size: 30/75rem; 
       text-align: center;
       padding-top:130/85rem;
    }
    .Xq_yingshi{ 
       p{
            width:114/75rem;
            height:50/75rem;
            margin-top:22/75rem;
            line-height:50/75rem;
            border:1px solid #431201;
            border-radius: 25px;
            font-size: 34/75rem;
            color:#431201;
            text-align: center;
            margin-right: 20/75rem;
       }         
    }
    .Xq_dushu,.Xq_yinyue{ 
       p{
            width:114/75rem;
            height:50/75rem;
            margin-top:22/75rem;
            line-height:50/75rem;
            border:1px solid #431201;
            border-radius: 25px;
            font-size: 34/75rem;
            color:#fff;
            background:#431201 ;
            text-align: center;
            margin-right: 20/75rem;
       }         
    }
    ul{
        border-top: 1px solid #B6B6B6;
        border-bottom: 1px solid #F0F2F5;
        overflow: hidden;
        li{
        height: 140/75rem;
        float: left;    
        }
    }  
    ul li:first-child{
        padding-left: 20/75rem;
        width:188/75rem;
        i{ 
            display: inline-block;
            margin-left: 16/75rem;
            margin-top: 44/75rem;
            margin-bottom: 18/75rem;
            width:48/75rem;
            height:48/75rem;
            background:#431201; 
        }
        p{
            font-size: 24/75rem;
        }
    }
    .Yingyin li:first-child{
    	i{
    		margin-top:22/75rem;
    	}
    	p{
    		margin-top: 4/75rem;
    	}
    }
    .Yingyin li p{
    	margin-top: 45/75rem;
    }
    .Shenghuo li:first-child{
       
        i{
            background: #AB270E;
        }
    }
    .Shenghuo .Xq_yingshi{
        p{
            color:#AB270E;
            border:1px solid #AB270E;
        }
    }
    .Shenghuo .Xq_dushu{
        p{
            background: #fff;
            color:#AB270E;
        }
        p:last-child{
            width:174/75rem;
        }
    }
    .Shenghuo .Xq_yinyue{
        margin-bottom: 24/75rem;
        p{
          
            color:#fff;
            background: #AB270E;  
        }
    
    }
    .Shijie li:first-child{
        i{
            background: #F35333;
        }
    }
    .Shijie .Xq_yingshi{
        margin-bottom: 24/75rem;
        p{
           color: #F35333;
           border:1px solid #F35333;  
        }       
    }
    .Shijie .Xq_dushu{
        p:first-child{
           color: #F35333;
           background: #fff;
           border:1px solid #F35333;  
        }
        p:last-child{
            color:#fff;
            background:#F35333;
            border:1px solid #F35333;  
        }
    }
    .Shijie .Xq_yinyue{
        p:last-child{
           color: #F35333;
           background: #fff;
           border:1px solid #F35333;  
        }
        p:first-child{
            color:#fff;
            background:#F35333;
            border:1px solid #F35333;  
        }
    }
    .Chengzhang li:first-child{
        i{
            background: #FFC22F;
        }
    }
    .Chengzhang .Xq_yingshi,.Chengzhang .Xq_dushu,.Chengzhang .Xq_yinyue{
        margin-bottom: 24/75rem;
        p{
           color:#FFC22F;
           background:#fff;
           border:1px solid #FFC22F;  
        }
    }
    .Chengzhang .Xq_dushu{
        p:first-child{
            color:#fff;
            background:#FFC22F;
            border:1px solid #FFC22F;  
            
        }
    }
    .Yisi li:first-child{
        i{
            background: #5D68C1;
        }
    }
    .Yisi .Xq_yingshi{
       margin-bottom: 24/75rem; 
       p{
           color:#fff;
           background:#5D68C1;
           border:1px solid #5D68C1;
       }
    }
    .Yisi .Xq_dushu{
        p{
           color:#5D68C1;
           background:#fff;
           border:1px solid #5D68C1; 
        }
    }
    .Yisi .Xq_yinyue{
        p:first-child{
           width:174/75rem;
        }
        p:first-child{
           color:#fff;
           background:#5D68C1;
           border:1px solid #5D68C1; 
        }
        p:last-child{
           color:#5D68C1;
           background:#fff;
           border:1px solid #5D68C1; 
        }
    }
    
    
    
}

</style>