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


//send client index.html file

app.get('*', function(req,res) {
    res.sendfile('./public/index.html');
});
