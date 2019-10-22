var fs = require('fs');
var writeStream = fs.createWriteStream('myfile.txt',{flags:'a'});
var readStream = fs.createReadStream('user.log');
var counter = 0;
readStream.on('data', function(chunk){
   counter++;

   if(counter >=15 && counter <=20){
      fs.appendFileSync('myfile.txt', `\n ############This is the start of a new chunk###########\n`);
      writeStream.write(chunk, (err)=>{
         if(err)throw err;
      })

   }

   console.log(counter);
})

