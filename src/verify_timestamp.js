'use strict';

const moment = require('moment')

function isTimestamp(url) {
	
	if (!isNaN(url)) {
			let date = moment.unix(url);
			if (date.isValid()) {
				let natural = date.format("dddd, MMMM Do YYYY");
				let data = {unix : url, natural : natural};
				
				return data;
			}else{
				let data = {unix: null, natural: null}
				return data;
			}
	}else{
		let date = moment(url);
			if (date.isValid()) {
				let unix = date.unix();
				let data = {unix : unix, natural : url};
				
				return data;
			}else{
				let data = {unix: null, natural: null}
				return data;
			}

	}
	
}


module.exports = isTimestamp;