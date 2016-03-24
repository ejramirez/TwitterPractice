console.log('The bot is starting...');

var Twit = require('twit');

var config = require('./config'); //Grabs from config.js
var T = new Twit(config);


//---Tweets based on followed event, tweets to user who followed---
//Setting up a user stream
var stream = T.stream('user');
//Anytime someone follows me
stream.on('follow', followed);

function followed(eventMsg){
    console.log("Follow Event!");
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    tweetIt('.@' + screenName + ' Thank you for following!');
}

//---This posts a tweet to twitter---

setInterval(tweetIt, 1000*20); //Tweets every 20 seconds

//tweetIt();

//This posts a tweet to twitter
function tweetIt(txt){
    var tweet = {
        status: txt
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err,data,response){
        if(err){
            console.log("Something went wrong!");
            console.log(err);
        }else{
            console.log("It worked!");
        }
    }
}

//---This Searches for tweets of a user---
/*
var params = {
    q: 'totalbiscuit since:2016-3-1', count: 15
}

T.get('search/tweets', params, gotData);

function gotData(err,data,response){
    var tweets = data.statuses;
    for(var i = 0; i < tweets.length; i++){
        console.log(tweets[i].text);
    }
}
*/