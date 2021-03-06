// MODULE
var colorApp = angular.module('colorApp', ['ngRoute', 'ngResource']);


// CONTROLLERS
colorApp.controller('homeController', ['$scope', '$http', function($scope, $http) {
    var baseUrl = 'http://springbootautoscall-env.us-west-2.elasticbeanstalk.com';
//    var baseUrl = 'http://localhost:5000';
//    var baseUrl = 'http://google.com';

    $http ({
        method : 'GET',
        url     : baseUrl + '/api/colors/' 
    }).success (function (data, status) {
        console.log(data);
        $scope.results = data;
//        $scope.results = {"colors" : ["blue", "black", "red", "green"]};
    }).error (function (status){
        console.log('Error occured while getting colors: ' + status);
    });
}]);
