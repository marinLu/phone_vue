<template>
	<div class="app">
		<IndexHeader @flag="getflag"></IndexHeader>
		
		<router-view></router-view>
		
		<IndexFooter></IndexFooter>
	</div>
</template>
<script>
	import IndexHeader from "../thefunnyhead";
	import IndexFooter from "../footer";
	
	
  	
  	
	export default{
		name:'thefunny',
		data(){
			return {

			}
		},
		components:{
			IndexHeader,
    		IndexFooter
    		
		},
		methods:{
			getflag(flag){
				console.log(flag);
			}
		}
	}
</script>
<style scoped lang="less">
	#thefunny{
		position:absolute;
		overflow: auto;
		bottom:96/75rem;
		
	}
</style>
<style>

</style>