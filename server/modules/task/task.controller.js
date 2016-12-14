'use strict';

var Task = require('./task.schema');
var TaskController = {
	getAll: getAll,
	get: get,
	insert: insert,
	remove: remove
};

module.exports = TaskController;

//////////////////////////

// Get all tasks
function getAll(req, res) {
	Task.find({}, function(err, tasks) {
		if (err) {
			res.send(err);
		}
		res.json(tasks);
	});
}

// Get single task
function get(req, res) {
	Task.findOne({_id: req.params.id}, function(err, task) {
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
		Task.create(task, function(err, task) {
			if (err) {
				res.send(err);
			}
			res.json(task);
		});
	}
}

// Remove single task
function remove(req, res) {
	Task.remove({_id: req.params.id}, function(err, task) {
		if (err) {
			res.send(err);
		}
		res.json(task);
	});
}
