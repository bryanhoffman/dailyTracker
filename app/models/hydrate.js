// app/models/hydrate.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Hydrate', {
    type: String,
    time: String
});

