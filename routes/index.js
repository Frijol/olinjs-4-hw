
/*
 * GET home page.
 */

 Twit = require('../models/twit.js');
 var twits = Twit.find({}, function (err, docs) {
 	if (err) throw err;
 })

exports.index = function(req, res){
	res.render('index');
}