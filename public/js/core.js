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
        .when("/addMeditation", {
            templateUrl : 'addMeditation.htm',
            controller: "mainController"
        })
        .when("/addMedicalJournal", {
            templateUrl : 'addMedical.htm',
            controller : "mainController"
        })
        .when("/addUrination", {
            templateUrl : 'addUrination.htm',
            controller : "mainController"
        })
        .when("/addPoop", {
            templateUrl : 'addPoop.htm',
            controller : "mainController"
        })
        .when("/addSleep", {
            templateUrl : 'addSleep.htm',
            controller : "mainController"
        })
		.otherwise({redirectTo: '/' });

        $locationProvider.html5Mode(true);
    });

