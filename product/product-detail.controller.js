angular.module("product").controller("productDetailController",
    ["$scope", "$routeParams", "productService", function
        ($scope, $routeParams, productService) {

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
