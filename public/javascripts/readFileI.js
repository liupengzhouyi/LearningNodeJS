var fs = require('fs');

fs.readFile('../files/paly.txt', function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data.toString());
    }
});

console.log('over!');
