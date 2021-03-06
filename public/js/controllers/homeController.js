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
    $scope.roomName = ''
    $scope.youtubeLink = ''
    $scope.nonCustom = true;
    $scope.joinRoomName = ''


    $(document).ready(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

    $('li').on('click', function () {
      $scope.errorMsg = '';
      stateHome();
      $scope.$apply();
    })

    $scope.navbarLink = function () {
      if ($scope.isLoggedin && stateHome()) {
        return true;
      } else {
        return false;
      }
    }

    $scope.$on('$viewContentLoaded', function () {
      var count = 0;
      var intID = setInterval(function () {
        count++;
        if (count > 3) {
          clearInterval(intID);
        }
        if (YT && $scope.nonCustom) {
          clearInterval(intID);
          onYouTubeIframeAPIReady();
        }
      }, 1000);
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
          $('#Login').modal('hide');
        }
      })
    }

    function stateHome() {
      if ($state.current.name === 'home') {
        $scope.stateHome = true;
        return true;
      } else {
        $scope.stateHome = false;
        return false;
      }
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
          $('#Register').modal('hide');
        }
      })
    }

    $scope.chatSend = function () {
      $scope.factory.sendMsg($scope.textValue);
      $scope.textValue = "";
    }

    $scope.onEnter = function (e) {
      if (e.keyCode === 13) {
        $scope.chatSend();
      }
    }

    $scope.joinChat = function () {
      if ($scope.factory.isLoggedin === true) {
        $('#chatBox2').addClass('hide');
        $('#chatBox').removeClass('hide');
        $('#chatcontent').html("");
        $scope.factory.changeRoom($state.current.name);
      } else {
        $('#Login').modal('show');
      }
    }

    $scope.makeRoom = function () {
      if ($scope.factory.isLoggedin === true && $scope.roomName && $scope.youtubeLink.match(/w{3}/g)) {
        var bool = false;
        if ($scope.factory.roomList) {
          var roomList = $scope.factory.roomList;
        } else {
          roomList = [];
        }
        for (var i = 0; i < roomList.length; i++) {
          if (roomList[i].roomName === $scope.roomName) {
            bool = true;
            $scope.errorMsg = 'Room Name already exists'
          }
        }

        if (!bool) {
          $scope.nonCustom = false;
          $('#makeRoom').modal('hide');
          var num = $scope.youtubeLink.search(/=/i);
          var link = $scope.youtubeLink.slice(num + 1, ($scope.youtubeLink.length));
          $scope.factory.youtubeLink = link;
          $scope.factory.changeCustomRoom($scope.roomName);
        }

      } else if (!$scope.youtubeLink.match(/w{3}/g)) {
        $scope.errorMsg = 'Not a valid Youtube link'
      } else {
        $scope.errorMsg = 'Please do not leave blanks'
      }

    }

    $scope.joinRoom = function () {
      if ($scope.factory.isLoggedin === true && $scope.joinRoomName) {
        $scope.nonCustom = false;
        var roomList = $scope.factory.roomList;
        console.log(roomList);
        for (var i = 0; i < roomList.length; i++) {
          if (roomList[i].roomName === $scope.joinRoomName) {
            var YTlink = roomList[i].YTlink
            $scope.factory.joinRoom($scope.joinRoomName, YTlink)
            $('#joinRoom').modal('hide');
          }
        }
        $scope.errorMsg = "Room does not exist"

      }
    }
    
    $scope.musicTab = function(){
      $('#musicTab').removeClass('hide');
      $('#showsTab').addClass('hide');
      $('#gamesTab').addClass('hide');
      $('#moviesTab').addClass('hide');
    }
    
    $scope.showsTab = function(){
      $('#showsTab').removeClass('hide');
      $('#musicTab').addClass('hide');
      $('#gamesTab').addClass('hide');
      $('#moviesTab').addClass('hide');
    }
    
    $scope.moviesTab = function(){
      $('#moviesTab').removeClass('hide');
      $('#musicTab').addClass('hide');
      $('#showsTab').addClass('hide');
      $('#gamesTab').addClass('hide');
    }
    
     $scope.gamesTab = function(){
      $('#gamesTab').removeClass('hide');
      $('#moviesTab').addClass('hide');
      $('#musicTab').addClass('hide');
      $('#showsTab').addClass('hide');
    }
  }
})();