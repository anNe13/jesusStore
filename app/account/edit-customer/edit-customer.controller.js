angular.module("edit").controller("editController", [
    "$scope", "$routeParams", "$location", "customerService", "loginService", "editService", function
        ($scope, $routeParams, $location, customerService, loginService, editService) {

        $scope.userVal = loginService.getUserData();

        $scope.editUser = function (isValid) {
            if (!isValid) {
                $scope.isNotValid = true;
            }
            else {

                var editedUser = {

                    firstName: $scope.userVal.firstName,
                    lastName: $scope.userVal.lastName,
                    email: $scope.userVal.email,
                    phone: $scope.userVal.phone,
                    password: "no",
                    address: $scope.userVal.address,
                    postalCode: $scope.userVal.postalCode,
                    city: $scope.userVal.city
                };

                editService.editCustomer($scope.userVal.customerId, editedUser).then(function () {
                    $location.path("/profile");

                });


            }
        }
    }
]);
