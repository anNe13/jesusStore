angular.module("confirm").controller("confirmController", [
    "$scope", "$cookieStore", "cartService", "loginService", "confirmService", "$location", function
        ($scope, $cookieStore, cartService, loginService, confirmService, $location) {

        $scope.confirmCart = $cookieStore.get("cartProducts");
        $scope.user = loginService.getUserData();
        $scope.sum = cartService.getSum();

        $scope.termsClicked = false;
        $scope.showTerms = function () {
            $scope.termsClicked = !$scope.termsClicked;
        };

        $scope.orderNow = function () {
            var products = [];

            angular.forEach($scope.confirmCart, function (row) {
                products.push({productId: row.id, quantity: row.quantity})
            });
            var order = {
                customerId: $scope.user.customerId,
                products: products
            };
            confirmService.sendOrder(order).then(function (response) {
                $cookieStore.remove("cartProducts");
                $location.path("/thanxmate");
            }, function (response) {
                    $scope.orderError=true;

                })

        }

    }
]);
