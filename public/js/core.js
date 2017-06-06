// public/js/core.js


angular.module('serenity', ['homeDisplay', 'trackerApp', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when("/", {
            templateUrl : 'home.htm'
        })
        .when("/data", {
            templateUrl : 'data.htm'
        });
        //.otherwise({redirectTo: '/' });
    });

