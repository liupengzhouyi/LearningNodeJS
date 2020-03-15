var events = require('events');

var eventEmitter = new events.EventEmitter();

/*
* create function to
*/
var connectHandlerII = function conected() {
    console.log('link connectHandlerII success!');
    eventEmitter.emit('paly');
};

var connectHandler = function conected() {
    console.log('link connectHandler success!');
    eventEmitter.emit('connectHandlerII');
};

eventEmitter.on('eventName', connectHandler);
eventEmitter.on('connectHandlerII', connectHandlerII);

eventEmitter.on('paly', function () {
    console.log('link paly success!')
});

eventEmitter.emit('eventName');

console.log('over!');
