/*
exports.world = function(){
    console.log('Hello World');
}
*/

var placeholder;

var Twit = require('twit');
var querystring = require('querystring');
var http = require('http'),
    fs = require('fs');
var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('Hello World!');
});

app.listen(3000,function(){
   console.log('Example app listening on port 3000!'); 
});

var client = new Twit({
    consumer_key: 'BnJVnuSfMRbhhri9vWI2uxAuX',
    consumer_secret: 'zGS87obEiSuBZahj8cG5lCUSw4a9wz3oMfsvqxqw7YorQQIxIW',
    access_token: '3821813303-HPZqzIWN2hVR549xWdcSEB09IuhTsdi2AR1B16c',
    access_token_secret: 'hZwoGcZpd1oFxDQMZ1kmSZ3zdkC1CGe41RNIxiylWzlZM'
});

client.get('search/tweets', {q: 'TotalBiscuit'}, function(error,tweets,response){ //q: means query
    //console.log(tweets);
    placeholder = tweets.statuses[0].text;
    //console.log(tweets.statuses[0].text);
    console.log(tweets);
});

/*
var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write(placeholder);
    res.end();
});
server.listen(8080);
*/

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(placeholder);  
        response.end();  
    }).listen(8080);
});
