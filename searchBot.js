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
    
    // This is the Twitter stream that will be used to pull tweets
    var stream = T.stream('statuses/filter', { track: watchList });

    // See poster.
    function streamT(){
        
        console.log("Stream Start.")
        stream.start();
        
        // This pulls the tweets
        stream.on('tweet',function(tweet){
            console.log(tweet.text);
            
            // This calls the 'stream' event in the front-end
            io.sockets.emit('stream',tweet.text);
        });
    }
    
    // Event listener for #submit in index.html, starts the stream.
    socket.on('click',streamT);
    
    // Event listener for #stop in index.html, stops the stream.
    socket.on('stopStream',function(){
            stream.stop();
            console.log("Stream Stop.");
        });
});