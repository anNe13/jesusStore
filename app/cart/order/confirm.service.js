angular.module("confirm").factory("confirmService", [ "$http", function ($http) {

    return {
        sendOrder : function(order) {
            return $http.post("http://nackbutik.azurewebsites.net/api/order", order).then(function (response) {


            })}
        }
    }
]);