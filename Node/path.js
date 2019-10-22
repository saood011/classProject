var path = require('path');
console.log(path.basename(__filename));
console.log(path.basename(__dirname));
var newPath = path.join(__dirname,'t1','t2');
console.log(newPath);
var pathArray = newPath.split('/');
console.log(pathArray);