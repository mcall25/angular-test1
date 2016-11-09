angular.module('app1').directive('productDirective', function(){
    return {
      restrict: 'AE',
      templateUrl: './views/product-tmpl.html',
      scope: {
        vidgame: '=',
        getdeets: '&'

      }
    };
});
