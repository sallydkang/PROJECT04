(function () {
  angular.module('salTV')
    .factory('homeFactory', homeFactory)

  function homeFactory() {
    var factory = {};
    var socket = io();
    factory.room = 'home';

    socket.on('connected', function (msg) {
      console.log(msg);
    })
    
    socket.emit('currentRoom', factory.room);
    
    return factory;
  }
})();