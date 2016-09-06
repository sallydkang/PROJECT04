(function () {
  angular.module('salTV')
    .factory('homeFactory', homeFactory)

  function homeFactory() {
    var factory = {};
    var socket = io();
    factory.color = randomColor();

    factory.isLoggedin = false;
    factory.room = 'home';

    socket.on('connected', function (msg) {
      console.log(msg);
    })
    
    socket.emit('init', factory.room)
    
    factory.checkLogIn = function () {
      socket.emit('currentRoom', factory.room, factory.userName);
    }

    factory.sendMsg = function (msg) {
      if(factory.isLoggedin ===true){
      socket.emit('chatMsg', msg, factory.userName, factory.color, factory.room);
      } else {
        $('#Login').modal('show');
      }
    }

    socket.on('chatMsg', function (msg, userName, color) {
      var momentTimestamp = moment.utc(msg.timestamp);
      console.log('something');
      console.log(factory.isLoggedin);
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
    }
    
    socket.on('joinedMsg', function(userName){
      $('#chatcontent').append($('<p>').html(' ' + userName + ' has joined the chat'));
    })
    
    return factory;
  }
})();