var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//config

mongoose.connect('mongodb://localhost/tracker');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json' }));
app.use(methodOverride());

//models
var Hydrate = mongoose.model('Hydrate', {
    type: String,
    time: String
});

var Exercise = mongoose.model('Exercise', {
    length: Number,
    time: String
});

//start server
app.listen(8080);
console.log('Server is running on port 8080');

//RESTful API

// get all drinks had
app.get('/api/hydrate', function(req, res) {
	Hydrate.find(function(err, hydrate){
		if(err)
			res.send(err)

        res.json(hydrate); //return all drinks had
    });
});

// get exercise history
//I'm assuming I need to figure out models or best practices here
app.get('/api/exercise', function(req, res) {
    Exercise.find(function(err, exercise){
        if(err)
            res.send(err)

        res.json(exercise); //return exercise history
    });
});


//create new hydration instance

app.post('/api/hydrate', function(req, res) {
    Hydrate.create({
        type : req.body.type,
        time : Date()
    }, function(err, hydrate) {
        if (err)
            res.send(err);

        Hydrate.find(function(err, hydrate) {
            if (err)
                res.send(err)
            res.json(hydrate);
        });
    });
});

//add exercise

app.post('/api/exercise', function(req, res) {
    Exercise.create({
        length : req.body.length,
        time : Date()
    }, function(err, exercise) {
        if (err)
            res.send(err);

        Hydrate.find(function(err, exercise) {
            if (err)
                res.send(err)
            res.json(exercise);
        });
    });
});



//send client index.html file

app.get('*', function(req,res) {
    res.sendfile('./public/index.html');
});
