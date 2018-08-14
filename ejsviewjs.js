var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

app.get('/profile/:name', function(req, res) {
    var otherData = {
        job: "ninja", 
        email: "nanda_is_a_ninja@gmail.com",
        hobbies: ["eating", "fighting", "reading"]
    }
    res.render('profile', { person: req.params.name, data: otherData });
});

app.get('/contact', function(req, res) {   
    res.render('contact');
});

app.post('/contact', urlencodedParser, function(req, res) {
    console.log(req.body);
    res.render('contact', {status: "success"});
});

app.listen(3000);