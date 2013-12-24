
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
  res.render('../views/newuser.jade');
}

exports.create = function(req, res){
	//check if user already exists
	var userExists = false;
	var users = User.find({}, function (err, docs) {
		if (err) throw err;
		for (var i in docs) {
			if (docs[i].name == req.body.name) {
				var userExists = true;
			}
		}
		//create if necessary, redir to their page
		if (userExists) {
			res.redirect('/users/:' + req.body.name)
		} else {
			var newuser = new User(req.body);
			newuser.save(function (err) {
				if (err) throw err;
				res.redirect('/users/:' + req.body.name)
			});
		}
	});
}

exports.usr = function(req, res) {
	var usr = User.find({name: req.route.params.usr.split(':')[1]}, function (err, docs) {
		if (err) throw err;
		res.send('user' + req.body);
	});
}
