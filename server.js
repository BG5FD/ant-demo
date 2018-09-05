var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

io.on('connection', function(socket){
  socket.on('addUser', function(userCount){
    userCount++;
    io.emit('addUser', userCount);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
