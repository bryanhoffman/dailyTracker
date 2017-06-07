// public/js/core.js


angular.module('serenity', ['homeDisplay', 'trackerApp', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when("/", {
            templateUrl : 'home.htm',
            controller: "mainController"
        })
        .when("/data", {
            templateUrl : 'data.htm',
            controller: "mainController"

        })
        .when("/addCig", {
            templateUrl : 'addCig.htm',
            controller: "mainController"
		})
        .when("/addFood", {
            templateUrl : 'addFood.htm',
            controller: "mainController"
        })
        .when("/addHydrate", {
            templateUrl : 'addHydrate.htm',
            controller: "mainController"
        })
        .when("/addJournal", {
            templateUrl : 'addJournal.htm',
            controller: "mainController"
        })
        .when("/addExercise", {
            templateUrl : 'addExercise.htm',
            controller: "mainController"
        })
		.otherwise({redirectTo: '/' });

        $locationProvider.html5Mode(true);
    });

