var http = require('http');
var url = require('url');
var fs = require('fs')


 http.createServer(function (req, res) {
  res.writeHead(255, {'Content-Type': 'text/html'});
  var mydata = url.parse(req.url, true).query;
  var textline = mydata.name + ' ' +mydata.lname+ ' ' +mydata.telephone + '-' +'\n';
  
  var myread = fs.readFileSync('./datahttp.txt');
  var resultFirst = myread.includes(textline);
  if(resultFirst){
    console.log('User already exits');
  }else{
    fs.appendFileSync("datahttp.txt", textline );
  }
  var lines = myread.toString().split('\n');
  res.write(`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>`)
  res.write(
       "<table border=1 id='saood'><tr><th>#</th><th>Fname</th><th>Lname</th><th>tel</th></tr>"
  );
  for (i = 0; i<lines.length; i++) {
       var vals = lines[i].split(" ");
       console.log("line" + i + ": " + vals);
       res.write(`
       <tr>
            <td>${i+1}</td>
            <td id="fname">${vals[0]}</td>
            <td id="lname">${vals[1]}</td>
            <td id="tele">${vals[2]}</td>
       </tr>
       `);
  };
  res.write('<button type="button">Hide/Show</button>');
  res.write(`<form action="http://localhost:4000/" method="GET">
  <label for="name">Name</label>
  <input type="text" id="name" name="name">

  <label for="lname">Last Name</label>
  <input type="text" id="lname" name="lname">

  <label for="telephone">Telephone Number</label>
  <input type="text" id="teleph" name="telephone">

</form>`)
res.write(`<button type='button' id='update'>Update</button>`)
res.write(` <script>
$(document).ready(function(){
     
     $("tr").click(function(){
          $("#name").val(
          $(this).children("#fname").text()
          );
     $("#lname").val(
          $(this).children("#lname").text()
          );
     $("#teleph").val(
          $(this).children("#tele").text()
          );
     });
     
     });

</script>`)
res.end();
}).listen(3444);
console.log('Server is running...');


