var exec = require('child_process').exec;
exec('ls -la', (err, stdout)=>{
    if(err) console.log(err);
    console.log(stdout.split(' ').filter(v=>v.includes('.')).length-2);
} );



