console.log('The bot is starting...');

var Twit = require('twit');
var fs = require('fs');
var io = require('socket.io');

var config = require('./config'); //Grabs from config.js
var T = new Twit(config);

var params = {
    q: 'totalbiscuit since:2016-3-1', count: 15
}

T.get('search/tweets', params, gotData);

function gotData(err,data,response){
    var tweets = data.statuses;
    console.log(tweets);
    fs.writeFileSync('./result.json',tweets);
    for(var i = 0; i < tweets.length; i++){
        console.log(tweets[i].text);
    }
}