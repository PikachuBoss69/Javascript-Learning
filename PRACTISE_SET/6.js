//Write a program using the prompt function to take input of age as a value from 
// the user and use alert to tell him if he can drive!
//In Q1 use confirm to ask the user if he wants to see the prompt again.
//In the previous question, use console.error to log the error if the age entered is negative.

const prompt = require('prompt-sync')({ sigint: true });//to use prompt in node.js
const alert = require('alert-node');//to use alert in node.js


function confirm(question) {//only because , we can't use confirm , in nodejs , so we create a seperate function for it to be use.
  const answer = prompt(`${question} (y/n): `).toLowerCase();
  return answer === 'y' || answer === 'yes';
}

while (true){
let age = prompt("Enter your age : ");
if (age<18){
    if (age<0){
        console.error("ERROR , age is negative ");//in browser it will, pop up aserror , in red
    }
    else{

        alert("You can't Drive");
        console.log("You can't Drive")
    }
}

else {
    alert("You can drive");
    console.log("You can drive")
}

let ask = confirm("Want to try again : ");
if(ask!=true){
    break;
}
}

//Write a program to change the URL to
//  https://www.google.com/search?q=google.com (Redirection) if the user enters a number greater than 4.
let num = prompt("Enter a number : ");

if(num>4){
    console.log("Redirecting...");
    window.location.href = "https://www.google.com/search?q=google.com";
}

     