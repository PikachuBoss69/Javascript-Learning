// The spread operator (...) in JavaScript expands an iterable (array, string, etc.) or object into individual elements/properties.

// Think of it as:

// “Open this thing up and spread its contents out.”

// It works in 3 major places:

// Arrays

// Objects

// Function calls

// 1️⃣ Spread in Arrays
// Copy an array (proper way)
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]

// Without spread, you'd copy reference:

const arr3 = arr1; // same memory
// Merge arrays
const a = [1, 2];
const b = [3, 4];

const merged = [...a, ...b];
console.log(merged); // [1,2,3,4]
// Add elements while copying
const arr = [2, 3];
const newArr = [1, ...arr, 4];

console.log(newArr); // [1,2,3,4]
// 2️⃣ Spread in Objects
// Copy object
const user = { name: "Subodh", age: 20 };

const newUser = { ...user };
// Merge objects
const a1 = { x: 1 };
const b1 = { y: 2 };

const merged1 = { ...a1, ...b1 };
// { x:1, y:2 }

// If same key exists, last one wins:

const obj = { a: 1, a: 5 };
console.log(obj); // { a: 5 }
// 3️⃣ Spread in Function Arguments
function add(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

console.log(add(...numbers)); // 6

// Without spread, this fails:

add(numbers); // ❌


// The rest operator (...) uses the same syntax as spread, but the behavior is opposite.

// Spread → expands
// Rest → collects

// Same ..., different context.