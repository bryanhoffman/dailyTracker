// app/models/food.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Food', {
    description: String,
    time: String
});


