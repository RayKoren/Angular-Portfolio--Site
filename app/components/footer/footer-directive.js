(function(){
angular
.module('portfolio.footer')
.directive('footer', footer);
    function footer(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/footer.html',
        scope: {},
      };
      return directive;
    }
})();
