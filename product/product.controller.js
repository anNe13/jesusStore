angular.module("product").controller("productController",
    ["$scope", "$routeParams", "productService","$location",   function
        ($scope, $routeParams, productService, $location) {



    $scope.productClicked = function (id){
        $location.path("/product/" + id);
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
