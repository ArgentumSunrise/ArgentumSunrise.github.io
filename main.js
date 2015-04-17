$(document).ready(function () {
    $('#contact-nav').click(function () {
        $('#contactbar').slideDown(600);
    });
    $('#contactexit').click(function () {
        $('#contactbar').slideUp(600);
    });
});

var partialsApp = angular.module('partialsApp',['ngRoute'])
 
    partialsApp.config(['$routeProvider',function($routeProvider){
        $routeProvider.
            when(" ArgentumSunrise.github.io/rising-sun", {templateUrl:"home.html"}).
            when("ArgentumSunrise.github.io/rising-sun/about",{templateUrl:"about.html"}).
            otherwise({redirectTo:"ArgentumSunrise.github.io/rising-sun"})
        $locationProvider.html5(true);
    }]);
