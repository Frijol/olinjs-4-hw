/*
* GET home page.
*/

Twit = require('../models/twit.js');
var alltwits;

var twits = Twit.find({}, function (err, docs) {
	if (err) throw err;
	alltwits = docs
})

exports.index = function(req, res){
	res.render('index', {docs: alltwits});
}