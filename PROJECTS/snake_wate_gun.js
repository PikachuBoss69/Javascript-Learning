// Exercise 2 - Snake Water Gun

// Use Javascript to create a game of Snake Water & Gun. The game should ask you to enter S, W or G.
//  The computer should be able to randomly generate S, W or G and declare Win or Loss using alert.
//  Use confirm and prompt wherever required.

//Created in Nodejs ,so ignore alert , as it will not work in nodejs , it's just becuase asked , in question , i have used it
const prompt = require("prompt-sync")({sigint : true});
const alert = require("alert-node");

function confirm(question){
    let ask = prompt(`${question} (Y/N) : `).toUpperCase();
    return ask=='Y';
}

const choices = ['S','W','G'];

while(true){

let randomIndex = Math.floor(Math.random()*choices.length);
let computerChoice = choices[randomIndex];
let userChoice = prompt("Enter your choice (W - water\tS - snake\tG - Gun): ").toUpperCase();

if(userChoice==computerChoice){
    console.log(`UserChoice : ${userChoice}`)
    console.log(`computerChoice : ${computerChoice}`)
    console.info("DRAW");

}
else if(userChoice=='S'){
    if(computerChoice =='W'){
        alert("YOU WIN")
        console.log(`UserChoice : ${userChoice}`)
        console.log(`computerChoice : ${computerChoice}`)
        console.log("YOU WIN")
        
    }
    else{
        alert("YOU LOOSE");
        console.log(`UserChoice : ${userChoice}`)
        console.log(`computerChoice : ${computerChoice}`)
        console.log("YOU LOOSE");
    }

}
else if(userChoice=='W'){
    if(computerChoice =='G'){
        alert("YOU WIN")
        console.log(`UserChoice : ${userChoice}`)
        console.log(`computerChoice : ${computerChoice}`)
        console.log("YOU WIN")
    }
    else{
        alert("YOU LOOSE");
        console.log(`UserChoice : ${userChoice}`)
        console.log(`computerChoice : ${computerChoice}`)
        console.log("YOU LOOSE");
    }

}
else if(userChoice=='G'){
    if(computerChoice =='S'){
        alert("YOU WIN")
        console.log(`UserChoice : ${userChoice}`)
        console.log(`computerChoice : ${computerChoice}`)
        console.log("YOU WIN")
    }
    else{
        alert("YOU LOOSE");
        console.log(`UserChoice : ${userChoice}`)
        console.log(`computerChoice : ${computerChoice}`)
        console.log("YOU LOOSE");
    }

}
let ask = confirm("Want to try again");
if (ask!=true){
    break;
}

}
