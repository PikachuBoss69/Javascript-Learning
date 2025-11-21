// Conditional Statements in JavaScript
// 1. if statement
let age1 = 18;

if (age1 >= 18) {
  console.log("You are an adult");
}


// 👉 Runs only if condition is true.

// 2. if…else
let age2 = 16;

if (age2 >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// 3. if…else if…else
let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Fail");
}

// 4. switch
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Red fruit");
    break;
  case "banana":
    console.log("Yellow fruit");
    break;
  default:
    console.log("Unknown fruit");
}

// 5. Ternary Operator (shorthand if)
let age3 = 20;
let msg = (age3 >= 18) ? "Adult" : "Minor";
console.log(msg);