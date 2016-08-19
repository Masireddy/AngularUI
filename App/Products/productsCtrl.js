angular.module("products")
    .controller("productsCtrl",["$scope","$rootScope","productSvc",function($scope,$rootScope,productSvc){
   // $scope.products = productSvc.getProducts();
     productSvc.getProducts()   
          .then(function(response){
            $scope.products = response ;
    })
          .catch(function(response){
            $scope.error = response ;
     })
          .finally(function(response){
            console.log("I am executed finally");
     }) ;  
        
    $scope.addItemsToCart = function(item) {
       productSvc.myCart(item);
       $rootScope.$broadcast("PRODUCT_ADDED_TO_CART",productSvc.cartItems());
    } 

    /*
        function changeCriteria(field){
        console.log(field);
        $scope.sortCriteria = field;
        if ($scope.sortCriteria === field) {            
            $scope.sortCriteria = "-"+field;
            }
        else {
            $scope.sortCriteria = field;            
        }        
            
            
        }
        this.changeCriteria = changeCriteria();
        */
    $scope.sortCriteria = "";
    $scope.changeCriteria = function(item) {            
        if ($scope.sortCriteria === item) {            
            $scope.sortCriteria = "-"+item;
        }
        else {
            $scope.sortCriteria = item;            
        }
    }
    
    }]);