angular.module("app").controller("startController",
    ["$scope", "$routeParams", "productService","$location",   function
        ($scope, $routeParams, productService, $location) {

    var onLoad  = function () {
        if ($routeParams.categoryId === undefined){
            console.log($routeParams);
        $location.path("categories/all");
        }
    };


    onLoad();

    }
    ]);
