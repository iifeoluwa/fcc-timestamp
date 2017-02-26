'use strict';

const moment = require('moment')

function isTimestamp(url) {
	
	if (!isNaN(url)) {
			let date = moment.unix(url);
			if (date.isValid()) {
				console.log('correct unix');
			}
	}else{
		let date = moment(url);
			if (date.isValid()) {
				console.log('correct');
			}
	}
	
}


module.exports = isTimestamp;