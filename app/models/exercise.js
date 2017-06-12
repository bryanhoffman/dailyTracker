// app/models/exercise.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Exercise', {
    startTime: String,
	active: Boolean,
	endTime: String,    
	miles: Number,
	notes: String
});


