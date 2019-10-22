//1....
let xhr = new XMLHttpRequest();
if(xhr.readyState == 0) alert("State Unsent");

//2...
xhr.open('GET', './data.txt');

//3...
xhr.send();
if(xhr.readyState ==1)alert('State opened');

//4...
xhr.onload = function(){
    if(xhr.status != 200){
        alert( `Error ${xhr.status}: ${xhr.statusText}`);
    }else{
        document.write(xhr.responseText);
     
        if(xhr.readyState ==2)alert('State Headers Received');
        if(xhr.readyState ==3)alert('State Loading');
        if(xhr.readyState ==4)alert('State Done');
       
    }
};