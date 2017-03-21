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
            var createdProduct = {};

            for(var i = 0 ; i < $scope.confirmCart.length ; i++){

                createdProduct.productId = $scope.confirmCart[i].id;
                createdProduct.quantity = $scope.confirmCart[i].quantity;
                products.push(createdProduct);
                createdProduct.length = 0;

            }
            var order = {
                customerId: $scope.user.customerId,
                products: products
            };



            confirmService.sendOrder(order).then(function (response) {
                $cookieStore.remove("cartProducts");
                console.log(response.message)
            });
            $location.path("/thanxmate");
        }


    }
]);
