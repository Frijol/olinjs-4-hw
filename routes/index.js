Twit = require('../models/twit.js');

exports.index = function(req, res){
	var twits = Twit.find({}, function (err, docs) {
		if (err) throw err;
		alltwits = docs.reverse()
		res.render('index', {docs: alltwits});
	});
}