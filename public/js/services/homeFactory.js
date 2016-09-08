(function () {
  angular.module('salTV')
    .factory('homeFactory', homeFactory)

homeFactory.$inject=['$state'];

  function homeFactory($state) {
    var factory = {};
    var socket = io();
    factory.color = randomColor();

    factory.isLoggedin = false;
    factory.room = 'home';

    socket.on('connected', function (msg) {
      console.log(msg);
    })
    
    socket.emit('init', factory.room)

    factory.sendMsg = function (msg) {
      if(factory.isLoggedin ===true){
      socket.emit('chatMsg', msg, factory.userName, factory.color, factory.room);
      } else {
        $('#Login').modal('show');
      }
    }

    socket.on('chatMsg', function (msg, userName, color) {
      var momentTimestamp = moment.utc(msg.timestamp);
        msg.timestamp = moment().valueOf()
        $('#chatcontent').append($(`<i class="fa fa-commenting-o" aria-hidden="true" id="upMsg">`).html(' ' + `<span style="color: ${color};"> ${userName} </span>`+ ': ' + msg + ' ' + momentTimestamp.local().format('h:mm a')));
    })

    function randomColor() {
      return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    }
    
    factory.changeRoom = function (room){
      socket.emit('leaveRoom', factory.room);
      factory.room = room;
      socket.emit('currentRoom', factory.room, factory.userName);
      $state.go(room);
       var event = new CustomEvent('load2', {
         x: 'y'
       })
       document.dispatchEvent(event);
    }
    
    factory.changeCustomRoom = function (room){
      socket.emit('leaveRoom', factory.room);
      factory.room = room;
      socket.emit('currentRoom', factory.room, factory.userName);
      $state.go('customRoom');
      socket.emit('youtubeLink', factory.youtubeLink, factory.room)
    }
    
    factory.joinRoom = function (room, YTlink) {
      socket.emit('leaveRoom', factory.room);
      factory.room = room;
      socket.emit('currentRoom', room, factory.userName);
      $state.go('customRoom');
      socket.emit('youtubeLink', YTlink, room)
    }
    
    socket.on('youtubeLink', function (link){
      var event = new CustomEvent('load', {
        customLink: link
      })
      customLink = link
      document.dispatchEvent(event);
    })

    socket.on('getRoomList', function(arr){
      factory.roomList = arr;
      console.log(factory.roomList);
    })
    
    socket.on('joinedMsg', function(userName){
      $('#chatcontent').append($('<p>').html(' ' + userName + ' has joined the chat'));
    })
    
    return factory;
  }
})();