//Write a program to show different alerts when different buttons are clicked.

let button1 = document.getElementById("button 1");
let button2 = document.getElementById("button 2");
let button3 = document.getElementById("button 3");

button1.onclick = function(event){
    alert("GO AWAY");
}
button2.onclick = function(event){
    alert("NOTHING......");
}
button3.onclick = function(event){
    alert("hello");
}