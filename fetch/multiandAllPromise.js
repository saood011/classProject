var fullName = ["Ahmadi Fahim",
                "Alsharaf Nidal",
                "Akhtar Saood"];
var arr = [];
for(i=0; i<=fullName.length-1; i++){
    arr.push(new Promise(function(resolve, reject){
            resolve(fullName[i]);
    }).then(result => {
        console.log(result);
        new Promise(function(resolve, reject){
                resolve(
                    [...result]
                    .reverse()
                    .join(""));
        }).then(secondResult => {
            console.log(secondResult);
        });
    }));
}
Promise.all(arr).then(()=> {
    console.log("task done!!!!");
}).catch((err)=> {
    console.log("this is an error"+ err.message)
})                
