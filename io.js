var io = require('socket.io')();
var arrayLink = [];

io.on('connection', function (socket) {
  socket.emit('connected', 'user connected');
  io.emit('getRoomList', arrayLink);

  socket.on('currentRoom', function (currentRoom, userName) {
    socket.join(currentRoom);
    console.log(currentRoom);
    arrayLink.forEach(function (room) {
      if (room.roomName === currentRoom) {
        io.to(currentRoom).emit('youtubeLink', room.YTlink);
        console.log(arrayLink);
      }
    })
    io.to(currentRoom).emit('joinedMsg', userName);
  })

  socket.on('init', function (room) {
    socket.join(room);
  })

  socket.on('leaveRoom', function (room) {
    socket.leave(room);
  })


  socket.on('chatMsg', function (msg, userName, color, room) {
    io.to(room).emit('chatMsg', msg, userName, color);
  })

  socket.on('youtubeLink', function (link, customRoom) {
    var dup = false;
    for (var i = 0; i < arrayLink.length; i++) {
      if (arrayLink[i].roomName === customRoom) {
        dup = true;
      }
    }
    if (!dup) {
      setTimeout(function () {
        console.log('time')
        arrayLink = arrayLink.filter(
          function(room){
            if(room.roomName != customRoom){
              return room;
            }               
          })  
        io.emit('getRoomList', arrayLink);
      }, 900000)
      
      arrayLink.push({
        roomName: customRoom,
        YTlink: link
      });
      io.emit('getRoomList', arrayLink);
      io.to(customRoom).emit('youtubeLink', link);
    }
  })

})

module.exports = io;