var app = require('express')();
var http = require('http').Server(app);


const port = process.env.PORT || 3000


app.get('/', function (req, res) {
	

		res.sendfile("lab6part1.html");
	
});




http.listen(port, function() {
   console.log('listening on localhost:'+port);
});