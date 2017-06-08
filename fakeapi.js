var express = require('express');
var router = express.Router();

var model = {};

// middleware that is specific to this router
router.use(function timeLog (request, response, next) {
  console.log('Time: ', Date.now());
  next();
})

router.get('/', function(request, response) {
	response.send({
		'add': {
			method: 'GET',
			'query-parameters': {
				id: 'user id',
				diff: 'add credits to user acount'
			}
		},
		'redeem': {
			method: 'GET',
                        'query-parameters': {
                                id: 'user id',
                                diff: 'redeem credits to user acount'
                        }

		},
		'view': {
			method: 'GET',
                        'query-parameters': {
                                id: 'user id',
                        }

		}
	});
});

router.get('/add', function(request, response) {
	var id = request.query.id;
	var diff = request.query.diff;
	if(undefined == model[id]) {
		model[id] = { solde: 0 };
	}
	model[id].solde += parseInt(diff);
	response.send({
		id: id,
		solde: model[id].solde
	});
});

router.get('/redeem', function(request, response) {
        var id = request.query.id;
        var diff = request.query.diff;
        if(undefined == model[id]) {
                model[id] = { solde: 0 };
        }
        model[id].solde -= parseInt(diff);
        response.send({
                id: id,
                solde: model[id].solde
        });
});

router.get('/view', function(request, response) {
        var id = request.query.id;
        if(undefined == model[id]) {
                model[id] = { solde: 0 };
        }
        response.send({
                id: id,
                solde: model[id].solde
        });
});

module.exports = router
