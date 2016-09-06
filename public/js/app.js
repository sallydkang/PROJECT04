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


  // state change interceptor
//  app.run(function ($rootScope, $state) {
//
//    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
//      // Case 1: Access requireLogin page without a token
//      if (toState.data.requireLogin && !localStorage.token) {
//        event.preventDefault()
//        $state.go('login')
//      }
//
//      // Case 2: Access a requireLogout page with a token
//      else if (toState.data.requireLogout && localStorage.token) {
//        event.preventDefault()
//        $state.go('user')
//      }
//    })
//  })

})();