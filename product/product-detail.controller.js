angular.module("product").controller("productDetailController",
    ["$scope", "$routeParams", "productService", function
        ($scope, $routeParams, productService) {

        $scope.addToCart = function (product) {
          /*  for (var i = 0 ; i<$scope.cartProducts.length ; i++ ){
                $scope.cartProducts.push(product);
                if ($scope.cartProducts[i].id = product.id){
                    $scope.cartProducts[i].quantity ++;
                    return;
                }*/
                $scope.cartProducts.push(product);

            //}


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
