angular.module('app1').service('service', function($http){
    var baseUrl = 'http://practiceapi.devmounta.in/products/';

    this.getProducts = function() {
      return $http( {
          method: "GET",
          url: baseUrl
          }).then(function(response){
            return response.data;
      });
    };
    this.getDetails = function(id) {
      return $http( {
          method: "GET",
          url: baseUrl + id
          }).then(function(response){
            return response.data;
      });
    };
});
