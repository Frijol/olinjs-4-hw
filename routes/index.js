
/*
 * GET home page.
 */
<<<<<<< HEAD

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
=======
 Twit = require('../models/twit.js');
 var twits = Twit.find({}, function (err, docs) {
 	if (err) throw err;
 })

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/*
use setinterval to check for new ones every 2000 (no refresh)
*/
>>>>>>> 46ac99379ea4d59a633a44a7eb8b70146a6ecf66
