angular.module('rsReviews', [])
    .controller('rsReviewsCtrl', ['$scope', rsReviewsCtrl]);

function rsReviewsCtrl($scope) {
    $scope.reviews = [
        {
            fullName: 'Lars Skørjöld',
            country: 'Sweden',
            comments: "I once went on a Rising Sun flight from Stockholm to Uppsala, only about a hundred miles. We were in the air for thirty-nine hours. I took a nap onboard. When I woke up, I was in a dingy, ice-filled hotel bathtub in Barranquilla, Colombia, and someone had taken my gallbladder and one of my kidneys. When I tried to take a different flight home, the airport body scanners found five three-pound bags of cocaine in the hole where my kidney used to be. I had seven surgeries. I still feel excruciating pain whenever I try to urinate. Also, their onboard peanuts were only okay."
        },
        {
            fullName: 'Yuki Minowara',
            country: 'Japan',
            comments: "The bathrooms on their planes are just big, rough-cut holes in the sides of the fuselage. You squat above the holes and try to take a dump above a forty-thousand foot drop, while -20˚ air comes howling up from where you're trying to squat and makes icicles in your rectum. And, because of these holes, the air pressure inside is so low that it takes over five hundred pounds of force to open the door, and if you don't hold it open long enough, you'll lose a finger. Needless to say, you should hold it."
        },
        {
            fullName: 'Victor Halsey',
            country: 'New Zealand',
            comments: "I was once a pilot for Rising Sun. I was in law school, trying to become a public defender, until one day a man in a black suit came, shot me with a tranquilizer dart, and threw me into the trunk of an unmarked van. I was then driven into an abandoned factory building, where more men in black suits made us study aerodynamics at gunpoint. This lasted about a week, then they shoved me into the cockpit of a 727 and told me to get cracking. I still don't know how I survived that flight, especially as low on blood as I was. It took me ten years, five teeth, six fingers, and my left eye to earn my freedom in the deathball arena, and at night, I still have nightmares about their carry-on policy."
        },
        {
            fullName: 'Dimitri Lebedev',
            country: 'Russia',
            comments: "As the leader of the St. Petersburg Mafia, I love Rising Sun. Their planes have so much empty room to stow evidence, they never perform inspections, and their security is the worst I've seen outside the White House. Their 737 hangar has become one of our favorite places to cap snitches, and their planes are so terrible that, even if a body is discovered onboard, it's usually floating in the ocean surrounded by burning wreckage within the hour. They have so many great things to offer, and so I'm proud to say, truly, that Rising Sun is the Mafia's Choice."
        }
        ]

    $scope.revInput = {};

    $scope.resetVals = function () {
        $scope.revInput.comments = 'Comments';
        $scope.revInput.country = 'Country';
        $scope.revInput.fullName = 'Full Name';
    }

    $scope.newReview = function () {
        if ($scope.revInput.fullname != 'Full Name' && $scope.revInput.country != "Country" && $scope.revInput.comments != 'Comments') {
            $scope.reviews.splice(0,0,{
                fullName: $scope.revInput.fullName,
                country: $scope.revInput.country,
                comments: $scope.revInput.comments
            });
            $scope.resetVals();
        }
    }
}

$(document).ready(function () {
    var recursive = 0;
    var i = 0;
    var eea = 1;
    var names = ['London', 'Paris', 'Cape Town', 'Moscow', 'New York', 'Singapore', 'Rome', 'Istanbul', 'Sydney', 'Venice', 'Dubai', 'Honolulu', 'Prague', 'Taipei', 'Rio de Janeiro'];
    var current = window.location.pathname;

    setInterval(function () {
        i++;
        if (i <= 15) {
            $('#cornertext').text(names[i - 1]);
            $('#p' + i).fadeIn(500);
            $('#cornertext').fadeIn(500);
            setTimeout(function () {
                $('#p' + i).fadeOut(500);
                $('#cornertext').fadeOut(500);
            }, 2250);
        };
        if (i > 15) {
            $('#cornertext').css('display', 'none');
            $('#centertext').fadeIn(500);

        };
    }, 3250);

if(current === "/home.html"||"/home"){
    $('#home-nav').click(function () {
        recursive++;
        $('#r' + recursive).slideDown(300);
        setTimeout(function () {
            $('#r' + recursive).slideUp(400)
        }, 1000);
        if (recursive === 6) {
            $('#home-nav').css('cursor', 'default');
        };
    });
}
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
