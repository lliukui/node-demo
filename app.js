var express = require('express');
var mysql = require('./db.js');
var app = express();

//返回数据格式
var returnJson = {
	'status': 'ok',
  	'errorCode': 0,
  	'errorMsg': 'success',
  	'results': {},
}

app.get('/', function(req, res){
	var result = mysql.query('select * from user', function(data){
		res.end(JSON.stringify(data));
	});
});

app.get('/novelList', function(req, res){
	var results = mysql.query('select * from novel', function(data){
		returnJson.results.novelList = data;
		res.end(JSON.stringify(returnJson));
	});
})

app.listen(80);