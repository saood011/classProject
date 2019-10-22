var fs = require('fs');

var data = fs.readFileSync('user.log');

var i = 0;
while(i < 200000){
    fs.appendFileSync('user.log', data)
    i++;
}
console.log('File Writing successful');

process.exit();
