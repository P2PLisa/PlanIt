'use strict';

angular.module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        $routeProvider.when('/login', {
            templateUrl: 'app/login/login.html',
            controller: 'LoginCtrl'
        });
    }])

    .controller('LoginCtrl', function ($scope, $location, $http) {

        $scope.base_url = "https://www.google.com";
        $scope.login = {
            user: '',
            password: ''
        };

        $scope.authenticate = function () {

            // POST request for logging in a user
            $http({
                method: 'POST',
                url: $scope.base_url + '/some-endpoint',
                withCredentials: true,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: {
                    name: $scope.login.user,
                    password: $scope.login.password
                }
            }).then(function successCallback(response) {
                //All data returned will be under response.data
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.

            });
            $location.path("/projects");
        }
    });