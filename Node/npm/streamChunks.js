var fs = require('fs');
var counter = 0;
var readStream = fs.createReadStream('user.log');

readStream.once('data', function(chunk){
    console.log('File stream started')
    console.log(chunk.toString())
    counter++;
});

readStream.on('data', function(chunk){
if(chunk.toString() != null){
    counter++;    
    console.log(counter)
if(counter == 15){
    console.log(`chunk no 15: ${chunk.toString()}`);
}
}
})

readStream.on('end', function(chunk){
    console.log('Done!')
    counter++
    console.log(counter);
});
