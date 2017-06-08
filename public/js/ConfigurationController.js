define(['jquery', 'js/Observable'], function($, Observable) {
    
    var Controller = Observable.extend(function(view, model) {
        Observable.call(this);
        this._view = view;
        this._model = model;
        this.addListeners();
        this.render();
	var ip = $(this._view+' .ip').val();
	if(undefined !== ip) { this.ipHasChanged(); }
    });
    
    Controller.prototype.addListeners = function() {
        $(this._view).on('change', '.ip', this.ipHasChanged.bind(this));
	this._model.on('change:ip', this.render, this);
    };
    
    Controller.prototype.render = function() {
        $(this.view+' .ip').val(this._model.getIP());
    };
    
    Controller.prototype.ipHasChanged = function() {
        var ip = $(this._view+' .ip').val();
	//console.log('config ctrl',ip);
        this._model.setIP(ip);
    };
    
    return Controller;
});
