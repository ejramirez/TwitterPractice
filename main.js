var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/main.html');
});

io.on('connection', function(socket){
    //When a user connects
    console.log("A User Connected!");
    
    //When a user sends a message
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
    
    //When a user disconnects
    socket.on('disconnect',function(){
        console.log("A user disconnected!");
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});