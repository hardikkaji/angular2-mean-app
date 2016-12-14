'use strict';

var category = require('./category.controller');

module.exports = function(router) {
	router.get('/categories', category.getAll);
	router.post('/category', category.insert);
};
