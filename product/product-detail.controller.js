angular.module("product").controller("productDetailController",
    ["$scope", "$routeParams", "productService", "$cookieStore",  function
        ($scope, $routeParams, productService, $cookieStore) {
if(angular.isDefined($cookieStore.get("cartProducts"))) {
    $scope.cartProducts = $cookieStore.get("cartProducts");
}
        $scope.addToCart = function (inProduct) {

            var alredyExistsAt = -1;
            for (var i = 0; i < $scope.cartProducts.length; i++) {
                if ($scope.cartProducts[i].id == inProduct.id) {
                    alredyExistsAt = i;
                }
            }
            if (alredyExistsAt != -1) {
                console.log(alredyExistsAt);
                $scope.cartProducts[alredyExistsAt].quantity++;
            }
            else {
                inProduct.quantity = 1;
                $scope.cartProducts.push(inProduct);

            }

                var cookieCart = $scope.cartProducts;
                $cookieStore.put("cartProducts", cookieCart);





        };
        var myProductId = $routeParams.productId;

        productService.getProductById(myProductId).then(function (response) {

                $scope.product = response.data;
            }
        )

            , function (errorResponse) {
            console.log(errorResponse.message)
        }


    }
    ]);
