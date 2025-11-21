// Functions in JavaScript

// A function in JavaScript is a block of code designed to perform a particular task.
//  A function is executed when something invokes or calls it.
// Why Use Functions?
// Reusability: You can define a function once and use it multiple times.
// Modularity: They break down complex problems into smaller, manageable chunks.
// Organization: They make your code more readable and easier to debug.

// How to Define a Function
// There are several ways to define a function in JavaScript:

// 1. Function Declaration
// This is the traditional and most common way to define a function.
//  A key feature is hoisting, 
// which means you can call the function before it is declared in the code.
// A function to calculate a product
function multiply(a, b) {
  return a * b;
}

// Calling the function
let result = multiply(5, 3);
console.log(result); // Output: 15

// 2. Function Expression
// You can define a function and assign it to a variable. 
// Unlike declarations, function expressions are not hoisted,
//  so you must define them before you can call them.
const greet = function(name) {
  return "Hello, " + name + "!";
};
console.log(greet("Alice")); // Output: Hello, Alice!

// 3. Arrow Functions (ES6)
// Arrow functions provide a shorter syntax for writing function expressions. 
// They are often used for simple, one-line functions.
// A simple arrow function for addition
const add = (a, b) => {
    return a + b;
}
console.log(add(10, 20)); // Output: 30

// An arrow function with a single parameter doesn't need parentheses
const square = number => number * number;

console.log(square(5)); // Output: 25