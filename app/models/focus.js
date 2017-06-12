// app/models/focus.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Focus', {
    theFocus: String,
    active: Boolean,
    startTime: String,
    endTime: String,
    notes: String
});


