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
                        // this is for supplying min and max values supplying from input element, by doing this we can make the date picker is reusable and can supply different values for each input
                    var daysConfig ={};
                    if(attrs["mindays"]){
                        daysConfig.minDate = attrs["mindays"];
                    }
                    
                    if(attrs["maxdays"]){
                        daysConfig.maxDate = attrs["maxdays"];
                    }
                      //element.datepicker({ minDate: 0, maxDate: "+120D" });
                        // the above code is for hard coding the values
                       element.datepicker(daysConfig); 
                    }
                    
                }
                
            }
            
        }
        
    }]);