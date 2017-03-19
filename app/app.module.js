angular.module("app", ["ui.bootstrap", "ngRoute","angular-cookies", "cart","category", "product", "customer", "login", "profile"]);

//angular.module("app", []);

angular.module("app").run(function($rootScope) {
    $rootScope.cartProducts = [];




});