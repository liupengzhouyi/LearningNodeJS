var events = require('events');

var EventEmitter = events.EventEmitter;

var event = new EventEmitter();

event.on('object01', function () {
    console.log('Hello World!');
});

setTimeout(function () {
    event.emit('object01');
}, 1000);

event.on('object02', function (number1, number2) {
    console.log('object02:', ((number1) + number2).toString());
});

event.emit('object02', 100, 234);

event.once('object03', function () {
    console.log('ones time');
});
event.emit('object03');
event.emit('object03');

var callback = function () {
    console.log('useing me!');
};

event.on('object04', callback);
event.emit('object04');

event.removeListener('object04', callback);
event.emit('object04');

event.emit('error');