
/*
 * GET users listing.
 */

exports.create = function(req, res){
	res.render('users');
}

exports.list = function(req, res){
  res.send("respond with a resource");
};