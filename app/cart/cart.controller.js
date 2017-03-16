angular.module("app").controller("cartController",
    ["$scope","$rootScope", "$routeParams", "$location",  function
        ($scope,$rootScope, $routeParams,  $location) {

        $location.path("/category/all");

        $scope.myCart = function () {

            $location.path("/cart/" );
        };




    }
    ]);