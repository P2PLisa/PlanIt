
module.exports = function(app) {
var express = require('express');
var router = express.Router();
//var express = require('express');
router.get('/', function(req, res, next) {
	res.send("meow");
});
router.get('/:username', function(req, res, next) {
	res.send("meow");
});
}
