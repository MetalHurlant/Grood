define(['jquery', 'js/Observable'], function($, Observable) {
    
    var Controller = Observable.extend(function(view, model) {
        Observable.call(this);
        this._view = view;
        this._model = model;
        this.addListeners();
    });
    
    Controller.prototype.addListeners = function() {
        $(this._view).on('click', '.buy', this.buyAction.bind(this));
        $(this._view).on('click', '.sell', this.sellAction.bind(this));
    };
    
    Controller.prototype.render = function() {
        
    };
    
    Controller.prototype.getUserID = function() {
        return $(this._view+' .user-id').val();
    };
    
    Controller.prototype.buyAction = function() {
        throw new Error('buyAction is not implemented yet');
        var userID = this.getUserID();
        // Faire la requête pour acheter de l'énergie
        //this._model.buy(() => this.trigget('buy', userID));
    };
    
    Controller.prototype.sellAction = function() {
        throw new Error('sellAction is not implemented yet');
        var userID = this.getUserID();
        // Faire la requête pour vendre de l'énergie
        //this._model.sell(() => this.trigget('sell', userID));
    };
    
    return Controller;
});
