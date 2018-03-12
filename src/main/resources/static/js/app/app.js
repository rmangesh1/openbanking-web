var openBankingApp = angular.module('openBankingApp',['ngRoute']);

openBankingApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: 'view/customer-search.html',
            controller: 'customerController'
        });
}]);