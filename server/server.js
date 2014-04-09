// NODE_ENV=development node server.js
// NODE_ENV=production node server.js


/**
 * Module dependencies.
 */

var express = require('express');

// WEB ROUTES
var routes = require('./routes');

// API ROUTES
// var example = require('./routes/example');

// INCLUDES
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');


/**
 * CONNECT TO MONGOOSE
 */
var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/budgetblox4';
mongoose.connect( mongoUri );
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('DB CONNECTION SUCCESSFUL!');
});


/**
 * START THE APP
 */
var app = express();

/**
 * SETUP ALL ENVIRONMENTS
 */
app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('cookiecalifragilisticexpialidocious'));
app.use(express.session());
app.use(app.router);


/**
 * OPTIONS FOR DEVELOPMENT / PRODUCTION
 */
if ('development' == app.get('env')) {
	console.log( __dirname + '/../app/dev' );
	app.use(require('less-middleware')( path.join(__dirname, '../app/dev') ));
	app.use(express.static(path.join(__dirname, '../app/dev')));

  app.use(express.errorHandler());
}
else if ('production' == app.get('env')) {
	console.log( __dirname + '/../app/dist' );
	app.use(express.static(path.join(__dirname, '../../app/dist')));
}
else {
	console.log('ERROR: Production or Development?');
}


/**
 * LIST OUT ALL THE ROUTES AND ASSIGN ROUTE FILES
 */
app.get('/', routes.index);

// example
// app.get('/api/example', example.list);
// app.get('/api/example/:id', example.get);
// app.post('/api/example', example.create);
// app.put('/api/example/:id', example.update);
// app.delete('/api/example/:id', example.delete);
// app.delete('/api/example', example.deleteAll);


/**
 * CREATE THE SERVER AND LISTEN TO THE PORT
 */
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});