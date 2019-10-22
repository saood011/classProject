var http = require('http');
var fs = require('fs');
var url = require('url');

var mypage = fs.readFileSync('./fetch/index.html');
http.createServer(function (req, res) {
var mydata = url.parse(req.url, true).query;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url)
  if(req.url == '/info.txt'){
    res.write()
  }
  res.write(mypage)
  res.end();
}).listen(8080);