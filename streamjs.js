var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/resources/text/readFile.txt');
var myWriteStream = fs.createWriteStream(__dirname + '/resources/text/writeFile.txt')

myReadStream.on('data', function(chunk){
    console.log("new chunk recieved!!");
    console.log(chunk);
    myWriteStream.write(chunk);
});

var sendSomeDataToClient = function() {
    var http = require('http');
    var server = http.createServer(function(req, res){
        console.log("Request made from url: " + req.url);
        
        res.writeHead(200, {'Content-Type': 'text/plain'});        
        var myReadStreamForClient = fs.createReadStream(__dirname + '/resources/text/readFile.txt');
        myReadStreamForClient.pipe(res);
    });

    server.listen(3000, '127.0.0.1');
    console.log("Hey there, now listning to port 3000!!!");
}

module.exports.sendSomeDataToClient = sendSomeDataToClient;

//We can also rewrite the above logic using a node feature called the 'pipes' in efficient way like below,
// myReadStream.pipe(myWriteStrseam);