<template>
	<div>
		<IndexHeader></IndexHeader>
		 <div id="index">
		 	<keep-alive>
				<router-view></router-view>	
			</keep-alive>
		 </div>
		<IndexFooter></IndexFooter>
	</div>
</template>

<script>
	import IndexHeader from "../header"
	import IndexFooter from "../footer"
	export default {
		name:'index',
		data(){
			return{

			}
		},
		components:{
			IndexHeader,
    		IndexFooter,
			
		}
	}
	
</script>


<style lang="less">

	#index{
		position:absolute;
		overflow: auto;
		bottom:96/75rem;
		top: 88/75rem;
	}
	.clearfix:after {
	  content: "";
	  display: block;
	  height: 0;
	  overflow: hidden;
	  clear: both;
	}
</style>