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
            comments: ''
        }]

    $scope.revInput = {};

    $scope.resetVals = function () {
        $scope.revInput.comments = 'Comments';
        $scope.revInput.country = 'Country';
        $scope.revInput.fullName = 'Full Name';
    }

    $scope.newReview = function () {
        if ($scope.revInput.fullname != 'Full Name' && $scope.revInput.country != "Country" && $scope.revInput.comments != 'Comments') {
            $scope.reviews.push({
                fullName: $scope.revInput.fullName,
                country: $scope.revInput.country,
                comments: $scope.revInput.comments
            });
            $scope.resetVals();
        }
    }
}

$(document).ready(function () {
    $('#contact-nav').click(function () {
        $('#contactbar').slideDown(600);
    });
    $('#contactexit').click(function () {
        $('#contactbar').slideUp(600);
    });
});