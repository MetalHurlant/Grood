var http=require("http")

var Eolienne = function() {
	setInterval(this.sell.bind(this), 10000);
};



Eolienne.prototype.sell = function() {        
	console.log('sell request emitted');
	
	var options = {
		port: 8080,
		hostname: '192.168.0.11',
		method: 'GET',
		//protocol: 'http:',
		path: '/executeContract?clientName=farmer&function=add&amount=2',
	    timeout: 5000
	};
	
	http.get(options, function(res) {
		console.log(res.headers);
	});
};
	
	




module.exports = Eolienne;
