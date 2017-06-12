// app/models/urination.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Urination', {
    time: String,
    notes: String
});


