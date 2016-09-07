(function () {
  angular.module('salTV')
    .controller('homeController', homeController)

  homeController.$inject = ['homeFactory', '$scope', '$http', '$state'];

  function homeController(homeFactory, $scope, $http, $state) {
    $scope.factory = homeFactory;

    $scope.loginUsername = ''
    $scope.loginPassword = ''
    $scope.registerUsername = ''
    $scope.registerPassword = ''
    $scope.errors = ''
    $scope.isLoggedin = false;

    $scope.$on('$viewContentLoaded', function(){
      if(YT){
      onYouTubeIframeAPIReady();
      }
    });
    
    $scope.login = function () {
      $http.post("/login", {
        username: $scope.loginUsername,
        password: $scope.loginPassword
      }).then(function (response) {
        if (response.data.error) {
          $scope.errors = response.data.error
        } else if (response.data.token) {
          localStorage.token = response.data.token
          $scope.factory.userName = response.data.user.username
          $scope.isLoggedin = true;
          $scope.factory.isLoggedin = true;
        }
      })
    }

    $scope.register = function () {
      $http.post("/register", {
        username: $scope.registerUsername,
        password: $scope.registerPassword
      }).then(function (response) {
        if (response.data.error) {
          $scope.errors = response.data.error
        } else if (response.data.token) {
          localStorage.token = response.data.token
          $scope.factory.userName = response.data.user.username
          $scope.isLoggedin = true;
          $scope.factory.isLoggedin = true;
        }
      })
    }
    
    $scope.chatSend = function (){
      $scope.factory.sendMsg($scope.textValue);
      $scope.textValue="";
    }
    
    $scope.onEnter = function (e){
      if(e.keyCode === 13){
        $scope.chatSend();
        console.log('enter')
      }
    }
    
    $scope.joinChat = function () {
      if($scope.factory.isLoggedin === true){
      $('#chatBox2').addClass('hide');
      $('#chatBox').removeClass('hide');
      $('#chatcontent').html("");
      $scope.factory.changeRoom($state.current.name);
      } else {
        $('#Login').modal('show');
      }
    }
  }
})();