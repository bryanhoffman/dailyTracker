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

}
