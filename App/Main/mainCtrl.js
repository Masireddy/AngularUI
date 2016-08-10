angular.module("main")
    .controller("mainCtrl",["$scope","$rootScope","authenticateSvc","$state",function($scope,$rootScope,authenticateSvc,$state){
    $scope.itemCount = 0;
    $rootScope.$on("USER_LOGGEDIN",function(event,args){
            $scope.loggedUserDetails= authenticateSvc.getUserDetails();
        });
    $rootScope.$on("PRODUCT_ADDED_TO_CART",function(event, args){
        $scope.itemCount = args.length;      
    });
    
    $rootScope.$on("REMOVED_ITEM_FROM_CART",function(event, args){
        $scope.itemCount = args.length;
        
    });
    
    $scope.logOut = function() {        
        $scope.loggedUserDetails=authenticateSvc.logOut();
        $state.go("home");
        
    }
    }]);
