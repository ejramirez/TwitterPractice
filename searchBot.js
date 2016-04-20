console.log('The bot is starting...');

var Twit = require('twit');
var fs = require('fs');

var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000);

var config = require('./config'); //Grabs from config.js
var T = new Twit(config);

var watchList = ['love', 'hate'];

app.use("/", express.static(__dirname + '/pub'));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log("Connected!");
    
    var stream = T.stream('statuses/filter', { track: watchList });
    
    // Event Listener for #submit in index.html
    socket.on('click',function(){
        console.log("Stream Start.")
        stream.start();
        
        stream.on('tweet',function(tweet){
            // another event listener for this listener that sends data back to the client
            console.log(tweet.text);
            io.sockets.emit('stream',tweet.text);
        });
        
    });
    
    socket.on('stopStream',function(){
            stream.stop();
            console.log("Stream Stop.");
        });
});