'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
	title: String,
	isDone: Boolean
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;
