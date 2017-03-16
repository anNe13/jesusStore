angular.module("app").controller("filterController",
    ["$scope", "$routeParams",  function
        ($scope, $routeParams) {

var cat =  $routeParams.categoryId;
    $scope.checkFilter = function (product) {
        if (cat === "all"){
            return product.categoryId > 0;

        }
        else if($scope.searchpar != undefined){
            return product.name = $scope.searchpar;
        }

        else {
            return product.categoryId === parseInt(cat)
        }
    }


    }
    ]);


