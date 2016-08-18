angular.module("components")
    .directive("ngValidateAlphabets",[function(){
        return {            
            restrict: "ACE",
            compile: function(element,attrs){
                return{
                    pre: function(scope,element,attrs){
                    element.css("color", "#ff00ff");
                    element.css("font-family","verdana");
                    },
                    post: function(scope,element,attrs){
                     element.bind('keypress',function(evt){
                        
                    if ((evt.keyCode >=97 && evt.keyCode <=112)||(evt.keyCode >=65 && evt.keyCode <=90)  ){
                            //allow if alphabets
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