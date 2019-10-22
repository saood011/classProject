var fs = require('fs');

var size1 = fs.statSync('path.js');
var size2 = fs.statSync('process.js');

var sizeOfPath = size1.size;
var sizeOfProcess = size2.size;

if(sizeOfPath> sizeOfProcess) return console.log('path.js');
console.log('process.js');


