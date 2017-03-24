angular.module("cart").factory("cartService", ["$cookieStore", function ($cookieStore) {


    return {

        getSum: function () {
            var cart = $cookieStore.get("cartProducts");
            var sum = 0;
            angular.forEach(cart, function (c) {
                sum += (c.quantity*c.price);
            });
            return sum;
        },

        getAmount: function () {
            var cart = $cookieStore.get("cartProducts");
            var amount = 0;
            angular.forEach(cart, function (c) {
                amount += c.quantity;
            });
            return amount;
        }


    }


}]);