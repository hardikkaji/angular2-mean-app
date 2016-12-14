'use strict';

var router = require('express').Router();

// Application routes configurations
var routes = [
	'./modules/task/task.route',
	'./modules/category/category.route'
];

// Itertating routes and add to Application
for (var index in routes) {
	if (index) {
		// loading routes and sending router object
		require(routes[index])(router);
	}
}

module.exports = router;
