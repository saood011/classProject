var fs = require('fs');
var mydata = 'Hello new file';
fs.writeFile('test.txt', mydata, (err)=>{
    if(err)throw err;
    console.log('successfully written to file');
})