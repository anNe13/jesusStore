angular.module("product").controller("filterController",
    ["$scope", "$routeParams", "productService", "$location",  function
        ($scope, $routeParams, productService) {
    $scope.filterpar = $routeParams.categoryId;
    $scope.checkFilter = function (product) {
        return product.categoryId === parseInt($scope.filterpar)
    }


    }
    ]);
