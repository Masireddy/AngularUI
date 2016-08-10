angular.module("cart")
    .controller("cartCtrl",["$scope","$rootScope","productSvc",function($scope,$rootScope,productSvc){
        $scope.cartProducts = productSvc.cartItems(); 
        $scope.clearCart = function(item){
        $scope.cartProducts = _.without($scope.cartProducts, _.findWhere($scope.cartProducts, item));
        var index = productSvc.cartItems().indexOf(item);
        productSvc.cartItems().splice(index,1);
        $rootScope.$broadcast("REMOVED_ITEM_FROM_CART",$scope.cartProducts);
        }
        
    }]);