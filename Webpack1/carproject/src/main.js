require('file-loader?name=[name].[ext]!./index.html');
import './css/style.css'
import {Car} from './modules/lib';
import saa from './tesla.jpg';

var hello = document.getElementById("hello");


var mycar = new Car('Tesla', 'Black');
document.getElementById('mypic').src = saa;
hello.innerHTML = "Name of my car: " + mycar.carname + '<br> '+"Color: " + mycar.color ;
console.log(mycar.drive())