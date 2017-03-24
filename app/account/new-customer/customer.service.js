angular.module("customer").factory("customerService", ["$http", function ($http) {
    return {

        createAccount: function (customer) {
            return $http.post("http://nackbutik.azurewebsites.net/api/customer", customer);

        },

    };
}]);