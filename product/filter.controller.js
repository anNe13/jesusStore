angular.module("product").controller("filterController",
    ["$scope", "$routeParams",  function
        ($scope, $routeParams) {

    $scope.filterpar = $routeParams.categoryId;
    $scope.searchText = $scope.searchText;

    $scope.checkFilter = function (product) {
        if ($scope.filterpar === "all"){
            return product.categoryId > 0;

        }
        else if($scope.searchpar != undefined){
            return product.name = $scope.searchpar;
        }

        else {
            return product.categoryId === parseInt($scope.filterpar)
        }
    }


    }
    ]);
