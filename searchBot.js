console.log('The bot is starting...');

var Twit = require('twit');
var fs = require('fs');

var app = require('express')();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000);

var config = require('./config'); //Grabs from config.js
var T = new Twit(config);
/*
var params = {
    q: 'totalbiscuit since:2016-3-1', count: 15
}

T.get('search/tweets', params, gotData);

function gotData(err,data,response){
    var tweets = data.statuses;
    console.log(tweets);
    //fs.writeFileSync('./result.json',tweets);
    for(var i = 0; i < tweets.length; i++){
        console.log(tweets[i].text);
    }
}
*/
var watchList = ['love', 'hate'];

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log("Connected!");
    
    var stream = T.stream('statuses/filter', { track: watchList });
    
    stream.on('tweet',function(tweet){
        io.sockets.emit('stream',tweet.text);
    });
    
});