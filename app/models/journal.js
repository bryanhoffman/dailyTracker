// app/models/journal.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Journal', {
    entry: String,
    mood: String,
    time: String
});


