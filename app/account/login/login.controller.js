angular.module("login").controller("loginController", [
    "$scope", "$routeParams","$location", "loginService", function
        ($scope, $routeParams, $location, loginService) {

        $scope.loginUser = function() {
                var user = {email : $scope.email, password : $scope.password};
                loginService.serverLogin(user);


                }





    }
]);
