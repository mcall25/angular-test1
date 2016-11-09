angular.module('app1').controller('shopController', function($scope, service) {

$scope.test = service.getProducts()
  .then(function(res){
    $scope.products = res;
    return $scope.products;
    console.log($scope.products);

  });
  
$scope.test = service.getProducts()
  .then(function(res){
    $scope.products = res;
    return console.log($scope.products);


  });



});
