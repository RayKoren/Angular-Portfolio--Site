(function(){
   angular
    .module("portfolio", [
      'ui.router',
      'portfolio.nav',
      'portfolio.footer'
    ])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider){

         $urlRouterProvider.otherwise('/');

         $stateProvider
           .state('home',{
             url: '/',
             templateUrl: '/templates/home.html',
             controller: 'homeController'
           });
         });
})();
