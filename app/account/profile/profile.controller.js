angular.module("profile").controller("profileController", [
    "$scope", "$routeParams", "$location", "profileService", "loginService", "productService", function
        ($scope, $routeParams, $location, profileService, loginService, productService) {
        $scope.user = loginService.getUserData();
        // $scope.orders = [];


        profileService.getOrdersByCustomerId(loginService.getUserId()).then(function (response) {
            $scope.orders = response.data;
            $scope.hasOrderHistory = true;

        });

        $scope.moreInfoClicked = false;


        $scope.orderArray = {};

        var rowProductName = "";
        var setRname = function (x) {
            rowProductName = x;
        };
        var getRName = function () {
            return rowProductName;
        };

        var rowProductPrice = 0;
        var setRprice = function (x) {
            rowProductPrice = x;
        };
        var getRprice = function () {
            return rowProductPrice;
        };

        var rowProductQuantity = 0;
        var setRquantity = function (x) {
            rowProductQuantity = x;
        };
        var getRquantity = function () {
            return rowProductQuantity;
        }

        var orderRow = {};

        var setRow = function (nr) {
            orderRow = {name: getRName(), price: getRprice(), quantity: getRquantity()};
            console.log(getRprice());
            $scope.orderArray[nr] = orderRow;
            orderRow = {}
        };

        $scope.moreInfo = function (id) {
            $scope.orderArray = {};

            profileService.getOrderById(id).then(function (response) {
                var orderProducts = response.data.products;

                for (var i = 0; i < orderProducts.length; i++) {
                    setRquantity(orderProducts[i].quantity);

                    productService.getProductById(orderProducts[i].productId).then(function (response) {
                        setRname(response.data.name);
                        setRprice(response.data.price);

                        console.log(response.data.id);
                    //    console.log(rowProductName);
                    //    console.log(rowProductPrice);

                    });
                    setRow(i);
                }

                $scope.moreInfoClicked = !$scope.moreInfoClicked;

            })


        }
    }

]);
