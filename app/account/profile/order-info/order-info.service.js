angular.module("profile").factory("orderInfoService", [ "$http", function ($http) {
    return {

        getOrdersByCustomerId: function (customerId) {
            return $http.get("http://nackbutik.azurewebsites.net/api/order?customerid=" + customerId);
        },
        getOrderById : function (id) {
            return $http.get("http://nackbutik.azurewebsites.net/api/order/" + id)
        }

    };
}]);