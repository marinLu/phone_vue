import {mock} from 'mock'
var data = mock({
	// 属性名|表达式数量  1-10
	'result|4-10':[
		
		{
			
			'id|+1':10,
			title:'这是新闻',
			'aaa|4-10':'新闻',
			// num|1-10整数部分N-N  .1-2 表示小数位N-N
			'num|1-100.2-4':1,
			data:{
				
				'num|1-100':1
				
			}
		}
		
	]
	
})

console.log(data)

export default{
	news:function(){
		
	},
	nav:function(){
		
	}
}
