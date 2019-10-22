var exec = require('child_process').exec;
var fs = require('fs');

var data = fs.readFileSync('./test.txt').toString();
fs.writeFile('../test.txt', data, function(err){
    if(err)throw err;
    console.log('Task Done!');
});
exec('rm ./test.txt',(err)=>{
    if(err)throw err;
});