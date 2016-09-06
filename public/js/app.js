(function () {
  var app = angular.module('salTV', ['ui.router']);

  app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home')
    
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'homeController as home',
        templateUrl: '/views/home.html'
      })
  })

})();