/**
 * Created by A on 2017-03-14.
 */
angular.module("category").controller("navController",
    ["$scope", "$routeParams", "$location",  function
        ($scope,$routeParams,  $location) {

        $scope.searchProduct = function () {

            var searchPath = $scope.searchBox;
            $location.path("/searchtxt/" + searchPath);
        };

        $scope.categoryClicked = function(id) {

            $location.path("/category/" + id);

        };
        $scope.allCatSelect = function () {
            $location.path("/category/all")
        };


    }
    ]);