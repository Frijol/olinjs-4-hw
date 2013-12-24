
/*
 * GET home page.
 */

 Twit = require('../models/twit.js');
 var twits = Twit.find({}, function (err, docs) {
 	if (err) throw err;
 })

exports.index = function(req, res){
	// setInterval(function () {
	// 	$.get( "index.jade", function( data ) {
	// 	  alert( "Load was performed." )
	// 	});
	// }, 2000);
	res.render('index');
}

/*
use setinterval to check for new ones every 2000 (no refresh)
*/
