angular.module("edit").factory("editService", ["$http", "$cookieStore", function ($http, $cookieStore) {
    return {

        editCustomer: function (id, editedUser) {
            return $http.put("http://nackbutik.azurewebsites.net/api/customer/" + id, editedUser).then(function (response) {
                var userData = $cookieStore.get("userData");

                userData.firstName = editedUser.firstName;
                userData.lastName = editedUser.lastName;
                userData.email = editedUser.email;
                userData.phone = editedUser.phone;
                userData.city = editedUser.city;
                userData.postalCode = editedUser.postalCode;
                userData.address = editedUser.address;

                $cookieStore.put("userData", userData);


            }, function (response) {
                console.log("Unable to update user data")
            })

        }

    };
}]);