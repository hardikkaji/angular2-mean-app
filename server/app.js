'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = 3000;

// Express application
var app = express();

// loading datatbase instance
var mongoose = require('./config/mongo');

/* START Static folder for angular2 app */

// for serving node_modules/*
app.use(express.static('./client'));
// for serving compiled *.js files
app.use(express.static(path.join('./client/build')));

/* END Static folder for angular2 app */

// for loading static HTML pages eg: index.html
app.use(express.static('./views'));

// Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// loading all RESTful services routes to serve application
app.use('/api', require('./routes'));

// fix angular2 reload issue
// see this video for more info: https://www.youtube.com/watch?v=ANfplcxnl78
app.use(function(req, res) {
	res.sendFile('./views/index.html', {root: './'});
});

// listening port and logging things
app.listen(port, function() {
	console.log('Server started on port: ' + port);
});
