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
            start : function(exerciseData) {
                return $http.post('/api/exerciseStart', exerciseData);
            },
            stop : function(id, exerciseData) {
                return $http.post('/api/exerciseStop/' + id, exerciseData);
            },
            delete : function(id) {
                return $http.delete('/api/exercise/' + id);
            }
        }

    })

    .factory('Meditation', function($http) {
        return {
            get : function() {
                return $http.get('/api/meditation');
            },
            start : function(meditationData) {
                return $http.post('/api/meditationStart', meditationData);
            },
            stop : function(id, meditationData) {
                return $http.post('/api/meditationStop/' + id, meditationData);
            },
            delete : function(id) {
                return $http.delete('/api/meditation/' + id);
            }
        }

    })

    .factory('Focus', function($http) {
        return {
            get : function() {
                return $http.get('/api/focus');
            },
            start : function(focusData) {
                return $http.post('/api/focusStart', focusData);
            },
            stop : function(id, focusData) {
                return $http.post('/api/focusStop/' + id, focusData);
            },
            delete : function(id) {
                return $http.delete('/api/focus/' + id);
            }
        }

    })

    .factory('Sleep', function($http) {
        return {
            get : function() {
                return $http.get('/api/sleep');
            },
            start : function(sleepData) {
                return $http.post('/api/sleepStart', sleepData);
            },
            stop : function(id, sleepData) {
                return $http.post('/api/sleepStop/' + id, sleepData);
            },
            delete : function(id) {
                return $http.delete('/api/sleep/' + id);
            }
        }

    })


    .factory('Urination', function($http) {
        return {
            get : function() {
                return $http.get('/api/urination');
            },
            create : function(urinationData) {
                return $http.post('/api/urination', urinationData);
            },
            delete : function(id) {
                return $http.delete('/api/urination/' + id);
            }
        }

    })


    .factory('Poop', function($http) {
        return {
            get : function() {
                return $http.get('/api/poop');
            },
            create : function(poopData) {
                return $http.post('/api/poop', poopData);
            },
            delete : function(id) {
                return $http.delete('/api/poop/' + id);
            }
        }

    })


    .factory('Medical', function($http) {
        return {
            get : function() {
                return $http.get('/api/medical');
            },
            create : function(medicalData) {
                return $http.post('/api/medical', medicalData);
            },
            delete : function(id) {
                return $http.delete('/api/medical/' + id);
            }
        }

    })



