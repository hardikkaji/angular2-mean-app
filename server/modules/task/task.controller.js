'use strict';

var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/test', ['tasks']);

module.exports = {
	getAll: getAll,
	get: get,
	insert: insert,
	remove: remove,
	update: update
};

//////////////////////////

// Get all tasks
function getAll(req, res) {
	db.tasks.find(function(err, tasks) {
		if (err) {
			res.send(err);
		}
		res.json(tasks);
	});
}

// Get single task
function get(req, res) {
	db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task) {
		if (err) {
			res.send(err);
		}
		res.json(task);
	});
}

// Insert new task
function insert(req, res) {
	var task =  req.body;
	if (!task.title || !(task.isDone + '')) {
		res.status(400);
		res.json({
			"error": "Bad Data"
		});
	} else {
		db.tasks.save(task, function(err, task) {
			if (err) {
				res.send(err);
			}
			res.json(task);
		});
	}
}

// Remove single task
function remove(req, res) {
	db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task) {
		if (err) {
			res.send(err);
		}
		res.json(task);
	});
}

// Update task
function update(req, res, next) {
	var task = req.body;
	var updTask = {};

	if (task.isDone) {
		updTask.isDone = task.isDone;
	}

	if (task.title) {
		updTask.isDone = task.title;
	}

	if (!updTask) {
		res.status(400);
		res.json({
			"error": "Bad Data"
		});
	} else {
		db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updTask, {}, function(err, task) {
			if (err) {
				res.send(err);
			}
			res.json(task);
		});
	}
}
