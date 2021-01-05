const express = require('express');
const fs = require('fs');
const app = express();

app.use('/script', express.static(__dirname + '/script'));
app.use('/image', express.static(__dirname + '/image'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/view/main.html');
});



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
