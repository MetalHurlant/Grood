define(['jquery', 'js/Observable'], function($, Observable) {
    
    var Controller = Observable.extend(function(view, model) {
        Observable.call(this);
        this._view = view;
        this._model = model;
        this.addListeners();        
	var id = this.getUserID();
        //if(undefined !== id) { this.changeUserIDAction();}
	this.changeUserIDAction();
	setInterval(this.sellAction.bind(this), 10000);
	setInterval(this._model.get(this._model.getUserID()), 10000)
        this._model.on('bought', this.reload, this);
        this._model.on('sold', this.reload, this);
        this._model.on('load:user', this.render, this);

    });
    
    Controller.prototype.addListeners = function() {
        $(this._view).on('click', '.buy', this.buyAction.bind(this));
        $(this._view).on('click', '.sell', this.sellAction.bind(this));
	$(this._view).on('change', '.user-id', this.changeUserIDAction.bind(this));
	$(this._view).on('change', '#prod1', this.changeProdAction.bind(this));
	$(this._view).on('change', '#prod2', this.changeProdAction.bind(this));
	$(this._view).on('change', '#prod3', this.changeProdAction.bind(this));
	$(this._view).on('change', '#cbox1', this.changeProdAction.bind(this));
	$(this._view).on('change', '#cbox2', this.changeProdAction.bind(this));
	$(this._view).on('change', '#cbox3', this.changeProdAction.bind(this));
    };
    
    Controller.prototype.reload = function() {
        // Requete pour récupérer les données
	var clientName = this.getUserID();
	console.log("clientName",clientName);
        this._model.get(clientName);
    }
    Controller.prototype.render = function(event, user, sold) {
	console.log(user, sold);
	$(this._view+' .display-id').html(user);
        $(this._view+' .display-sold').html(sold);
        // Rafraichissement des données
    };
    
    Controller.prototype.getUserID = function() {
	var userID = document.getElementById('user-id');
        return userID.innerHTML;
    };
    
    Controller.prototype.getAmount = function() {
        return $(this._view+' input[name=amount]').val();
    };

    Controller.prototype.getSellAmount = function() {
	var prodtot = document.getElementById('prodtot');
        return prodtot.innerHTML;
    };

    Controller.prototype.changeUserIDAction = function() {
	var userID = this.getUserID();
	this._model.setUserID(userID);
    };

    Controller.prototype.changeProdAction = function() {
	//throw new Error('changeProdAction is not implemented yet');
	//get values
	var prod1 = $(this._view+' #prod1').val();
	var prod2 = $(this._view+' #prod2').val();
	var prod3 = $(this._view+' #prod3').val();
	var cbox1 = eval("document.forms.prodtab.cbox1.checked == true");
	var cbox2 = eval("document.forms.prodtab.cbox2.checked == true");
	var cbox3 = eval("document.forms.prodtab.cbox3.checked == true");
	var totalProd = cbox1*prod1+cbox2*prod2-cbox3*prod3;
	console.log('totprod : '+totalProd);
	//set values
	$(this._view+' #prodaff1').html(prod1*cbox1);
	$(this._view+' #prodaff2').html(prod2*cbox2);
	$(this._view+' #prodaff3').html(-prod3*cbox3);
	$(this._view+' #prodtot').html(totalProd);
	this.trigger('ProdChange');
	
    };
    
    Controller.prototype.buyAction = function() {
        //throw new Error('buyAction is not implemented yet');
        var userID = this.getUserID();
	var amount = this.getAmount();
        // Faire la requête pour acheter de l'énergie
        this._model.buy(amount,userID);
    };
    
    Controller.prototype.sellAction = function() {
        //throw new Error('sellAction is not implemented yet');
        var userID = this.getUserID();
	var amount = this.getSellAmount();
        // Faire la requête pour vendre de l'énergie
        this._model.sell(amount,userID);
    };
    
    return Controller;
});
