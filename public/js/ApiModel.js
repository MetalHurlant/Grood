define(['jquery', 'js/Observable'], function($, Observable) {
    
    var Model = Observable.extend(function() {
        Observable.call(this);
        this._ip = '127.0.0.1';
    });
    
    Model.prototype.setIP = function(ip) {
        this._ip = ip;
        this.trigger('change:ip', ip);
    };
    
    Model.prototype.getIP = function() {
        return this._ip;
    }
	
    Model.prototype.setUserID = function(id) {
	console.log("UserID set in Model");
        this._userId = id;
    }
    
    Model.prototype.getUserID = function() {
        return this._userId;
    };
    
    Model.prototype.buy = function(amount, userID) {        
	var url = 'http://'+this.getIP()+'/executeContract';
	console.log('buy request emitted', url);
	console.log('amount', amount);
        $.ajax({
            url: url,
            method: 'GET',
            data: {
		clientName: userID,
		function: 'redeem',
		amount: amount
	    },
	    timeout: 5000
        })
        .done(response => {
		this.trigger('bought', response); 
		console.log('done buy', response);
	})
	.fail(response => console.log('fail buy', response) )
	//.always(response => console.log('always', response) )
	;//*/
    };
    
    Model.prototype.sell = function(amount, userID) {
        var url = 'http://'+this.getIP()+'/executeContract';
        console.log('sold request emitted', url);
	console.log('amount', amount);
	console.log('userID', userID);
        //*
        $.ajax({
            url: url,
            method: 'GET',
            data: {
                clientName: userID,
                function: 'add',
                amount: amount
            },
            timeout: 5000
        })
        .done(response => this.trigger('sold', response));//*/
        
    };
    
    Model.prototype.get = function(clientName) {
        var url = 'http://'+this.getIP()+'/query';
        console.log('query request emitted', url);
        //*
        $.ajax({
            url: url,
            method: 'GET',
	    data: {
		clientName: clientName
	    }, 
	    timeout: 5000
        })
        .done(response => {
		console.log('done query', response);
		this.trigger('load:user', clientName, response.message);
	})
	.fail(response => console.log('fail query', response))
	;//*/        
    };
    
    return Model;
});
