angular.module("category").controller("categoryController", [
    "$scope", "$routeParams","$location", "categoryService", function
    ($scope, $routeParams, $location, categoryService) {


    categoryService.getCategories().then(function (response) {
        $scope.categories = response.data;
    });

}
]);
