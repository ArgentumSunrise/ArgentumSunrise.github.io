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
            when("/rising-sun/", {templateUrl:"home.html"}).
            when("/rising-sun/about",{templateUrl:"about.html"}).
            otherwise({redirectTo:"/rising-sun/"})
        $locationProvider.html5(true);
    }]);
