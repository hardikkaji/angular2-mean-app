var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 3000;

var app = express();

// Static folder for angular2 app

// for serving node_modules/*
app.use(express.static(path.join(__dirname, 'client')));
// for serving compiled *.js files
app.use(express.static(path.join(__dirname, 'client/build')));

// for loading static HTML pages eg: index.html
app.use(express.static(path.join(__dirname, 'views')));

// Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', tasks);

app.listen(port, function() {
	console.log('Server started on port: ' + port);
});
