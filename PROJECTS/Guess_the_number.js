// Exercise 1 – Guess the number

// Write a JavaScript program to generate a random number and store it in a variable. 
// The program then takes an input from the user to tell them whether the guess was correct,
//  greater or lesser than the original number.

// 100 – (number of guesses) is the score of the user.
// The program is expected to terminate once the number is guessed.
//  Numbers should be between 1 – 100.

const crypto = require('crypto');
const randomNum = crypto.randomInt(1, 101); // from 1 to 100
const prompt = require('prompt-sync')({ sigint: true });

while (true ){
   
    
    let num = prompt("Enter a number between , 1 - 100 : ");

    if(num>randomNum){
        console.log("Enter smaller number");
        
    }
    else if(num<randomNum){
        console.log("Enter bigger number");
    }
    else if (num==randomNum){
        console.log("You Win");
        break;
    }
    else{
        console.log("Enter number between , 1 - 100")
    }
}
