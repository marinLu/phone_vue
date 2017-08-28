<template>
	<div class="app">
		<!-- <IndexHeader></IndexHeader> -->
		<div id="humorous">
		
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
  	
	export default{
		name:'humorous',
		data(){
			return {

			}
		},
		components:{
			IndexHeader,
    		IndexFooter
		}
	}
</script>
<style scoped lang="less">
	#humorous{
		// position:absolute;
		// overflow: auto;
		// bottom:96/75rem;
		// top: 0;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	table {
	  border-collapse: collapse;
	  border-spacing: 0;
	}
	body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6 {
	  margin: 0;
	}
	input,textarea,select {
	  padding: 0;
	  border: 1px solid #ccc;
	  outline: 0;
	  font-size: 100%;
	}
	i {
	  font-style: normal;
	}
	b {
	  font-weight: normal;
	}
	input {
	  text-indent: 2em;
	}
	ul,ol {
	  padding-left: 0;
	  list-style: none;
	}
	a {
	  text-decoration: none;
	}
	a,img {
	  -webkit-user-select: none;
	  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}
	.clearfix:after {
	  content: "";
	  display: block;
	  height: 0;
	  overflow: hidden;
	  clear: both;
	}
	body{
	  font-family: "微软雅黑";
	}
</style>