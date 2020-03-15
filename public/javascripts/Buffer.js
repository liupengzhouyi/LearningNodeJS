var buf = new Buffer(10);

len = buf.write('dfghj');

console.log(len);

console.log(buf.toString());

console.log(buf.toString('ascii'));

console.log(buf.toString('utf-8', 0, len));

var json = buf.toJSON();
console.log(json);

var object01 = new Buffer('123');
var object02 = new Buffer('123');
var object03 = new Buffer(Buffer.concat([object01, object02]));
console.log(object03);
console.log(object03.toString());

var r = object01.compare(object02);
console.log(r);

var object04 = new Buffer(10);
object03.copy(object04);
console.log(object04.toString());
console.log(object04.length);

var object05 = object04.slice(0, 6);
console.log(object05);
console.log(object05.toString());



