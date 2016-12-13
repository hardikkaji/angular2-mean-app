'use strict';

var task = require('./task.controller');

module.exports = function(router) {
	router.get('/tasks', task.getAll);
	router.get('/tasks/:id', task.get);
	router.post('/tasks', task.insert);
	router.delete('/tasks/:id', task.remove);
};
