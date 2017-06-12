// app/models/medicalNotes.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Medical', {
    time: String,
    notes: String
});


