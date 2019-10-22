require('file-loader?name=[name].[ext]!./index.html');
import './css/style.css';
import {add} from './modules/lib1';
import sa from './saood.jpg';
var hello = document.getElementById("hello");
hello.innerHTML = "Hello from Saood";
document.getElementById('mypic').src = sa;