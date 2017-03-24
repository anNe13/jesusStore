angular.module("customer").factory("customerService", [ "$http", function ($http) {
    return {

        createAccount: function(customer) {
            return $http.post("http://nackbutik.azurewebsites.net/api/customer", customer);

        },

        login: function (user) {

            return $http.post("http://nackbutik.azurewebsites.net/api/new-customer/login/", user).then(function (response) {

                //isLoggedIn = true;
                //customerIdAfterLogin = response.data.customerId;
            })

        }
    };
}]);