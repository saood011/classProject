var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    res.writeHead(255, {'Content-Type': 'text/html'});
    switch(req.url){
        case '/':       var index = fs.readFileSync('test.txt');
                        res.write(index);
                        break;
        case '/users':  var index2 = fs.readFileSync('test2.txt');
                        res.write(index2);
                        break;
        default:        res.write("No page linked to this address");
    }
res.end();
}).listen(5555);