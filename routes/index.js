var express= require('express');
var router = express.Router();
var Images= require('../models/task')
router.get('/', function(req, res, next) {
	res.send('Express...')
});
router.get('/images', function(req, res, next) {
	res.writeHead(302, {
	  'Location': '/Assignment7.html'
	});
	res.end();
});
module.exports = router;
