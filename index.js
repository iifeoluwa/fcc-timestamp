'use strict';

const http = require('http');
const fs = require('fs')
const timestamp = require('./src/verify_timestamp')

http.createServer((req, res) => {

	if (req.url == '/') {
		fs.readFile('./home.html', 'binary', (err, file) => {
			
			if (err) {

				res.statusCode = 500;
				res.setHeader('Content-Type', 'text/html');
			    
			    res.write('An error occurred. Please try again at a later time.');
			    res.end();
			}
			
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
		    
		    res.write(file, "binary");
		    res.end();
		})

	}else{
		let url = unescape(req.url.replace('/', ''));
		let result = timestamp(url);
		
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		
	    res.write(JSON.stringify(result));
		res.end();
	}

}).listen(process.env.PORT || 3333)

console.log('App is runnig');