var http = require('http');
var myMod = require('./myNameModule');
http.createServer(function (req, res) {
  console.log(myMod.name());

  res.writeHead(255, {'Content-Type': 'text/html'});
  res.end('Here is My Name module:' + ' ' + myMod.name());

}).listen(8080);