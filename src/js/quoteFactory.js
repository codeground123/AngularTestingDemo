
myModule.factory("quoteFactory", function($http, $q){


    var defer = $q.defer();
    var getQuotes = function(){
        $http.get("http://localhost:3412/quotes").then(function(response){
            defer.resolve(response.data);
        }, function(response){
            defer.reject(response)
        });

        return defer.promise;
    };

    return {
        getQuotes : getQuotes
    }

});