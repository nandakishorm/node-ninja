var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log("Request made from url: " + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});

    if(req.url === "/home" || req.url === "/") {
        fs.createReadStream(__dirname + "/resources/html/index.html").pipe(res);
    } else if(req.url === "/contacts") {
        fs.createReadStream(__dirname + "/resources/html/contact.html").pipe(res);
    } else if(req.url === "/api/user") {
        var user = {
            name: "James Bond",
            email: "bond.james@007.com",
            address: "England"
        };
        res.writeHead(200, {'Content-Type': "application/json"});
        res.end(JSON.stringify(user));
    }
});

server.listen(3000, '127.0.0.1');
console.log("Hey there, now listning to port 3000!!!");

module.exports.server = server;