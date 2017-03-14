angular.module("product").controller("productController",
    [ "$scope", "$routeParams", "productService", "$location" ,function
    ($scope, $routeParams, productService) {
        $scope.categoryIdpar = $routeParams.categoryId;

    productService.getProducts().then(function (response) {

        $scope.products = response.data;




    })
        , function (errorResponse) {
        console.log(errorResponse.message)
    }


}
]);
