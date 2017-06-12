// public/js/controllers/main.js

angular.module('homeDisplay', [])

    .controller('mainController', function($scope, $http, $location, Hydrate, Exercise, Cig, Food, Journal, Meditation, Focus, Urination, Poop, Medical, Sleep) {
        $scope.formData = {};
        $scope.date = new Date();

        // get data upon page load
        Hydrate.get()
           .success(function(data) {
                $scope.hydrate = data;
            });


	    //I suspect  these types of things are also handled in file structure somehow

        $scope.createHydrate = function() {
            //check it's not empty
            if (!$.isEmptyObject($scope.formData)) {
                Hydrate.create($scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.hydrate = data;
                        $location.path('/');
                    });
            }
        };

        $scope.deleteHydrate = function(id) {
            Hydrate.delete(id)
                .success(function(data) {
                    $scope.hydrate = data;
                });
        };

        // Exercise
        Exercise.get()
           .success(function(data) {
                $scope.exercise = data;
            });



        $scope.startExercise = function() {
                Exercise.start($scope.formData)
                    .success(function(data) {
                        //$scope.formData = {};
                        $scope.exercise = data;
                    });
        };

        $scope.stopExercise = function(id) {
                Exercise.stop(id, $scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.exercise = data;
                    });
        };


        $scope.deleteExercise = function(id) {
            Exercise.delete(id)
                .success(function(data) {
                    $scope.exercise = data;
                });
        };



         Cig.get()
           .success(function(data) {
                $scope.cig = data;
            });



        $scope.createCig = function() {
                Cig.create($scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.cig = data;
                        $location.path('/');
                    });
        };

        $scope.deleteCig = function(id) {
            Cig.delete(id)
                .success(function(data) {
                    $scope.cig = data;
                });
        };


	//Food
    // get data upon page load
        Food.get()
           .success(function(data) {
                $scope.food = data;
            });



        $scope.createFood = function() {
            //check it's not empty
            if (!$.isEmptyObject($scope.formData)) {
                Food.create($scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.food = data;
                        $location.path('/');
                    });
            }
        };

        $scope.deleteFood = function(id) {
            Food.delete(id)
                .success(function(data) {
                    $scope.food = data;
                });
        };


	//Journal Entry
    // get data upon page load
        Journal.get()
           .success(function(data) {
                $scope.journal = data;
            });



        $scope.createJournal = function() {
            //check it's not empty
            if (!$.isEmptyObject($scope.formData)) {
                Journal.create($scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.journal = data;
                        $location.path('/');
                    });
            }
        };

        $scope.deleteJournal = function(id) {
            Journal.delete(id)
                .success(function(data) {
                    $scope.journal = data;
                });
        };

        // Meditation
        Meditation.get()
           .success(function(data) {
                $scope.meditation = data;
            });



        $scope.startMeditation = function() {
                Meditation.start($scope.formData)
                    .success(function(data) {
                        //$scope.formData = {};
                        $scope.meditation = data;
						//$location.path('/');
                    });
        };

        $scope.stopMeditation = function(id) {
                Meditation.stop(id, $scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.meditation = data;
                        $location.path('/');
                    });
        };


        $scope.deleteMeditation = function(id) {
            Meditation.delete(id)
                .success(function(data) {
                    $scope.meditation = data;
                });
        };

        // Focus
        Focus.get()
           .success(function(data) {
                $scope.myFocus = data;
            });



        $scope.startFocus = function() {
                Focus.start($scope.formData)
                    .success(function(data) {
                        //$scope.formData = {};
                        $scope.myFocus = data;
                    });
        };

        $scope.stopFocus = function(id) {
                Focus.stop(id, $scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.myFocus = data;
                        $location.path('/');
                    });
        };


        $scope.deleteFocus = function(id) {
            Focus.delete(id)
                .success(function(data) {
                    $scope.myFocus = data;
                });
        };
	//Urination
        Urination.get()
           .success(function(data) {
                $scope.urination = data;
            });

        $scope.createUrination = function() {
                Urination.create($scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.urination = data;
                        $location.path('/');
            })
        };

        $scope.deleteUrination = function(id) {
            Urination.delete(id)
                .success(function(data) {
                    $scope.urination = data;
                });
        };
	//Poop
        Poop.get()
           .success(function(data) {
                $scope.poop = data;
            });



        $scope.createPoop = function() {
                Poop.create($scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.poop = data;
                        $location.path('/');
            })
        };

        $scope.deletePoop = function(id) {
            Poop.delete(id)
                .success(function(data) {
                    $scope.poop = data;
                });
        };
	//Medical Journal
        Medical.get()
           .success(function(data) {
                $scope.medical = data;
            });



        $scope.createMedical = function() {
                Medical.create($scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.medical = data;
                        $location.path('/');
            });
        };

        $scope.deleteMedical = function(id) {
            Medical.delete(id)
                .success(function(data) {
                    $scope.medical = data;
                });
        };
	
        // Sleep
        Sleep.get()
           .success(function(data) {
                $scope.sleep = data;
            });



        $scope.startSleep = function() {
                Sleep.start($scope.formData)
                    .success(function(data) {
                        //$scope.formData = {};
                        $scope.sleep = data;
                    });
        };

        $scope.stopSleep = function(id) {
                Sleep.stop(id, $scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.sleep = data;
                    });
        };


        $scope.deleteSleep = function(id) {
            Sleep.delete(id)
                .success(function(data) {
                    $scope.sleep = data;
                });
        };

})
