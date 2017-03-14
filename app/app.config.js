angular.module("app").config(["$routeProvider", "$locationProvider",  function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl :   "app/app.template.html",
            controller  :   "appController"
        })
        .when("/categories", {
            templateUrl     :   "category/category.template.html",
            controller      :   "categoryController"
        })
        .when("/category/:categoryId", {
            templateUrl     :   "product/product.template.html",
            controller      :   "productController"
    })
        .when("/category/all", {
            templateUrl     :   "product/product.template.html",
            controller      :   "productController"
        })
        .when("/products",{
            templateUrl     :   "product/product.template.html",
            controller      :   "productController"
    })
        .otherwise("/");
    $locationProvider.html5Mode(true);
}]);


angular.module('app')
    .directive('bsActiveLink', ['$location', function ($location) {
        return {
            restrict: 'A', //use as attribute
            replace: false,
            link: function (scope, elem) {
                //after the route has changed
                scope.$on("$routeChangeSuccess", function () {
                    var hrefs = ['/#' + $location.path(),
                        '#' + $location.path(), //html5: false
                        $location.path()]; //html5: true
                    angular.forEach(elem.find('a'), function (a) {
                        a = angular.element(a);
                        if (-1 !== hrefs.indexOf(a.attr('href'))) {
                            a.parent().addClass('active');
                        } else {
                            a.parent().removeClass('active');
                        };
                    });
                });
            }
        }
    }]);

