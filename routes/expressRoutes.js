var express = require('express');
var app = express();

app.get('/', function (request, response) {
    response.send('get-all');
});
app.post('/', function (request, response) {
    response.send('post-all');
});

app.post('/delete', function (request, response) {
    response.send('delete');
});

app.post('/userList', function (request, response) {
    response.send('userList');
});

app.post('/ab*cd', function (request, response) {
    response.send('abcd');
});

/*
var server = app.listen(8081, function () {
    var port = server.address().port;
    console.log('http://127.0.0.1:%s', port);
});*/

module.exports = app;