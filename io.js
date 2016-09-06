var io = require('socket.io')();

io.on('connection', function(socket){
  socket.emit('connected', 'user connected');
  
  socket.on('currentRoom', function (currentRoom, userName){
    socket.join(currentRoom);
    io.to(currentRoom).emit('joinedMsg', userName);
  })
  
  socket.on('init', function(room){
    socket.join(room);
  })
  
  socket.on('leaveRoom', function (room){
    socket.leave(room);
  })
  
  socket.on('chatMsg', function (msg, userName, color, room){
    io.to(room).emit('chatMsg', msg, userName, color);
  })
  
})

module.exports = io;