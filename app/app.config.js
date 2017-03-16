angular.module("app").config(["$routeProvider", "$locationProvider",  function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl     :   "product/product.template.html",
            controller      :   "startController"
        })
        .when("/categories", {
            templateUrl     :   "category/category.template.html",
            controller      :   "categoryController"
        })
        .when("/category/:categoryId", {
            templateUrl     :   "product/product.template.html",
            controller      :   "productController"
    })
        .when("/product/:productId", {
            templateUrl:     "product/product-detail.template.html",
            controller:      "productDetailController",
        })
        .when("/cart", {
            templateUrl     :   "app/cart/cart.template.html",
            controller      :   "cartController"
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

