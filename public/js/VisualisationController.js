define(['jquery', 'js/Observable'], function($, Observable) {
    
    var Controller = Observable.extend(function(view, model) {
        Observable.call(this);
        this._view = view;
        this._model = model; 
        this._model.on('bought', this.reload, this);
        this._model.on('sold', this.reload, this);
        this._model.on('load:user', this.render, this);
    });
    
    Controller.prototype.reload = function() {
        // Requete pour récupérer les données     
        this._model.get();
    }
    Controller.prototype.render = function(event, user, sold) {
	console.log(user, sold);
	$(this._view+' .display-id').html(user);
        $(this._view+' .display-sold').html(sold);
        // Rafraichissement des données
    };
    
    return Controller;
});
