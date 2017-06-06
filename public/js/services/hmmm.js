// js/services/hmmmm.js

angular.module('trackerApp', [])

    .factory('Hydrate', function($http) {
        return {
            get : function() {
                return $http.get('/api/hydrate');
            },
            create : function(hydrateData) {
                return $http.post('/api/hydrate', hydrateData);
            },
            delete : function(id) {
                return $http.delete('/api/hydrate/' + id);
            }
        }
    })

    .factory('Food', function($http) {
        return {
            get : function() {
                return $http.get('/api/food');
            },
            create : function(foodData) {
                return $http.post('/api/food', foodData);
            },
            delete : function(id) {
                return $http.delete('/api/food/' + id);
            }
        }
    })

    .factory('Cig', function($http) {
        return {
            get : function() {
                return $http.get('/api/cig');
            },
            create : function(cigData) {
                return $http.post('/api/cig', cigData);
            },
            delete : function(id) {
                return $http.delete('/api/cig/' + id);
            }
        }
    })

    .factory('Journal', function($http){
        return {
            get : function() {
                return $http.get('/api/journal');
            },
            create : function(journalData) {
                return $http.post('/api/journal', journalData);
            },
            delete : function(id) {
                return $http.delete('/api/journal/' + id);
            }
        }
    })

    .factory('Exercise', function($http) {
        return {
            get : function() {
                return $http.get('/api/exercise');
            },
            create : function(exerciseData) {
                return $http.post('/api/exercise', exerciseData);
            },
            delete : function(id) {
                return $http.delete('/api/exercise/' + id);
            }
        }

    });


