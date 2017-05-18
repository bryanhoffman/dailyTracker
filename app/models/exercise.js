// app/models/exercise.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Exercise', {
    length: Number,
    time: String
});


