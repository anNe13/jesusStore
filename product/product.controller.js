angular.module("product").controller("productController",
    ["$scope", "$routeParams", "productService", "$location", "$sce", function
        ($scope, $routeParams, productService) {

        console.log($routeParams.categoryId);


            productService.getProducts().then(function (response) {

                $scope.products = response.data;}

            )
/*,
            productService.getProductBySearch().then(function (response) {
                $scope.products = response.data;
            })
*/
            , function (errorResponse) {
            console.log(errorResponse.message)
        }


    }
    ]);
