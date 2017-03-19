angular.module("app").controller("filterController",
    ["$scope", "$routeParams",  function
        ($scope, $routeParams) {

var cat =  $routeParams.categoryId;
    $scope.checkFilter = function (product) {
        if (cat === "all" || cat == undefined){
            return product.categoryId > 0;

        }

        else {
            return product.categoryId === parseInt(cat)
        }
    }


    }
    ]);


