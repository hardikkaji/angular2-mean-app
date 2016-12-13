'use strict';

var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/test', ['tasks']);
var task = require('./task.controller');

module.exports = function(router) {
	router.get('/tasks', task.getAll);
	router.get('/tasks/:id', task.get);
	router.post('/tasks', task.insert);
	router.delete('/tasks/:id', task.remove);
	router.put('/tasks/:id', task.update);
};
