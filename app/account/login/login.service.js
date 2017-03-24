angular.module("login").factory("loginService", ["$http", "$location", "$cookieStore", function ($http, $location, $cookieStore) {


    return {
        serverLogin: function (user) {
            return $http.post("http://nackbutik.azurewebsites.net/api/customer/login", user);
        },
        getServerUserData: function (id) {
            return $http.get("http://nackbutik.azurewebsites.net/api/customer/" + id);
        },
        logout: function () {
            $cookieStore.remove("loggedInStatus");
            $cookieStore.remove("userId");
            $cookieStore.remove("userData");
            $location.path("/");
        },

        getLoggedInStatus: function () {
            if (angular.isUndefined($cookieStore.get("loggedInStatus"))) {
                return false
            }
            else {
                return $cookieStore.get("loggedInStatus");
            }
        },
        getUserId: function () {
            if (angular.isUndefined($cookieStore.get("userId"))) {
                return '';
            }
            else {
                return $cookieStore.get("userId");
            }
        },
        getUserData: function () {
            if (angular.isUndefined($cookieStore.get("userData"))) {
                return {};
            }
            else {
                return $cookieStore.get("userData");
            }
        }
    };
}]);