
/*
 * GET users listing.
 */

<<<<<<< HEAD
exports.create = function(req, res){
	res.render('users');
}

exports.list = function(req, res){
  res.send("respond with a resource");
};
=======
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
>>>>>>> 46ac99379ea4d59a633a44a7eb8b70146a6ecf66
