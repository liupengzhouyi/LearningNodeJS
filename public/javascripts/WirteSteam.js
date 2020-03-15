/*
* import model
*/
var fs = require('fs');

/*
* create data
*/
var data = '1jbuuj';

/*
* create write stream
*/
var writeStream = fs.createWriteStream('../files/output.txt');

/*
* setting encoding as utf-8
*/
writeStream.write(data, 'UTF8');

/*
* setting stream end
*/
writeStream.end();


writeStream.on('finish', function () {
    console.log('over!');
});

writeStream.on('error', function (err) {
    console.log(err);
});

console.log('-over!');