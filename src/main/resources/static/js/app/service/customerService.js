openBankingApp.service('customerService', ['$http', function($http) {
    return {
        getCustomer: function (customerId) {
        return $http.get('customers/'+ customerId
        ).then(function(response) {
            console.log('success');
            console.log(response);
            return response.data;
        }, function(response) {
            console.log('error');
            console.log(response);
        });
    }
}
}]);