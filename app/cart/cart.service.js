
angular.module("cart").factory("cartService", [ "$rootScope", function ($rootScope) {

var cart = $rootScope.cartProducts;
return{

    getSum : function () {
        var sum = 0;
        for (var i = 0; i < cart.length; i++) {
            sum += (cart[i].quantity * cart[i].price);
            console.log(cart[i].price);
        }
        return sum;
    },




}



}]);