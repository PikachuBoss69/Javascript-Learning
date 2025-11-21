// 🔹 Built-in Browser Functions
// 1. alert()

// Shows a popup message (browser only, not Node.js).
alert("Welcome to JavaScript!");

// 2. prompt()

// Takes input from user.

//to use prompt in node.js, first install library called prompt-sync
const prompt = require('prompt-sync')({ sigint: true });

let name = prompt("Enter your name:");
alert("Hello " + name);



// 3. confirm()

// Asks user a Yes/No question (returns true or false).
let result = confirm("Do you want to continue?");
if (result) {
  alert("Continuing...");
} else {
  alert("Stopped!");
}

// 🔹 Parsing & Type Conversion
// parseInt() → converts string → integer
let num = parseInt("42");
console.log(num + 10); // 52

// parseFloat() → converts string → decimal
let price = parseFloat("19.99");
console.log(price + 5); // 24.99

// Number() → converts string → number
let val = Number("123");
console.log(val + 1); // 124

// isNaN() → checks if not a number
console.log(isNaN("123")); // false
console.log(isNaN("abc")); // true