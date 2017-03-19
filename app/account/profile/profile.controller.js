angular.module("profile").controller("profileController", [
    "$scope", "$routeParams","$location", "profileService", "loginService", function
        ($scope, $routeParams, $location, profileService, loginService) {
$scope.user = loginService.getUserData();





    }
]);
