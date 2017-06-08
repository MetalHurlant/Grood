var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (request, response, next) {
  console.log('Time: ', Date.now());
  next();
})

router.get('/', function(request, response) {
	response.send({
		'add': {
			method: 'GET'
		},
		'redeem': {
			method: 'GET'
		},
		'view': {
			method: 'GET'
		}
	});
});

router.get('/add', function(request, response) {
	response.send({
		log: 'add not implemented yet'
	});
});

router.get('/redeem', function(request, response) {
	response.send({
		log: 'redeem not implemented yet'
	});
});

router.get('/view', function(request, response) {
	response.send({
		log: 'view not implemented yet'
	});
});

module.exports = router
