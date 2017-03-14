angular.module("product").controller("filterController",
    ["$scope", "$routeParams", "productService", "$location",  function
        ($scope, $routeParams) {
    $scope.filterpar = $routeParams.categoryId;
    $scope.checkFilter = function (product) {
        if ($scope.filterpar === "all"){
            return product.categoryId > 0;
        }
        else {
            return product.categoryId === parseInt($scope.filterpar)
        }
    }


    }
    ]);
