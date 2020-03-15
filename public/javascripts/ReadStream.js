// import model
var fs = require('fs');

var data = '';
/*
* create rand stream
*/
var readerStream = fs.createReadStream('../files/paly.txt');

/*
* setting encoding utf-8
*/
readerStream.setEncoding('UTF8');

readerStream.on('data', function (chunk) {
    data = data + chunk;
});

readerStream.on('end', function () {
    console.log(data);
});

readerStream.on('error', function (err) {
    console.log(err);
});

console.log('over!');