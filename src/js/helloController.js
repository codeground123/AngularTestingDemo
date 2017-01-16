/**
 * Created by rupakulr on 1/13/2017.
 */


myModule.controller("helloController", function ($scope, quoteFactory) {


    $scope.firstName = "Phani Kumar";

    $scope.quotes = [];

    quoteFactory.getQuotes().then(function(data) {
        $scope.quotes = data;
    }).catch(function() {
        $scope.error = 'unable to get the quotes';
    });
});