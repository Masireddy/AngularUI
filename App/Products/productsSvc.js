angular.module("products")
    .service("productSvc",["$q","$http",function($q,$http){  
    var selectedProducts = [];
    var products = []; 
            
    this.getProducts =  function(){
        var dfd =$q.defer();
        $http.get('Data/products.json')
            .then(function(response){
            products = response.data.products;
            dfd.resolve(products);
        })
            .catch(function(response){
            dfd.reject("Error occured");
        });        
        return dfd.promise;
    } 

this.myCart = function(item){
    if(!_.contains(selectedProducts,item)) {
    selectedProducts.push(item);
    }
}

 this.cartItems = function() {
    return selectedProducts;
 }


  
}]);