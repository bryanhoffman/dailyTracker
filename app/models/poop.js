// app/models/poop.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Poop', {
    time: String,
    notes: String
});


