// app/routes.js
//RESTful API

//load models

var Hydrate = require('./models/hydrate');
var Exercise = require('./models/exercise');

//expose routes with module.exports

module.exports = function(app) {

    //Hydrate routes
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

    //Exercise routes
    // get exercise history
    app.get('/api/exercise', function(req, res) {
        Exercise.find(function(err, exercise){
            if(err)
                res.send(err)

            res.json(exercise); //return exercise history
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


}
