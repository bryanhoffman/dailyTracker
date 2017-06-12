// app/models/sleep.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Sleep', {
    startTime: String,
    active: Boolean,
    endTime: String,
    notes: String
});


