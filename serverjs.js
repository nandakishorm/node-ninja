var http = require('http');

var server = http.createServer(function(req, res){
    console.log("Request made from url: " + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hey ninjas");
});

server.listen(3000, '127.0.0.1');
console.log("Hey there, now listning to port 3000!!!");

module.exports.server = server;