var fs = require('fs');

var readerStream1 = fs.createReadStream('../files/paly.txt');

var readerStream2 = fs.createReadStream('../files/output.txt');

var writeStream = fs.createWriteStream('../files/all.txt');

readerStream1.pipe(writeStream);
