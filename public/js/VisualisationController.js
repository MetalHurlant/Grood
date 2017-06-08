define(['jquery', 'js/Observable'], function($, Observable) {
    
    var Controller = Observable.extend(function(view, model) {
        Observable.call(this);
        this._view = view;
        this._model = model; 
        this._model.on('bought', this.reload, this);
        this._model.on('sold', this.reload, this);
        this._model.on('load:users', this.render, this);
    });
    
    Controller.prototype.reload = function() {
        // Requete pour récupérer les données     
        //this._model.getAll();
    }
    Controller.prototype.render = function(data) {
        // Rafraichissement des données
    };
    
    return Controller;
});
