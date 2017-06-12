// app/routes.js
//RESTful API

//load models

var Hydrate = require('./models/hydrate');
var Exercise = require('./models/exercise');
var Food = require('./models/food');
var Cig = require('./models/cig');
var Journal = require('./models/journal');
var Meditation = require('./models/meditation');
var Focus = require('./models/focus');
var Urination = require('./models/urination');
var Poop = require('./models/poop');
var Medical = require('./models/medicalNotes');
var Sleep = require('./models/sleep');

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
    app.get('/api/exercise', function(req, res) {
        Exercise.find(function(err, exercise){
            if(err)
                res.send(err)

            res.json(exercise);
        });
    });

    app.post('/api/exerciseStart', function(req, res) {
        Exercise.create({
        startTime : Date(),
	    active : true
        }, function(err, exercise) {
            if (err)
                res.send(err);

            Exercise.find(function(err, exercise) {
                if (err)
                    res.send(err)
                res.json(exercise);
            });
        });
    });

    app.post('/api/exerciseStop/:exercise_id', function(req, res) {
        Exercise.findByIdAndUpdate(req.params.exercise_id, {
	    endTime : Date(),
	    miles : req.body.miles,
	    notes : req.body.notes,
	    active : false
        }, function(err, exercise) {
            if (err)
                res.send(err);

            Exercise.find(function(err, exercise) {
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
	        entry: req.body.entry,
		mood: req.body.mood,
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

    //Meditation routes
    app.get('/api/meditation', function(req, res) {
        Meditation.find(function(err, meditation){
            if(err)
                res.send(err)

            res.json(meditation);
        });
    });

    app.post('/api/meditationStart', function(req, res) {
        Meditation.create({
        startTime : Date(),
	    active : true
        }, function(err, meditation) {
            if (err)
                res.send(err);

            Meditation.find(function(err, meditation) {
                if (err)
                    res.send(err)
                res.json(meditation);
            });
        });
    });

    app.post('/api/meditationStop/:meditation_id', function(req, res) {
        Meditation.findByIdAndUpdate(req.params.meditation_id, {
	    endTime : Date(),
	    notes : req.body.notes,
	    active : false
        }, function(err, meditation) {
            if (err)
                res.send(err);

            Meditation.find(function(err, meditation) {
                if (err)
                    res.send(err)
                res.json(meditation);
            });
        });
    });


    app.delete('/api/meditation/:meditation_id', function(req, res) {
        Meditation.remove({
            _id : req.params.meditation_id
        }, function(err, meditation) {
            if (err) 
                res.send(err);
        
            Meditation.find(function(err, meditation) {
                if(err)
                    res.send(err)

                res.json(meditation);
            });
        });
    });


	
	//Urination
	   
    app.get('/api/urination', function(req, res) {
        Urination.find(function(err, urination){
            if(err)
                res.send(err)

            res.json(urination); 
        });
    });


    app.post('/api/urination', function(req, res) {
        Urination.create({
	        notes: req.body.notes,
            	time : Date()
        }, function(err, urination) {
            if (err)
                res.send(err);

            Urination.find(function(err, urination) {
                if (err)
                    res.send(err)
                res.json(urination);
            });
        });
    });

    app.delete('/api/urination/:urination_id', function(req, res) {
        Urination.remove({
            _id : req.params.urination_id
        }, function(err, urination) {
            if (err) 
                res.send(err);
        
            Urination.find(function(err, urination) {
                if(err)
                    res.send(err)

                res.json(urination);
            });
        });
    });

	//Poop routes

    app.get('/api/poop', function(req, res) {
        Poop.find(function(err, poop){
            if(err)
                res.send(err)

            res.json(poop); 
        });
    });


    app.post('/api/poop', function(req, res) {
        Poop.create({
	        notes: req.body.notes,
            	time : Date()
        }, function(err, poop) {
            if (err)
                res.send(err);

            Poop.find(function(err, poop) {
                if (err)
                    res.send(err)
                res.json(poop);
            });
        });
    });

    app.delete('/api/poop/:poop_id', function(req, res) {
        Poop.remove({
            _id : req.params.poop_id
        }, function(err, poop) {
            if (err) 
                res.send(err);
        
            Poop.find(function(err, poop) {
                if(err)
                    res.send(err)

                res.json(poop);
            });
        });
    });

	//Medical Journal

    app.get('/api/medical', function(req, res) {
        Medical.find(function(err, medical){
            if(err)
                res.send(err)

            res.json(medical); 
        });
    });


    app.post('/api/medical', function(req, res) {
        Medical.create({
	        notes: req.body.notes,
            	time : Date()
        }, function(err, medical) {
            if (err)
                res.send(err);

            Medical.find(function(err, medical) {
                if (err)
                    res.send(err)
                res.json(medical);
            });
        });
    });

    app.delete('/api/medical/:medical_id', function(req, res) {
        Medical.remove({
            _id : req.params.medical_id
        }, function(err, medical) {
            if (err) 
                res.send(err);
        
            Medical.find(function(err, medical) {
                if(err)
                    res.send(err)

                res.json(medical);
            });
        });
    });

    //Focus routes
    app.get('/api/focus', function(req, res) {
        Focus.find(function(err, focus){
            if(err)
                res.send(err)

            res.json(focus);
        });
    });

    app.post('/api/focusStart', function(req, res) {
        Focus.create({
	theFocus : req.body.theFocus,
        startTime : Date(),
	    active : true
        }, function(err, focus) {
            if (err)
                res.send(err);

            Focus.find(function(err, focus) {
                if (err)
                    res.send(err)
                res.json(focus);
            });
        });
    });

    app.post('/api/focusStop/:focus_id', function(req, res) {
        Focus.findByIdAndUpdate(req.params.focus_id, {
	    endTime : Date(),
	    notes : req.body.notes,
	    active : false
        }, function(err, focus) {
            if (err)
                res.send(err);

            Focus.find(function(err, focus) {
                if (err)
                    res.send(err)
                res.json(focus);
            });
        });
    });


    app.delete('/api/focus/:focus_id', function(req, res) {
        Focus.remove({
            _id : req.params.focus_id
        }, function(err, focus) {
            if (err) 
                res.send(err);
        
            Focus.find(function(err, focus) {
                if(err)
                    res.send(err)

                res.json(focus);
            });
        });
    });

    //Sleep routes
    app.get('/api/sleep', function(req, res) {
        Sleep.find(function(err, sleep){
            if(err)
                res.send(err)

            res.json(sleep);
        });
    });

    app.post('/api/sleepStart', function(req, res) {
        Sleep.create({
        startTime : Date(),
	    active : true
        }, function(err, sleep) {
            if (err)
                res.send(err);

            Sleep.find(function(err, sleep) {
                if (err)
                    res.send(err)
                res.json(sleep);
            });
        });
    });

    app.post('/api/sleepStop/:sleep_id', function(req, res) {
        Sleep.findByIdAndUpdate(req.params.sleep_id, {
	    endTime : Date(),
	    notes : req.body.notes,
	    active : false
        }, function(err, sleep) {
            if (err)
                res.send(err);

            Sleep.find(function(err, sleep) {
                if (err)
                    res.send(err)
                res.json(sleep);
            });
        });
    });


    app.delete('/api/sleep/:sleep_id', function(req, res) {
        Sleep.remove({
            _id : req.params.sleep_id
        }, function(err, sleep) {
            if (err) 
                res.send(err);
        
            Sleep.find(function(err, sleep) {
                if(err)
                    res.send(err)

                res.json(sleep);
            });
        });
    });






	//send client index.html file
	app.get('*', function(req,res) {
    	res.sendfile('./public/index.html');
	});


}
