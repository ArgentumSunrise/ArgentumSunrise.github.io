var partialsApp = angular.module('partialsApp',['ngRoute'])
    partialsApp.controller('PartialsController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })
 
    partialsApp.config(['$routeProvider',function($routeProvider){
        $routeProvider.
            when("/", {templateUrl:"home.html"}, controller: 'PartialsController').
            when("/about",{templateUrl:"about.html", controller: 'PartialsController'}).
            otherwise({redirectTo:"/", controller: 'PartialsController'})
        $locationProvider.html5(true);
    }]);

$(document).ready(function () {
    $('#contact-nav').click(function () {
        $('#contactbar').slideDown(600);
    });
    $('#contactexit').click(function () {
        $('#contactbar').slideUp(600);
    });
});
