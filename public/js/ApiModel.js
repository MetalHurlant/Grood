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
        this._userId = id;
    }
    
    Model.prototype.getUserID = function() {
        return this._userId;
    };
    
    Model.prototype.buy = function() {        
        /*
        $.ajax({
            url: '',
            method: 'POST',
            data: {}
        })
        .done(response => this.trigger('bought', response));//*/
    };
    
    Model.prototype.sell = function() {
        /*
        $.ajax({
            url: '',
            method: 'POST',
            data: {}
        })
        .done(response => this.trigget('sold', response));//*/
        
    };
    
    Model.prototype.get = function() {
        /*
        $.ajax({
            url: '',
            method: 'GET'
        })
        .done(response => this.trigger('load:user', response));//*/        
    };
    
    Model.prototype.getAll = function() {
        /*
        $.ajax({
            url: '',
            method: 'GET'
        })
        .done(response => this.trigger('load:users', response));//*/
    };
    
    return Model;
});
