angular.module("login").controller("loginController", [
    "$scope", "$routeParams","$location", "loginService", "$cookieStore", function
        ($scope, $routeParams, $location, loginService, $cookieStore) {



                $scope.loginUser = function() {
            var user = {email: $scope.email, password: $scope.password};
            loginService.serverLogin(user).then(function (response) {
                    $scope.loginFailed = false;
                    $location.path("/profile");


                    $cookieStore.put("userId", response.data.customerId);

                    $cookieStore.put("userData", response.data);

                    $cookieStore.put("loggedInStatus", true);



                },
                function whenFailed() {
                    $scope.loginFailed = true;
                }
            );


        }
}
]);
