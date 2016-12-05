'use strict';

angular.module('myApp.workspace', ['ngRoute', 'ngMaterial'])

    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        $routeProvider.when('/workspace', {
            templateUrl: 'app/projects/workspace.html',
            controller: 'WorkspaceCtrl',
            css: 'app/projects/workspace.css'
        });
    }])

    .controller('WorkspaceCtrl', function ($scope, $location, $http, $routeParams) {

        $scope.base_url = "https://www.google.com";

        //Get the unique project id or number or however we reference a project
        $scope.topbar =
            [{
                "title": "My Plan",
                "description": "A project brainstorming app that also helps you pick languages and framework for your project.",
                "type": 0
            }, {
                "title": "Dont Plan It",
                "description": "A project brainstorming app that also helps you pick languages and framework for your project."
            }, {
                "title": "What Plan It",
                "description": "A project brainstorming app that also helps you pick languages and framework for your project.",
                "type": 1
        }, {
                "title": "Who's Plan It",
                "description": "A project brainstorming app that also helps you pick languages and framework for your project.",
                "type": 1
            }, {
                "title": "This Plan It",
                "description": "A project brainstorming app that also helps you pick languages and framework for your project.",
                "type": 2
            },
                {
                    "title": "This Plan It",
                    "description": "A project brainstorming app that also helps you pick languages and framework for your project.",
                    "type": 3
                },
                {
                    "title": "This Plan It",
                    "description": "A project brainstorming app that also helps you pick languages and framework for your project.",
                    "type": 3
                }];

        $scope.create = function () {
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