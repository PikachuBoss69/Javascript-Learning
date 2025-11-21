//Use logical operators to find whether the age of a person lies between 10 and 20.
const prompt = require('prompt-sync')({ sigint: true });

let age = prompt("ENTER THE AGE : ")

if(age>10 && age<20 ){
    console.log("person is between the age 10 and 20 ");
}
else if(age>=20){
    console.log("age is greator then 20")

}
else{
    console.log("age is less then 10")
}

//Demonstrate the use of switch case statements in JavaScript.

console.log("To find holiday , Enter the day : ")
let day = prompt();

switch(day){
    case "monday" || "MONDAY":
        console.log("no holiday")
        break;
    case "tuesday"||"TUESDAY":
        console.log("no holiday")
        break;
    case "wednesday"||"WEDNESDAY":
        console.log("no holiday")
        break;
    case "thursday"||"THURSDAY":
        console.log("no holiday")
        break;
    case "friday"||"FRIDAY":
        console.log("no holiday")
        break;
    case "saturday"||"SATURDAY":
        console.log("no holiday")
        break;
    case "sunday"||"SUNDAY":
        console.log("HOLIDAY")
        break;
    default:
        console.log("Enter the correct day")
    
    }

    //Write a JavaScript program to find whether a number is divisible by 2 and 3.

    let num = prompt("enter the number : ")
    if(num%6==0){
        console.log("the number is divisible by 2 and 3")
    }
    else{
        console.log("Not divisible")
    }

    //Write a JavaScript program to find whether a number is divisible by either 2 or 3
    let num1 = prompt("enter the number : ")
    if(num1%2==0){
        console.log("the number is divisible by 2 and 3")
    }
    else if(num1%3==0){
        console.log("the number is divisible by 2 and 3")
       
    }
    else{
         console.log("Not divisible")
        
    }

    //Print "You can Drive" or "You cannot Drive" based on age being greater than 18 using the ternary operator.

    let age1 = prompt("Enter your age : ")
    console.log("You can ",age1<18 ?"Not Drive" : "Drive")