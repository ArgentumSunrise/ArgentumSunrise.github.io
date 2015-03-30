angular.module('partialsApp',[])
    .config(function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        $routeProvider
            .when("/#/", {templateUrl:"home.html"})
            .when("/about",{templateUrl:"about.html"})
    })

$(document).ready(function () {
    $('#contact-nav').click(function () {
        $('#contactbar').slideDown(600);
    });
    $('#contactexit').click(function () {
        $('#contactbar').slideUp(600);
    });

    $('#allahu-akbar').click(function () {
        $(this).css('color', '#ff5555');
        setTimeout(function () {
            $('#allah-e-egg').show(50);
            $('#a-e-i-1').show(50).delay(4000).hide(50);
            if (eea <= 5) {
                setInterval(function () {
                    eea++;
                    $('#a-e-i-' + eea).css('z-index','100+eea').show(50).delay(3000).hide(50);
               }, 2100);
           }
            setTimeout(function () {
                $('#allah-e-egg').hide(50);
            }, 16400);
        }, 3000);
    });

});
