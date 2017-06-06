// public/js/controllers/main.js

angular.module('homeDisplay', [])

    .controller('mainController', function($scope, $http, Hydrate, Exercise, Cig, Food, Journal) {
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
                    });
            }
        };

        $scope.deleteHydrate = function(id) {
            Hydrate.delete(id)
                .success(function(data) {
                    $scope.hydrate = data;
                });
        };

        Exercise.get()
           .success(function(data) {
                $scope.exercise = data;
            });


	    //I suspect  these types of things are also handled in file structure somehow

        $scope.createExercise = function() {
            //check it's not empty
            if (!$.isEmptyObject($scope.formData)) {
                Exercise.create($scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.exercise = data;
                    });
            }
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


	    //I suspect  these types of things are also handled in file structure somehow

        $scope.createCig = function() {
            //check it's not empty
            if (!$.isEmptyObject($scope.formData)) {
                Cig.create($scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.cig = data;
                    });
            }
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


	    //I suspect  these types of things are also handled in file structure somehow

        $scope.createFood = function() {
            //check it's not empty
            if (!$.isEmptyObject($scope.formData)) {
                Food.create($scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.food = data;
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


	    //I suspect  these types of things are also handled in file structure somehow

        $scope.createJournal = function() {
            //check it's not empty
            if (!$.isEmptyObject($scope.formData)) {
                Journal.create($scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.journal = data;
                    });
            }
        };

        $scope.deleteJournal = function(id) {
            Journal.delete(id)
                .success(function(data) {
                    $scope.journal = data;
                });
        };



})
