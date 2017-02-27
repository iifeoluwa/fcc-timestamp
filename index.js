const http = require('http');
const timestamp = require('./verify_timestamp')

http.createServer((req, res) => {
	
	let url = unescape(req.url.replace('/', ''));
	let result = timestamp(url);
	
	res.setHeader('Content-Type', 'application/json');
	
    res.write(JSON.stringify(result));
	res.end();

}).listen(3333)

console.log('App is runnig');