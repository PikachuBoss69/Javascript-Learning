console.log("hello world");
console.log("Difference between var, let and const");


// var
// Function-scoped (or global if outside a function).
// Allows re-declaration.
// Older JavaScript (ES5 and before).
// Example:
var x = 10;
var x = 20; // works
console.log(x); // 20


// let
// Block-scoped (limited to { ... }).
// Cannot be re-declared in same scope.
// Example:

let y = 10;


// const
// Block-scoped.
// Must be assigned a value at declaration.
// Cannot be updated or re-declared.
// Example:
const z = 10;
z = 20; 
//  error