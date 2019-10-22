async function testAwait(){
    let promise = new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve("Hello Await")
        }, 2000);
    });
    let result = await promise;
    console.log(result);
}
testAwait();