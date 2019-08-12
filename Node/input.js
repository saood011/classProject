var http = require('http');
var url = require('url');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  var mydata = url.parse(req.url, true).query;

  res.write('Welcome '+ mydata.fname + mydata.lname);
  res.end();

}).listen(8080);