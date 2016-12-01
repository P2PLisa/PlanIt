'use strict';

angular.module('myApp.create', ['ngRoute'])

    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        $routeProvider.when('/create', {
            templateUrl: 'app/projects/create.html',
            controller: 'CreateCtrl'
        });
    }])

    .controller('CreateCtrl', function ($scope, $location, $http, $routeParams) {

        $scope.base_url = "https://www.google.com";

        //Get the unique project id or number or however we reference a project
        $scope.hash = $routeParams.params;
        console.log($scope.hash)


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