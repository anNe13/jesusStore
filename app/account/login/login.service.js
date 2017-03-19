


angular.module("login").factory("loginService", ["$http", "$location", "$cookies",   function ($http, $location, $cookies) {
    var userId = '';
    var userLoggedIn = false;
    var userData ={};


    return {


        serverLogin: function (user) {


            return $http.post("http://nackbutik.azurewebsites.net/api/customer/login", user).then(function (response) {

                userId = response.data.customerId;
                userData = response.data;
                $location.path("/profile");
                userLoggedIn = true;

            });

        },
        logout : function () {
          userId = '';
          userLoggedIn = false;
          userData.length = 0;
        },

        getLoggedInStatus: function () {

            return userLoggedIn;
        },
        getUserId : function () {

            return userId;
        },
        getUserData : function () {
            return userData;
        }



    };
}]);