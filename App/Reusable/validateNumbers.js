angular.module("components")
    .directive("ngValidateNumbers",[function(){            
         return {
             restrict: "ACE",
             compile : function(element,args){       
                 return {                     
                     pre: function(scope,element,attrs){
                         element.css("font-weight","bold");
                         // here we can write css
                     },
                     post: function(scope,element,attrs){
                         element.bind("keypress",function(evt){
                             if (evt.keyCode >= 48 && evt.keyCode <=57){ 
                                 console.log(attrs);
                             }
                             else {
                                 evt.preventDefault();
                             }
                             
                             
                         })
                     }
                     
                 }
                 
             }
             
         }
    }]);