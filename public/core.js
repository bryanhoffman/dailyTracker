// public/core.js

var Hydrate = angular.module('Hydrate', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // get data upon page load
    $http.get('/api/hydrate')
        .success(function(data) {
            $scope.hydrate = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: '+data);
        });

    $http.get('/api/exercise')
        .success(function(data) {
            $scope.exercise = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: '+data);
        });

	//I suspect  these types of things are also handled in file structure somehow

    $scope.createHydrate = function() {
        $http.post('/api/hydrate', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.hydrate = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: '+data);
            });
    };

    $scope.deleteHydrate = function(id) {
        $http.delete('/api/hydrate/'+id)
            .success(function(data) {
                $scope.hydrate = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            })
    };


    $scope.createExercise = function() {
        $http.post('/api/exercise', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.exercise = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: '+data);
            });

   };

   $scope.deleteExercise = function(id) {
       $http.delete('/api/exercise/' + id)
           .success(function(data) {
               $scope.exercise = data;
           })
           .error(function(data) {
               console.log('Error: '+data);
           });
   };

}
