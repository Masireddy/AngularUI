angular.module("Qantas",["ui.router","main","login","products","register","cart"]);

angular.module("Qantas")
    .config(function($stateProvider,$urlRouterProvider){
    // we have used config function for declaring the states using $stateProvider
    // $state is used to goto provide state in eg: $state.go('home')
    var homeObj = {
         templateUrl : "Templates/home.html",
         url : "home"
    };
    var loginObj = {
        templateUrl : "Templates/login.html",
        url : "login",
        controller : "loginCtrl"
    };
    var productsObj = {
       templateUrl : "Templates/products.html",
        url : "products",
        controller : "productsCtrl"        
    };
    var registerObj = {
        templateUrl : "Templates/register.html",
        url : "register",
        controller : "registerCtrl"
    };    
    
    var cartObj = {
        templateUrl : "Templates/cart.html",
        url : "cart",
        controller : "cartCtrl"  
    };
    
    $stateProvider.state("home",homeObj);
    $stateProvider.state("products",productsObj);
    $stateProvider.state("register",registerObj);
    $stateProvider.state("login",loginObj);
    $stateProvider.state("cart",cartObj);
    
});
