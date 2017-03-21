
angular.module("cart").factory("cartService", [ "$cookieStore", function ($cookieStore) {


return{

    getSum : function () {
        var cart = $cookieStore.get("cartProducts", this.cartProducts);
        var sum = 0;
        for (var i = 0; i < cart.length; i++) {
            sum += (cart[i].quantity * cart[i].price);
            console.log(cart[i].price);
        }
        return sum;
    },





}



}]);