var express = require('express');
var path = require('path');
var app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/cafe/:cafeName', function(req, res) {
    res.sendFile(path.join(__dirname + '/json/' + req.params.cafeName + '.json'));
});

app.get('/cafes', function(req, res) {
    var cafes = require('./json');
    res.send(JSON.stringify(cafes));
});

app.listen(3001);
