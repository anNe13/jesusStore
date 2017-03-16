angular.module("app").controller("navController",
    ["$scope","$rootScope", "$routeParams", "$location",  function
        ($scope,$rootScope, $routeParams,  $location) {

$location.path("/category/all");

        $scope.searchProduct = function () {

            $location.path("/searchtxt/" + searchPath);
        };

        $scope.categoryClicked = function(id) {

            $location.path("/category/" + id);

        };
        $scope.allCatSelect = function () {
            $location.path("/category/all")
        };


        $scope.productClicked = function (id){
            $location.path("/product/" + id);
        };





    }
    ]);

