const http = require('http');
const url = require('url');
const timestamp = require('./verify_timestamp')

http.createServer((req, res) => {
	
	let uri = req.url.replace('/', '');

	if (timestamp) {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write('here ' + uri);
			res.end();
	}else{
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write('here ' + uri);
			res.end();
	}
	
}).listen(3333)

console.log('App is runnig');