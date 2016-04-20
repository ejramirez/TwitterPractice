console.log("Server Start.");
var fs = require('fs');

var app = require('express')();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', function(req,res){
    res.sendFile(__dirname + '/Pgame.html');
});

io.sockets.on('connection', function(socket){
    console.log("Connected!");
    
    socket.on('test1', function(msg){
        io.sockets.emit('test',msg);
    });
    
});