var mysql = require('mysql');

var db = {};

db.query = function sqlback(sqllan, fn){
	var connection = mysql.createConnection({
		host: '',
		user: '',
		password: '',
		database: '',
		port: 3306
	});
	
	connection.connect(function(err){
		if(err){
			return console.log(err);
		}
	
		console.log('连接成功');
	});

	var sql = sqllan;
	if(!sql) return;
	connection.query(sql, function(err, rows, fields){
		if(err){
			return console.log(err);
		}
		fn(rows);
	});

	connection.end(function(err){
		if(err){
			return console.log(err);
		}
		console.log('连接关闭');
	});
}
module.exports = db;