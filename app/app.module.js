angular.module("app", ["ui.bootstrap", "ngRoute","ngCookies", "cart","category", "product", "customer", "login", "profile", "confirm", "edit"]);

angular.module("app").run(function($rootScope, $cookieStore, loginService) {

    $rootScope.cartProducts = [];
    $rootScope.loggedInUserData = [];
    $rootScope.userId = '';
    $rootScope.loggedInStatus = false;





    $rootScope.amiloggedin = function () {
        return loginService.getLoggedInStatus();
    };





});