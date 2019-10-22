var isSaoodHappy = false;

var willSaoodGetNewCar = new Promise(
    function(resolve, reject){
        if(isSaoodHappy){
            var car = {
                brand: "Merc",
                color: 'Black'
            }
            resolve(car);
        }
        else{
        var reason  = new Error("You're Jobless, find a job first!");
        reject(reason);
        }
    }
);

var getCar = function(){
    willSaoodGetNewCar
    .then(function(fulfilled){
        console.log(fulfilled);
    })
    .catch(function(error){
        console.log(error.message);
    });
};

getCar();