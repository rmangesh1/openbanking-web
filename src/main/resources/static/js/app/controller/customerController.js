openBankingApp.controller('customerController', ['$scope' , 'customerService', function($scope, customerService) {
    $scope.customerId="";
    $scope.customer = null;

    $scope.getCustomer = function () {
        customerService.getCustomer($scope.customerId).then(function(response) {
            $scope.customer = response;
            console.log($scope.customer);
        });

    }
}]);