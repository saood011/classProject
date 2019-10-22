var events = require('events');
var path = require('path');
var emitter = new events.EventEmitter();
var command = '';
process.stdout.write("what event should trigger? T1, T2 or T3"+'\n')

process.stdin.on('data', (arg)=>{
    command = arg.toString().trim();

emitter.on('t1', function() {
    
    console.log(`I am event t1`)}
)
emitter.on('t2', function() {
    
    console.log(`I am event t2`)}
)
emitter.on('t3', function() {
    
    console.log(`I am event t3`)}
)
emitter.on('close',function(){
    process.exit();
})
switch(command){
    case 't1'   : emitter.emit('t1');
                break;
    case 't2'   : emitter.emit('t2');
                break;
    case 't3'   : emitter.emit('t3');
                break;
    case 'close':emitter.emit('close');
                break;
    case 'exit' : emitter.emit('close');
                break;          
}
});