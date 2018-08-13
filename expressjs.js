var express = require('express');

var app = express();

app.get('/admin', function(req, res) {
    res.send("This is the admin page");
});

app.get('/profile/:name', function(req, res) {
    res.send("You requested a profile with name: " + req.params.name);
});

app.get('/user', function(req, res) {
    var pageElements = "<html><body><h2>" + 
    "Welcome " + req.query.username +
    "</h2><br>This is a demonstration of queryString(RequestParams) extraction</body></html>"
    res.send(pageElements);
});

app.get('/getindexfile', function(req, res) {
    res.sendFile(__dirname + "/resources/html/index.html");
});

app.listen(3000);