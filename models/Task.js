var mgs = require('mongoose');

var sch = new mgs.Schema({
	'name'			: String,
	'description'	: String,
	'text'			: String,
	'projectId'		: String,
	'users'			: Array,
	'progress'		: Number,
	'files'			: Array,
	'status'		: Number,
	'started'		: Date,
	'created'		: { type: Date, default: Date.now},
	'updated'		: Date,
	'deleted'		: Date
});

exports.Task = mgs.model('Task', sch);