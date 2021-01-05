const express = require('express');
const fs = require('fs');
const app = express();

app.use('/script', express.static(__dirname + '/script'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/view/main.html');
});

app.get('/img', function(req, res){
	fs.readFile('saw.jpeg', function(error, data){
		
		res.writeHead(200, { 'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
});

// app.get('/count', function(req, res){
// 	fs.readFile('./view/count.js', function(error, data){
// 		res.writeHead(200, { 'Content-Type': 'text/html'});
// 		res.write(data);
// 		res.end();
// 	});
// });

// app.get('/', function (req, res) {
// 	res.render('main', {title : '상윤이는 삽질중....'});
// 	//res.render('./view/main', {title : '상윤이는 삽질중....'});
// });


var server = app.listen(80, function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log(__dirname);
	console.log('Server is working : PORT - ', port);
});
