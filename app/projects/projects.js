'use strict';

angular.module('myApp.projects', ['ngRoute'])

    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        $routeProvider.when('/projects', {
            templateUrl: 'app/projects/projects.html',
            controller: 'ProjectsCtrl',
            css: 'app/projects/projects.css'
        });
    }])

    .controller('ProjectsCtrl', function ($scope, $location, $http) {

        $scope.base_url = "https://www.google.com";
        $scope.projects = [{
            "hash": '001',
            "title": "Plan It",
            "description": "A project brainstorming app that also helps you pick languages and framework for your project."
        }, {
            "hash": '002',
            "title": "Plan It",
            "description": "A project brainstorming app that also helps you pick languages and framework for your project."
        }, {
            "hash": '003',
            "title": "Plan It",
            "description": "A project brainstorming app that also helps you pick languages and framework for your project."
        }, {
            "hash": '004',
            "title": "Plan It",
            "description": "A project brainstorming app that also helps you pick languages and framework for your project."
        }, {
            "hash": '005',
            "title": "Plan It",
            "description": "A project brainstorming app that also helps you pick languages and framework for your project."
        }];
        console.log($scope.projects)


        $scope.view = function (hash) {
            console.log(hash)
            // $location.path('/create').search({params: hash})
        }

        $scope.authenticate = function () {
            // POST request for logging in a user
            $http({
                method: 'POST',
                url: $scope.base_url + '/some-endpoint',
                withCredentials: true,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param({name: $scope.login.user, password: $scope.login.password})
            }).then(function successCallback(response) {
                //All data returned will be under response.data
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.

            });
        }
    });