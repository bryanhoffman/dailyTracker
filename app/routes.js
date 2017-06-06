// app/routes.js
//RESTful API

//load models

var Hydrate = require('./models/hydrate');
var Exercise = require('./models/exercise');
var Food = require('./models/food');
var Cig = require('./models/cig');
var Journal = require('./models/journal');

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

    app.delete('/api/hydrate/:hydrate_id', function(req, res) {
        Hydrate.remove({
            _id : req.params.hydrate_id
        }, function(err, hydrate) {
            if (err) 
                res.send(err);
        
            Hydrate.find(function(err, hydrate) {
                if(err)
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

    app.delete('/api/exercise/:exercise_id', function(req, res) {
        Exercise.remove({
            _id : req.params.exercise_id
        }, function(err, exercise) {
            if (err)
                res.send(err);

            Exercise.find(function(err, exercise) {
                if(err)
                    res.send(err)
                        
                res.json(exercise);
            });
        });
    });

    //Food routes
    // get all drinks had
    app.get('/api/food', function(req, res) {
        Food.find(function(err, food){
            if(err)
                res.send(err)

            res.json(food); //return all drinks had
        });
    });

    //create new food instance

    app.post('/api/food', function(req, res) {
        Food.create({
            description : req.body.description,
            time : Date()
        }, function(err, food) {
            if (err)
                res.send(err);

            Food.find(function(err, food) {
                if (err)
                    res.send(err)
                res.json(food);
            });
        });
    });

    app.delete('/api/food/:food_id', function(req, res) {
        Food.remove({
            _id : req.params.food_id
        }, function(err, food) {
            if (err) 
                res.send(err);
        
            Food.find(function(err, food) {
                if(err)
                    res.send(err)

                res.json(food);
            });
        });
    });

    //Cig routes
    // get all drinks had
    app.get('/api/cig', function(req, res) {
        Cig.find(function(err, cig){
            if(err)
                res.send(err)

            res.json(cig); //return all drinks had
        });
    });

    //create new cigarette instance

    app.post('/api/cig', function(req, res) {
        Cig.create({
            time : Date()
        }, function(err, cig) {
            if (err)
                res.send(err);

            Cig.find(function(err, cig) {
                if (err)
                    res.send(err)
                res.json(cig);
            });
        });
    });

    app.delete('/api/cig/:cig_id', function(req, res) {
        Cig.remove({
            _id : req.params.cig_id
        }, function(err, cig) {
            if (err) 
                res.send(err);
        
            Cig.find(function(err, cig) {
                if(err)
                    res.send(err)

                res.json(cig);
            });
        });
    });

    //Journal routes
    // get all drinks had
    app.get('/api/journal', function(req, res) {
        Journal.find(function(err, journal){
            if(err)
                res.send(err)

            res.json(journal); //return all drinks had
        });
    });

    //create new journal entry

    app.post('/api/journal', function(req, res) {
        Journal.create({
            time : Date()
        }, function(err, journal) {
            if (err)
                res.send(err);

            Journal.find(function(err, journal) {
                if (err)
                    res.send(err)
                res.json(journal);
            });
        });
    });

    app.delete('/api/journal/:journal_id', function(req, res) {
        Journal.remove({
            _id : req.params.journal_id
        }, function(err, journal) {
            if (err) 
                res.send(err);
        
            Journal.find(function(err, journal) {
                if(err)
                    res.send(err)

                res.json(journal);
            });
        });
    });






	//send client index.html file
	app.get('*', function(req,res) {
    	res.sendfile('./public/index.html');
	});


}
