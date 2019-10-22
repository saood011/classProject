var http = require("http");
var fs = require('fs');

http.createServer((req,res)=>{
res.writeHead({"Content-Type" : "text/html"});
res.end(fs.readFileSync('main.html'), err=>{
    console.log(err);
})
}).listen(2222);