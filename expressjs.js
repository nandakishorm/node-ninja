var express = require('express');

var app = express();

app.get('/admin', function(req, res) {
    res.send("This is the admin page");
});

app.get('/profile/:id', function(req, res) {
    res.send("You requested a profile with id: " + req.params.id);
});

app.listen(3000);