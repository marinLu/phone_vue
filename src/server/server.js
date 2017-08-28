var express=require('express');
var app= express();
var data =require('./data.js');
app.all('*',function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
}) 
app.get('/',function(req,res){
	res.json(200,data)
})

app.listen(3000,'127.0.0.1',function(){
	console.log('服务器已经启动')
})