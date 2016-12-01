'use strict';

angular.module('myApp.register', ['ngRoute'])

    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        $routeProvider.when('/register', {
            templateUrl: 'app/register/register.html',
            controller: 'RegisterCtrl'
        });
    }])

    .controller('RegisterCtrl', function ($scope, $location, $http) {
        $scope.register = {
            first: '',
            last: '',
            user: '',
            password: ''
        };

        $scope.base_url = "https://www.google.com";

        $scope.create = function () {
            // POST request for creating a user
            $http({
                method: 'POST',
                url: $scope.base_url + '/some-endpoint',
                withCredentials: true,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: {
                    first: $scope.register.first,
                    last: $scope.register.last,
                    name: $scope.register.user,
                    password: $scope.register.password
                }
            }).then(function successCallback(response) {
                //All data returned will be under response.data
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.

            });
        }
    });