// app/models/meditation.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Meditation', {
    startTime: String,
    active: Boolean,
    endTime: String,
    notes: String
});


