var io = require('socket.io')();

io.on('connection', function(socket){
  socket.emit('connected', 'user connected');
  
  socket.on('currentRoom', function (currentRoom){
    socket.join(currentRoom);
  })
  
  socket.on('chatMsg', function ())
  
})

module.exports = io;