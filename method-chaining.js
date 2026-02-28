//Method chaining in JavaScript means calling multiple methods on the same object in a single statement, one after another.

// It works because each method returns the object (or another object), allowing the next method to be called on the result.

// example:
let str = "hello";

let result = str.toUpperCase().trim().slice(0, 3);

console.log(result); // "HEL"