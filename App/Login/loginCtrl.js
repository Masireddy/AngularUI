angular.module("login")
    .controller("loginCtrl",["$scope","authenticateSvc","$state","$rootScope",function($scope,authenticateSvc,$state,$rootScope){
        
    $scope.user = {};
    $scope.isValidUser = true;
    $scope.signIn = function(){
    var status = authenticateSvc.validateUserLogin($scope.user) ; 
    $scope.isValidUser = status.isLoggedIn;
    if ($scope.isValidUser){        
        $rootScope.$broadcast("USER_LOGGEDIN");
        $state.go("home");
    }
       
    }
    
    
    }]);