<template>
	<div>
		<div class="Hei">
			<div>  
				<p>
					<router-link to="../shezhi/">
					    <span><</span>
					</router-link>
					<a>黑名单</a>
				</p>	
			</div>
			<div class="Hei_name" >
			  <ul>
			  	<li><i></i><span>毒砒霜少女</span><p>删除黑名单</p></li>
			  	<li><i></i><span>毒砒霜少女</span><p>删除黑名单</p></li>
			  </ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"heiname",
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
    list-style: none;
    font-size:32/75rem;
}
.Hei{
	background: #fff;
}
.Hei div:first-child{
    margin:0 22/75rem;
    color:black;
    height:120/75rem;
    p{
        padding-top: 50/75rem;
        font-weight: 700;
    }
    span{
        margin-right: 268/75rem;
    }
}
.Hei{
    .Hei_name{
        ul li:first-child{
            border-bottom: 1px solid #AAAAAA;
        }
        ul li{
            background: #666666;
            height:80/75rem;
            line-height:80/75rem;
            
            i{
                display: inline-block;
                width:40/75rem;
                height:40/75rem;
                background: #fff;
                border-radius:50%;
                margin-top: 20/75rem;
                margin-left: 20/75rem;
                margin-right: 20/75rem;
            }
            span{
                color:black;
            }
            p{  
                display: inline-block;
                background: #333333;
                color:#fff;
                line-height: 40/75rem;
                font-size: 20/75rem;
                margin-left: 380/75rem;
                
            }
        }
    }
}

</style>