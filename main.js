var partialsApp = angular.module('partialsApp',['ngRoute'])
 
    partialsApp.config(['$routeProvider',function($routeProvider){
        $routeProvider.
            when("/", {templateUrl:"home.html"}, controller: 'PartialsController').
            when("/about",{templateUrl:"about.html", controller: 'PartialsController'}).
            otherwise({redirectTo:"/", controller: 'PartialsController'})
        $locationProvider.html5(true);
    }]);
