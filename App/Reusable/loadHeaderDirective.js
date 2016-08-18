angular.module("components")
    .directive("ngLoadHeader",[function(){
    return {
            restrict: "A",
            templateUrl: "Templates/header.html",
            compile: function(element,attrs){
                //console.log("Hey i am in compile func.");
                return {
                pre: function(scope,element,attrs){
                    //console.log("Hey i am in pre");
                    },
                post: function(scope,element,attrs){
                    //console.log("Hey i am in post");
                    }
                }
            }
            
        /*link: function(scope,element,args){
                console.log(element);
            }*/
            /*template: "<h1>This is h1 tag </h1>"*/
            /*template: '<h1>this h1 tag </h1>',*/
            
            /*replace: true,
            link: function(scope,element,attr){
                console.log("hiiiiii");
            }
            */
        
    }
    
}]);