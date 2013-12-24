//Schema for twits
var mongoose = require('mongoose');

var twitSchema = mongoose.Schema({
	username: String,
	message: String
});

var Twit = mongoose.model('Twit', twitSchema);

module.exports = Twit;