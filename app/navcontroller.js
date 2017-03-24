angular.module("app").controller("navController",
    ["$scope","$rootScope", "$routeParams", "$location", "loginService", "cartService",  function
        ($scope,$rootScope, $routeParams,  $location, loginService, cartService) {


        $scope.myCart = function () {
            $location.path("/cart/");
        };

        $scope.searchProduct = function () {

            $location.path("/searchtxt/" + searchPath);
        };

        $scope.categoryClicked = function(id) {

            $location.path("/category/" + id);

        };

        $scope.productClicked = function (id){
            $location.path("/product/" + id);
        };

        $scope.logout = function () {
            loginService.logout();
            $location.path("/");

        }






    }
    ]);

