angular.module("product").controller("productController",
    ["$scope", "$routeParams", "productService","$location",   function
        ($scope, $routeParams, productService, $location) {
//$scope.searchBox = searchBox;

    $scope.productClicked = function (id){
        $location.path("/product/" + id);
        console.log("nu: "  + id);
    };

        productService.getProducts().then(function (response) {

                $scope.products = response.data;
            }
        )

         , function (errorResponse) {
         console.log(errorResponse.message)
         }


    }
    ]);
