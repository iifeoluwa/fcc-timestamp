const http = require('http');
const timestamp = require('./verify_timestamp')

http.createServer((req, res) => {
	
	let url = unescape(req.url.replace('/', ''));
	console.log(timestamp(url));
	
	res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write('here ' + url.pathname);
			res.end();

}).listen(3333)

console.log('App is runnig');