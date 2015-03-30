var partialsApp = angular.module('partialsApp',[])
    partialsApp.config(['$routeProvider',function($routeProvider){
        $routeProvider.
            when("/", {templateUrl:"home.html"}).
            when("/about",{templateUrl:"about.html"}).
            otherwise({redirectTo:"home.html"})
    }]);

$(document).ready(function () {
    $('#contact-nav').click(function () {
        $('#contactbar').slideDown(600);
    });
    $('#contactexit').click(function () {
        $('#contactbar').slideUp(600);
    });
});
