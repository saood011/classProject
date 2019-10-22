var fs = require('fs');
var readStream = fs.createReadStream('user.log');
var counter = 0;
var chunk;
readStream.on('readable', function(){
   if((chunk = readStream.read()) != null){
       console.log(`Chunk: ${chunk.length} \t` )
       counter++;
   }
});
readStream.on('end', function(){
   counter++;
   console.log('\n number of chunks counted successfully!\n');
   console.log(`Total chunks: ${counter}\n`);
   //console.log('Last chunk length: '+readStream.read().toString().length+"\n");
   process.exit();
});