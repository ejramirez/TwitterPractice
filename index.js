//var Twat = require('twat');



//links to hello.js ./ is current dir and hello is the js file being used
/*
var hello = require('./hello');
hello.world();
*/

//THIS WORKS!!!!!!!!!!!
var twitter = require('ntwitter');

var t = new twitter({
    consumer_key: 'BnJVnuSfMRbhhri9vWI2uxAuX',
    consumer_secret: 'zGS87obEiSuBZahj8cG5lCUSw4a9wz3oMfsvqxqw7YorQQIxIW',
    access_token_key: '3821813303-HPZqzIWN2hVR549xWdcSEB09IuhTsdi2AR1B16c',
    access_token_secret: 'hZwoGcZpd1oFxDQMZ1kmSZ3zdkC1CGe41RNIxiylWzlZM'
});

t.stream('statuses/filter', {track: ['awesome', 'cool', 'rad', 'gnarly', 'groovy']},
        function(stream){
    stream.on('data', function(tweet){
        console.log(tweet.text);
    });
}
        );

/*
var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200);
    res.end('Hello htp');
});
server.listen(8080);
*/

/*

var Twat = require('twat');
    
    var twit = new Twat({
    consumer_key: 'BnJVnuSfMRbhhri9vWI2uxAuX',
    consumer_secret: 'zGS87obEiSuBZahj8cG5lCUSw4a9wz3oMfsvqxqw7YorQQIxIW',
    access_token_key: '3821813303-HPZqzIWN2hVR549xWdcSEB09IuhTsdi2AR1B16c',
    access_token_secret: 'hZwoGcZpd1oFxDQMZ1kmSZ3zdkC1CGe41RNIxiylWzlZM'
    });

    twit.stream('statuses/sample', function(stream){
    stream.on('tweet', function(tweet){
       console.log(tweet); 
    });
});

twit
    .verifyCredentials(function(err,data){
        console.log(data);
})
    .updateStatus('Test tweet from ntwitter/' + twitter.VERSION,
                 function(err,data){
   console.log(data); 
});


twit.search('nodejs OR #node', {}, function(err,data){
    console.log(data);
});

$(document).ready(function(){
    console.log("Doc Ready!");
    
    $('#submit').click(function(){
        var search_term = {
            q: 'bowery'
        };
        console.dir(search_term);
        search(search_term);
    });
    
});


function search(search_term){
    console.log("Searching for ");
    console.dir(search_term);
    
    $.ajax({
        url: 'http://search.twitter.com/search.json?' + $.param(search_term), dataType: 'jsonp', success: function(data){
            console.dir(data);
            
            for(item in data['results']) {
                $('#tweets').append('<li>' + data['results'][item]['text'] + '</li>');
            }
        }
    });
}
*/


