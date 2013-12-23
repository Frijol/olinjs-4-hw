//Schema for twits
User = require('../models/user.js');
var mongoose = require('mongoose');

var twitSchema = mongoose.Schema({
	// _creator: User,
	message: String
});

var Twit = mongoose.model('Twit', twitSchema);

module.exports = Twit;