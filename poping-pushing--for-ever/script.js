var i = 0;
var myArray = [];
var addOrRemove = 'add';
function myProgram() {

    document.getElementById("mybtn").disabled = true;

     if (i < 100 && addOrRemove == 'add') {
        i++;
        myArray.splice(myArray.length,0, i);
        //console.log(myArray.length);
        if (i == 100) {
            addOrRemove = 'remove'
        }

    } else if (i > 0 && addOrRemove == 'remove') {

        i--;
        myArray.splice(0,1);
        //console.log(myArray.length);
        if (i == 0) {
            addOrRemove = 'add'      

                }
    } 
    console.log(myArray.length);
    document.getElementById('demo').innerHTML = myArray.length;
    //console.log(intervalID);
    
}

