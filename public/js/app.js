(function () {
  var app = angular.module('salTV', ['ui.router']);

  app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home')
    
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'homeController',
        templateUrl: '/views/home.html'
      })
      .state('dance', {
        url: '/dance',
        controller: 'homeController',
        templateUrl: '/views/dance.html'
      })
      .state('customRoom', {
        url: '/customRoom',
        controller: 'homeController',
        templateUrl: '/views/customRoom.html'
      })
  })

})();