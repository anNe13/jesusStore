angular.module("app").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "product/product.template.html",
            controller: "productController"
        })
        .when("/category/:categoryId", {
            templateUrl: "product/product.template.html",
            controller: "productController"
        })
        .when("/product/:productId", {
            templateUrl: "product/product-detail.template.html",
            controller: "productDetailController",
        })
        .when("/cart", {
            templateUrl: "app/cart/cart.template.html",
            controller: "cartController"
        })
        .when("/customer/new", {
            templateUrl: "app/account/new-customer/new-customer.template.html",
            controller: "customerController"
        })
        .when("/login", {
            templateUrl: "app/account/login/login.template.html",
            controller: "loginController"
        })
        .when("/profile", {
            templateUrl: "app/account/profile/profile.template.html",
            controller: "profileController"
        })
        .when("/confirm", {
            templateUrl: "app/cart/order/confirm.template.html",
            controller: "confirmController"
        })
        .when("/thanxmate", {
            templateUrl: "app/cart/order/thanxmate.html",
            controller: "confirmController"
        })
        .when("/edit", {
            templateUrl: "app/account/edit-customer/edit-customer.template.html",
            controller: "editController"
        })
        .otherwise("/");
    $locationProvider.html5Mode(true);
}]);


