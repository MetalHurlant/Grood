var http=require("http")

var Eolienne = function() {
	setInterval(this.sell.bind(this), 5000);
};



Eolienne.prototype.sell = function() {        
	console.log('sell request emitted');
	
	var options = {
		port: 8080,
		hostname: '192.168.0.31',
		method: 'GET',
		//protocol: 'http:',
		path: '/executeContract?clientName=farmer&function=add&amount=2',
	    timeout: 5000
	};
	
	http.get(options, function(res) {
		console.log(res);
	});
};
	
	




module.exports = Eolienne;
