exports.create = function(req, res) {
	if (req.session.user) {
		var newtwit = new Twit({message: req.body.newtwit, username: req.session.user});
		newtwit.save(function (err) {
			if (err) throw err;
			res.redirect('/')
		});
	} else {
		res.redirect('/users/new')
	}
}

exports.getTweets = function (req, res) {
	var twits = Twit.find({}, function (err, docs) {
		if (err) throw err;
		alltwits = docs.reverse()
		res.render('_twits', {docs: alltwits});
	});
}