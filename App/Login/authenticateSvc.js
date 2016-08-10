angular.module("login")
    .service("authenticateSvc",[function(){
    
    var usersList = [
                    {
                        username : "srinivasareddy",
                        firstname : "Srinivasa",
                        lastname :  "reddy",
                        password : "srinu",
                        designation : "Technical Lead"
        
                    },
                    {
                        username : "bhargavreddy",
                        firstname : "Bhargav",
                        lastname :  "reddy",
                        password : "bhargav",
                        designation : "Developer"
                    }    
        
            ];    
     
    var userDetails = [{
                        firstname : "",
                        lastname : "",
                        designation : "",
                        isLoggedIn : false           
    }];
    
    var reset = function() {
        
            userDetails.firstname = "";
            userDetails.lastname = "";
            userDetails.designation = "";
            userDetails.isLoggedIn = false;
    }
    
    var validateUser = function(item){        
        var data =_.find(usersList,item);
        if (data) {
            userDetails.firstname = data.firstname;
            userDetails.lastname = data.lastname;
            userDetails.designation = data.designation;
            userDetails.isLoggedIn = true;
        }
        else {
            reset();
        }
    }
            
    this.validateUserLogin = function(item) {        
        validateUser(item);
        return userDetails;
        console.log(userDetails);
    }   
    
    this.getUserDetails = function() {
       return userDetails; 
    }
    
    this.logOut = function(){
        reset();
        return userDetails;
    }
    
    }]);