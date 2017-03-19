angular.module("product").controller("productDetailController",
    ["$scope", "$routeParams", "productService",  function
        ($scope, $routeParams, productService) {

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
