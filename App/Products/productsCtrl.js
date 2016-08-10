angular.module("products")
    .controller("productsCtrl",["$scope","$rootScope","productSvc",function($scope,$rootScope,productSvc){
    $scope.products = productSvc.getProducts();
    $scope.addItemsToCart = function(item) {
       productSvc.myCart(item);
       $rootScope.$broadcast("PRODUCT_ADDED_TO_CART",productSvc.cartItems());
    } 
    }]);