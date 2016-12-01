'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngMaterial',
    'myApp.home',
    'myApp.login',
    'myApp.register',
    'myApp.projects',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/home'});
}]).factory('projectdata', function() {
    var savedData = {}
    function set(data) {
        savedData = data;
    }
    function get() {
        return savedData;
    }

    return {
        set: set,
        get: get
    }

});
