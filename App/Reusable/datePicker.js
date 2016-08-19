angular.module("components")
    .directive("ngDatePicker",[function(){        
        return{            
            restrict : "AC",
            compile : function(element,attrs){
                return {
                    pre : function(scope,element,attrs){
                        /*
                        element.datepicker({
                                showOn: "button",
                                buttonImage: "Images/images.png",
                                buttonImageOnly: true,
                                buttonText: "Select date"
                            });  
                            */
                    },
                    post : function(scope,element,attrs){
                        // this is for supplying min and max attributes from input element, by doing this we can make the date picker is reusable and can supply different values for each input
                        // attrs - represents current element attributes
                    var daysConfig ={};
                    if(attrs["mindays"]){
                        daysConfig.minDate = attrs["mindays"];
                        // here we are assigning the supplied attribute from input to objecct daysConfig properties.
                    }                    
                    if(attrs["maxdays"]){
                        daysConfig.maxDate = attrs["maxdays"];
                    }                        
                    if(attrs["month"]){
                        daysConfig.changeMonth = true;
                    }
                    if(attrs["year"]){
                        daysConfig.changeYear = true;
                    }                          
                        
                      //element.datepicker({ minDate: 0, maxDate: "+120D" });
                        // the above code is for hard coding the values and it is useful for only one input control. In order to use it for multiple places, supply config values from input control
                        
                       element.datepicker(daysConfig); 
                    }
                    
                }
                
            }
            
        }
        
    }]);