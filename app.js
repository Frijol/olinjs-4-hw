
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
<<<<<<< HEAD
=======
var mongoose = require('mongoose');
>>>>>>> 46ac99379ea4d59a633a44a7eb8b70146a6ecf66

var app = express();

// all environments
<<<<<<< HEAD
app.set('port', process.env.PORT || 3000);
=======
app.set('port', process.env.PORT || 8000);
>>>>>>> 46ac99379ea4d59a633a44a7eb8b70146a6ecf66
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
<<<<<<< HEAD
=======
app.use(express.cookieParser('your secret here'));
app.use(express.session());
>>>>>>> 46ac99379ea4d59a633a44a7eb8b70146a6ecf66
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

<<<<<<< HEAD
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/users/new', user.create)
=======
mongoose.connect(process.env.MONGOLAB_URI || 'localhost');

app.get('/', routes.index);
// app.get('/users', user.list);
// app.get('/users/new', user.new);
// app.post('/users/create', user.create);
// app.get('/users/:usr', user.usr);
>>>>>>> 46ac99379ea4d59a633a44a7eb8b70146a6ecf66

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
