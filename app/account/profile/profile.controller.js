angular.module("profile").controller("profileController", [
    "$scope", "$routeParams", "$location", "profileService", "loginService", "productService", "$cookieStore", function
        ($scope, $routeParams, $location, profileService, loginService, productService, $cookieStore) {

         getServerUser = function () {
            loginService.getServerUserData(loginService.getUserId()).then(function (response) {
                $scope.user = response.data;
                $cookieStore.put("userData", response.data);
            })
        };
        getServerUser();



    }

]);
