angular.module("register")
    .controller("registerCtrl",["$scope",function($scope){
        var countriesList = [
                                {
                                    countryName : "India",
                                    countryCode : "IN",
                                    isdCode     : "+91"
                                    
                                },
                                {
                                    countryName : "United States of America",
                                    countryCode : "US",
                                    isdCode     : "+1"
                                    
                                },
                                {
                                    countryName : "Australia",
                                    countryCode : "AUS",
                                    isdCode     : "+61"
                                    
                                }
            
        ];
    $scope.countries = countriesList;
        
    }]);