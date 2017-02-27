const http = require('http');
const timestamp = require('./src/verify_timestamp')

http.createServer((req, res) => {

	if (req.url == '/') {

	}else{
		let url = unescape(req.url.replace('/', ''));
		let result = timestamp(url);
		
		res.setHeader('Content-Type', 'application/json');
		
	    res.write(JSON.stringify(result));
		res.end();
	}

}).listen(3333)

console.log('App is runnig');