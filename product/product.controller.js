angular.module("product").controller("productController",
    ["$scope", "$routeParams", "productService", function
        ($scope, $routeParams, productService) {

        productService.getProducts().then(function (response) {

                $scope.products = response.data;
            }
        )

         , function (errorResponse) {
         console.log(errorResponse.message)
         }


    }
    ]);
