//Write a program to print the marks of a student in an object using for loop. obj = { harry: 98, rohan: 70, aakash: 7 }

const obj = { harry: 98, rohan: 70, aakash: 7 }
for(let a in obj){
    console.log("Marks of "+ a + " is : " + obj[a]);
}

//Write a program to print "try again" until the user enters the correct number.

const prompt = require('prompt-sync')({ sigint: true });
while(true){
    let num = Number.parseInt(prompt("Enter the number : "))
    let ansNum = 6;
    if (num<ansNum){
        console.log("Try Again") 
    }
    else if(num>ansNum){
        console.log("Try Again")  
    }
    else{
        console.log("WINNER")
        break;
    }

}

//Write a function to find the mean of 5 numbers.
const obj1 = {a: 1,b: 2,c: 3,d: 4,e: 5}
function mean (obj){ 
    var sum = 0;
for(let a in obj){
    sum+=obj[a]

}
return sum;

}

console.log("Average : " + mean(obj)/5)
