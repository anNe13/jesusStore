angular.module("profile").factory("profileService", [ "$http", function ($http) {
    return {

        getUserInfo : function (id) {
            return $http.get("http://nackbutik.azurewebsites.net/api/customer/", id);
        }

    };
}]);