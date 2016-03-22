var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('Hello World!');
});

app.listen(3000,function(){
   console.log('Example app listening on port 3000!'); 
});

/*
var http = require('http'),
    fs = require('fs');
var express = require('express');
var app = express();

app.use(express.bodyParser());

app.get('/', function(req, res){
    console.log('GET /');
    var html = fs.readFileSync('index.html');
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end(html);
});

app.post('/', function (req, res) {
    console.log('POST /');
    console.dir(req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('thanks');
});

port = 8080;
app.listen(port);
console.log('Listening at http://localhost:' + port);


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8080);
});
*/