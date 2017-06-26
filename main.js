process.title = 'gridcommunauty-web-client';
var express = require('express');
var webServer = express();
//var fakeapi = require('./fakeapi.js')
var Eolienne = require('./eolienne.js')


var port     = process.env.PORT || 3000;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

// configuration DB===============================================================
mongoose.connect(configDB.url); // connect to our database
require('./config/passport')(passport); // pass passport for configuration

// set up our express application
webServer.use(morgan('dev')); // log every request to the console
webServer.use(cookieParser()); // read cookies (needed for auth)
webServer.use(bodyParser.json()); // get information from html forms
webServer.use(bodyParser.urlencoded({ extended: true }));

webServer.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
webServer.use(session({
    secret: 'ilovescotchscotchyscotchscotch', // session secret
    resave: true,
    saveUninitialized: true
}));
webServer.use(passport.initialize());
webServer.use(passport.session()); // persistent login sessions
webServer.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(webServer, passport); // load our routes and pass in our app and fully configured passport



webServer.use(express.static(__dirname+'/public/'));
//webServer.use('/api', fakeapi);
//var eolienne = new Eolienne();

webServer.listen(port, function() { console.log('Example app listening on port 3000!'); });
