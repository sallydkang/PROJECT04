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
      .state('hiSessions', {
        url: '/hiSessions',
        controller: 'homeController',
        templateUrl: '/views/hiSessions.html'
      })
      .state('trendingRap', {
        url: '/trendingRap',
        controller: 'homeController',
        templateUrl: '/views/trendingRap.html'
      })
      .state('spinninRecords', {
        url: '/spinninRecords',
        controller: 'homeController',
        templateUrl: '/views/spinninRecords.html'
      })
      .state('liveEDM', {
        url: '/liveEDM',
        controller: 'homeController',
        templateUrl: '/views/liveEDM.html'
      })
      .state('Marshmello', {
        url: '/Marshmello',
        controller: 'homeController',
        templateUrl: '/views/Marshmello.html'
      })
      .state('vevo', {
        url: '/vevo',
        controller: 'homeController',
        templateUrl: '/views/vevo.html'
      })
      .state('foxNews', {
        url: '/foxNews',
        controller: 'homeController',
        templateUrl: '/views/foxNews.html'
      })
      .state('cherokee', {
        url: '/cherokee',
        controller: 'homeController',
        templateUrl: '/views/cherokee.html'
      })
      .state('bestMovie', {
        url: '/bestMovie',
        controller: 'homeController',
        templateUrl: '/views/bestMovie.html'
      })
      .state('horror', {
        url: '/horror',
        controller: 'homeController',
        templateUrl: '/views/horror.html'
      })
      .state('action', {
        url: '/action',
        controller: 'homeController',
        templateUrl: '/views/action.html'
      })
      .state('sad', {
        url: '/sad',
        controller: 'homeController',
        templateUrl: '/views/sad.html'
      })
      .state('LoL', {
        url: '/LoL',
        controller: 'homeController',
        templateUrl: '/views/LoL.html'
      })
      .state('fantastic', {
        url: '/fantastic',
        controller: 'homeController',
        templateUrl: '/views/fantastic.html'
      })
      .state('faze', {
        url: '/faze',
        controller: 'homeController',
        templateUrl: '/views/faze.html'
      })
      .state('MrTL', {
        url: '/MrTL',
        controller: 'homeController',
        templateUrl: '/views/MrTL.html'
      })
      .state('chucky', {
        url: '/chucky',
        controller: 'homeController',
        templateUrl: '/views/chucky.html'
      })
      .state('dunkirk', {
        url: '/dunkirk',
        controller: 'homeController',
        templateUrl: '/views/dunkirk.html'
      })
      .state('customRoom', {
        url: '/customRoom',
        controller: 'homeController',
        templateUrl: '/views/customRoom.html'
      })
  })

})();