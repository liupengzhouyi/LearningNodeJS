var fs = require('fs');

var data = fs.readFileSync('../files/paly.txt');

console.log(data.toString());

console.log('over!');