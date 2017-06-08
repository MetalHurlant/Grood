define(['jquery', 'js/Observable'], function($, Observable) {
    
    var Controller = Observable.extend(function(view, model) {
        Observable.call(this);
        this._view = view;
        this._model = model;
        this.addListeners();
        this.render();
    });
    
    Controller.prototype.addListeners = function() {
        $(this.view).on('change', '.ip', this.ipHasChanged.bind(this));
    };
    
    Controller.prototype.render = function() {
        $(this.view+' .ip').val(this._model.getIP());
    };
    
    Controller.prototype.ipHasChanged = function() {
        var ip = $(this.view+' .ip').val();
        this._model.setIP(ip);
    };
    
    return Controller;
});
