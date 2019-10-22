var http = require('http');
var url = require('url');
var fs = require('fs')


 http.createServer(function (req, res) {
  res.writeHead(255, {'Content-Type': 'text/html'});
  var mydata = url.parse(req.url, true).query;
  var textline = mydata.name + ' ' +mydata.lname+ ' ' +mydata.telephone + '-' +'\n';
  if(false){
    console.log('no script');
  }else{
    console.log('contain script');
  }
  //console.log(textline.split('>') );
  var myread = fs.readFileSync('./datahttp.txt');
  var resultFirst = myread.includes(textline);
  if(resultFirst){
    res.write('User already exits');

  }else{
    fs.appendFileSync("datahttp.txt", textline );
  }
  
res.end(fs.readFileSync('./datahttp.txt'));

}).listen(3444);
console.log('Server is running...');


