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
      .state('Bloomberg', {
        url: '/Bloomberg',
        controller: 'homeController',
        templateUrl: '/views/Bloomberg.html'
      })
      .state('philip', {
        url: '/philip',
        controller: 'homeController',
        templateUrl: '/views/philip.html'
      })
      .state('chillhop', {
        url: '/chillhop',
        controller: 'homeController',
        templateUrl: '/views/chillhop.html'
      })
      .state('mixhound', {
        url: '/mixhound',
        controller: 'homeController',
        templateUrl: '/views/mixhound.html'
      })
      .state('trapking', {
        url: '/trapking',
        controller: 'homeController',
        templateUrl: '/views/trapking.html'
      })
      .state('trendingMusic', {
        url: '/trendingMusic',
        controller: 'homeController',
        templateUrl: '/views/trendingMusic.html'
      })
      .state('chillmix', {
        url: '/chillmix',
        controller: 'homeController',
        templateUrl: '/views/chillmix.html'
      })
      .state('customRoom', {
        url: '/customRoom',
        controller: 'homeController',
        templateUrl: '/views/customRoom.html'
      })
  })

})();