var fs = require('fs');
var zlib = require('zlib');

var readStream = fs.createReadStream('user.log');
var writeStream = fs.createWriteStream('result.txt.gz');

var unzip = zlib.createGunzip();
var Zip = zlib.createGzip();

readStream.pipe(Zip).pipe(writeStream);