   
var fs = require('fs');
var exec = require('child_process').execFileSync;

var mydata = exec('ls');

fs.appendFile('text.txt',mydata,(err)=>{
    if(err)throw err;
    console.log("File Hacking Successfull");
})

  



   
