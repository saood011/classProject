var http = require("http");
var fs = require("fs");
http.createServer((req,res) => {
       //res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      // res.setHeader("Access-Control-Allow-Headers", "http//:127.0.0.1:8080");
       res.writeHead(200, {'content-Type':'text/html'});
       if (req.url == "/data") {
           console.log("url: " + req.url);
           console.log(fs.readFileSync("./data.txt").toString());
       }
       res.end();
}).listen(4141);