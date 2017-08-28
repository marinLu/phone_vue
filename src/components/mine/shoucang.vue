<template>
	<div>
		<div class="Shoucang">
			<div>
				<router-link to="../mine/">
					<span class="Sc_arrow"><</span>
				</router-link>
				<a>我的收藏</a>
			</div>
		
			<div>
				<div class="Sc_title">
					<h5>“超级渗坑”周边村民：8米深井，打上来的水都是红色的</h5>
				<ul>
					<li>
						<img src="../../assets/images/cun.jpg" alt="" />
					</li>
					<li>
						<img src="../../assets/images/cun1.jpg" alt="" />
					</li>
					<li>
						<img src="../../assets/images/cun2.jpg" alt="" />
					</li>
				</ul>
				<p>
					<span>网络第一红人</span><span>6884评论</span><span>24分钟前</span>
				</p>
				</div>
				
				<div class="Sc_neirong">
					<div>
						<h5>贵州选举产生出席党的十九大代表，习近平全票当选</h5>
						<p>
							<span>男神王小二</span><span>6884评论</span><span>2天前</span>
						</p>
					</div>
				
					<ul>
						<li v-for="info in infoList">
							<div>
							  <h5>{{info.title}}</h5>
							  <p>
							  	<span>{{info.name}}</span><span>{{info.count}}</span><span>{{info.time}}</span>
							  </p>
							</div>
							<div>
								<img :src="info.Src" alt="" />
							</div>
						</li>
					</ul>
			
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"shoucang",
		data(){
			return{
			 infoList:[
			   {
			   	 title:"你记得角色却想不起名的老熟脸，方是真演员",
			   	 name:"张继科",
			   	 count:"6884评论",
			   	 time:"10天前",
			   	 Src:require('../../assets/images/yanyuan.jpg')
			   },
			   {
			   	 title:"余英时：红楼梦的两个世界",
			   	 name:"霍老爷",
			   	 count:"5367评论",
			   	 time:"20天前",
			   	 Src:require('../../assets/images/honglou.jpg')
			   },
			   {
			   	 title:"黄轩最爱的十部电影，演技为王",
			   	 name:"黄轩",
			   	 count:"8866评论",
			   	 time:"14天前",
			   	 Src:require('../../assets/images/huangxuan.jpg')
			   }		   		 
			 ]
			}
		}
	}
</script>

<style scoped lang="less">
	*{
    margin:0;
    padding:0;
    list-style: none;
}
.Shoucang div:first-child{
    margin:0 22/75rem;
    padding:24/75rem 0;
    font-size:32/75rem;
    a,span{
    	font-weight:700;
    }
}
.Shoucang div h5{
    font-family: "微软雅黑";
}
.Shoucang {
	.Sc_arrow{
        margin-right: 268/75rem;
    }
    .Sc_title{
        ul{
            overflow: hidden;
            li{
                float:left;
                margin-top:20/75rem;
                img{
                    width:218/75rem;
                    height:126/75rem;
                    margin-right: 16/75rem;
                }
            }       
        }
        p{
            span{
                font-size: 22/75rem;
                color:#B6B6B6;
                margin-right: 28/75rem;
            }
        }
    }
    .Sc_neirong{
        background: #F0F0F0;
        p{
            span{
                font-size: 22/75rem;
                color:#B6B6B6;
                margin-right: 28/75rem;
            }
        }
        ul li{
            overflow: hidden;
        }
        ul li div:first-child{
            width:452/75rem;
            height:178/75rem;
            float:left;
            padding-top: 0;
            p{
                margin-top: 74/75rem;
            }
        }
        ul li div:last-child{
             float:left;
             img{
             width:218/75rem;
             height:126/75rem;
            }
            p{
                margin-top: 106/75rem; 
            }
        }
        
    }
}

</style>