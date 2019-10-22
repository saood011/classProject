var fs = require('fs');
var data = fs.readFileSync('test.txt');
var test2 = fs.writeFile('test2.txt',data, (err)=>{
    if(err)throw err;
})
