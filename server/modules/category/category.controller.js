'use strict';

var Category = require('./category.schema');
var CategoryController = {
	getAll: getAll,
	insert: insert
};

module.exports = CategoryController;

//////////////////////////

// Get all categories
function getAll(req, res) {
	Category.find({}, function(err, categories) {
		if (err) {
			res.send(err);
		}
		res.json(categories);
	});
}

// Insert new Category
function insert(req, res) {
	var category = req.body;
	if (!category.name || !category.description) {
		res.status(400);
		res.json({
			"error": "Bad data"
		});
	} else {
		Category.create(category, function(err, category) {
			if (err) {
				res.send(err);
			}
			res.json(category);
		});
	}
}
