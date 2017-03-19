angular.module("cart").controller("cartController",
    ["cartService", "$scope", function
        (cartService, $scope) {

        $scope.sum = cartService.getSum();

        $scope.reduceItem = function (index) {
            $scope.cartProducts[index].quantity--;
            $scope.sum = cartService.getSum();
        };

        $scope.increaseItem = function (index) {
            $scope.cartProducts[index].quantity++;
            $scope.sum = cartService.getSum();
        };
        $scope.removeItem = function (index) {
            $scope.cartProducts.splice(index, 1);
            $scope.sum = cartService.getSum();
        }


    }
    ]);