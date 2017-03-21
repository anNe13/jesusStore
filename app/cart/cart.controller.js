angular.module("cart").controller("cartController",
    ["cartService", "$scope", "$cookieStore", function
        (cartService, $scope, $cookieStore) {

        $scope.cartProducts = $cookieStore.get("cartProducts");
       // var cart = $scope.cartProducts;

        getSum = function () {
            // $cookieStore.put("cartProducts", this.cartProducts);
            //$scope.cartProducts = $cookieStore.get("cartProducts");
            var cart = $scope.cartProducts;
            if(angular.isUndefined(cart)){
                cart = {};
            }

            var sum = 0;
            for (var i = 0; i < cart.length; i++) {
                sum += (cart[i].quantity * cart[i].price);

            }
            return sum;
        };

        $scope.sum = getSum();

        $scope.reduceItem = function(index) {
            $scope.cartProducts[index].quantity--;
            $cookieStore.put("cartProducts", this.cartProducts)
            $scope.sum = getSum();
        };

        $scope.increaseItem =  function(index) {
            $scope.cartProducts[index].quantity++;
            $cookieStore.put("cartProducts", this.cartProducts)
            $scope.sum = getSum();
        };
        $scope.removeItem = function (index) {
            $scope.cartProducts.splice(index, 1);
            $cookieStore.put("cartProducts", this.cartProducts)
            $scope.sum = getSum();
        };







    }
    ]);