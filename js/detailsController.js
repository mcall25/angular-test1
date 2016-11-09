angular.module('app1').controller('detailsController', function($scope, service, $stateParams){

$scope.getDetails = service.getDetails($stateParams.id)
.then(function(res){
  $scope.details = res;
  })

})
