openBankingApp.controller('customerController', ['$scope' , 'customerService', function($scope, customerService) {
    $scope.customerId="";
    //$scope.customer = null;

    $scope.engagementOptions = ['DEPOSIT', 'CREDITCARD', 'MORTGAGE'];
    $scope.customerTypeOptions = ['PERSON', 'COMPANY'];

    $scope.getCustomer = function () {
        customerService.getCustomer($scope.customerId).then(function(response) {
            $scope.customer = response;
            console.log($scope.customer);
        });
    }

    $scope.patchCustomer = function() {
        var customerPatch = {email : $scope.customer.email, phone: $scope.customer.phone};
        customerService.patchCustomer($scope.customerId, customerPatch)
            .then(function(response) {
                console.log('patch response');
               console.log(response);
            });
    }
}]);