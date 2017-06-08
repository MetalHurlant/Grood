var http=require("http")

var Eolienne = function() {
	setInterval(this.sell.bind(this), 5000);
};



Eolienne.prototype.sell = function() {        
	var url = 'http://192.168.0.31:8080/executeContract';
	console.log('sell request emitted', url);
	
	
	const options = {
		port: 8080,
		hostname: '192.168.0.31',
		method: 'GET',
		protocol: 'http:',
		path: '/executeContract?clientname=farmer&function=add&amount=2',
	    timeout: 5000
	};
	
	http.request(options, function(res) {
		console.log(res);
	});
};
	
	




module.exports = Eolienne;