angular.module("customer").controller("customerController", [
    "$scope", "$routeParams", "$location", "customerService", function
        ($scope, $routeParams, $location, customerService) {

        $scope.regUser = function (isValid) {

            if (!isValid) {
                $scope.isNotValid = true;
            }
            else {

                var newCustomer = {

                    firstName: $scope.customer.firstName,
                    lastName: $scope.customer.lastName,
                    email: $scope.customer.email,
                    phone: $scope.customer.phone,
                    password: $scope.customer.password,
                    address: $scope.customer.address,
                    postalCode: $scope.customer.postalCode,
                    city: $scope.customer.city

                };
                customerService.createAccount(newCustomer).then(function () {
                    $location.path("/login");

                });
            }

        }
    }
]);
