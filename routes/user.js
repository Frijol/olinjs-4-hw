
/*
 * GET users listing.
 */

User = require('../models/user.js');

exports.list = function(req, res){
  var users = User.find({}, function (err, docs) {
  	if (err) throw err;
  	res.send(docs);
  })
};

exports.new = function(req, res){
  res.render('../views/newuser.jade', {});
}

exports.create = function(req, res){
	console.log(req.body);
	//check if user already exists
	var userExists = false;
	var users = User.find({}, function (err, docs) {
		if (err) throw err;
		for (var i in docs) {
			if (docs[i].name == req.body.name) {
				console.log('hi')
				var userExists = true;
			}
		}
		if (userExists) {
			res.redirect('/:' + req.body.name)//probably wrong
		} else {
			var newuser = new User(req.body);
			newuser.save(function (err) {
				if (err) throw err;
				res.redirect('/:' + req.body.name)//also probably wrong
			});
		}
	});
}

exports.usr = function(req, res) {
	res.redirect('/')
	// var usr = User.find({name: req.params.name.split(':')[1] }), function (err, docs) {
	// 	if (err) throw err;
	// 	res.send('user' + req.body);
	// }
}