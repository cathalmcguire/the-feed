var express = require('express');
var path = require('path');
var app = express();

var routes = {
    cafes: {
        cafe: {

        }
    }
};

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.get('*bundle.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/bundle.js'));
});

app.get('*bundle.js.map', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/bundle.js.map'));
});

app.get('*images/:imageName', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/static/images/' + req.params.imageName));
});

app.get('/:tier1/:tier2', function(req, res) {
    if (req.params.tier1 === 'cafes') {
        res.sendFile(path.join(__dirname + '/dist/index.html'));
    }
});

app.get('*', function(req, res) {
    res.redirect(301, '/');
});

app.listen(3000);
