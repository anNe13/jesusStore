angular.module("profile").controller("orderInfoController", [
    "$scope", "$routeParams", "$location", "profileService", "loginService", "productService", "orderInfoService", function
        ($scope, $routeParams, $location, profileService, loginService, productService, orderInfoService) {


        orderInfoService.getOrdersByCustomerId(loginService.getUserId()).then(function (response) {
            $scope.orders = response.data;
            $scope.hasOrderHistory = true;

        });

        $scope.moreInfoClicked = false;
        $scope.selectedRow = null;

        var myTotal = 0;

        $scope.totOfAll = "hej"; // + myTotal;


        addToTotal = function (x) {
            myTotal += x;
            //console.log(myTotal);

        };
        getMyTotal = function () {
            return myTotal;
        };

        getSumAllOrders = function () {
            var totOfRow = 0;
            var eachOrder = [];
            var orders = [];
            orderInfoService.getOrdersByCustomerId(loginService.getUserId()).then(function (response) {
                orders = response.data;
            }).then(function () {
                angular.forEach(orders, function (orderRow) {
                    orderInfoService.getOrderById(orderRow.id).then(function (response) {
                        eachOrder = response.data.products;

                    })

                        .then(function () {
                            angular.forEach(eachOrder, function (product) {
                                productService.getProductById(product.productId).then(function (response) {
                                    product.price = response.data.price;

                                    totOfRow += (parseInt(product.price)) * (parseInt(product.quantity));
                                    addToTotal(totOfRow);
                                    $scope.myTotal = myTotal;

                                }) , function (errorResponse) {
                                    console.log(errorResponse.message)
                                };
                            });
                        });
                })
            })
        };

          getSumAllOrders();

        $scope.moreInfo = function (id, index) {
            $scope.selectedRow = index;
            orderInfoService.getOrderById(id).then(function (response) {
                $scope.orderArray = response.data.products;
            }).then(function () {
                var tot = 0;
                angular.forEach($scope.orderArray, function (product) {
                    productService.getProductById(product.productId).then(function (response) {
                        product.price = response.data.price;
                        product.name = response.data.name;
                        tot += (parseInt(product.price)) * (parseInt(product.quantity));
                        $scope.totSum = tot;
                    }) , function (errorResponse) {
                        console.log(errorResponse.message)
                    };

                });

            });
        };


    }
]);
