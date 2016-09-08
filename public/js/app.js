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
      .state('kpop', {
        url: '/kpop',
        controller: 'homeController',
        templateUrl: '/views/kpop.html'
      })
      .state('EDM', {
        url: '/EDM',
        controller: 'homeController',
        templateUrl: '/views/EDM.html'
      })
      .state('CNN', {
        url: '/CNN',
        controller: 'homeController',
        templateUrl: '/views/CNN.html'
      })
      .state('customRoom', {
        url: '/customRoom',
        controller: 'homeController',
        templateUrl: '/views/customRoom.html'
      })
  })

})();