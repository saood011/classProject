var events = require('events');
var path = require('path');
var emitter = new events.EventEmitter();
var command = '';

process.stdin.on('data', (arg)=>{
    command = arg.toString().trim();
    var fileName = path.basename(__filename).toString();

emitter.on('customEvent', function() {
    
    console.log(`Your filename is ${fileName}`)}
)
if(command == 'filename?'){
    emitter.emit('customEvent');
}
});


