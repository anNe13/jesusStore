angular.module("app", ["ui.bootstrap", "ngRoute", "category", "product", "cart"]);// "contact", "category", "login"

//angular.module("app", []);

angular.module("app").run(function($rootScope) {
    $rootScope.cartProducts = [];
});