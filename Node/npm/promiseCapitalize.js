var fs = require('fs');

var promise = new Promise ((resolve, reject)=> {
    fs.readFile('myfile.txt', (err, data)=>{
        if(err)reject(err);
        else resolve(data);

    });
})

promise.then((data)=>{
    fs.writeFile('promiseC.txt',data.toString().toUpperCase(), (err)=>{
        if(err)throw err;
        console.log('The Length of my file : ' + data.length);
    })
});