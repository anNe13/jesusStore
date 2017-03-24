angular.module("login").controller("loginController", [
    "$scope", "$routeParams", "$location", "loginService", "$cookieStore", function
        ($scope, $routeParams, $location, loginService, $cookieStore) {


        $scope.loginUser = function () {
            var user = {email: $scope.email, password: $scope.password};
            loginService.serverLogin(user).then(function (response) {
                    $scope.loginFailed = false;
                    $cookieStore.put("userId", response.data.customerId);
                    $cookieStore.put("userData", response.data);
                    $cookieStore.put("loggedInStatus", true);
                    $location.path("/profile");
                },
                function whenFailed() {
                    $scope.loginFailed = true;
                }
            );


        }
    }
]);
