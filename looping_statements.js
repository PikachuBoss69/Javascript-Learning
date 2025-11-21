// for...in Loop
// The for...in loop is used to iterate over the enumerable properties of an object. 
// It loops through the keys (property names) of an object.
// Best for: Iterating over object keys.
// It iterates over the keys (string properties) of the object, not the values.
// It will also iterate over properties inherited from the object's prototype chain. 
// This can sometimes lead to unexpected behavior, 
// so it's often used with hasOwnProperty() to ensure you're only working with the object's own properties.
// Example:

const person = {
  name: 'Alice',
  age: 30,
  city: 'New York'
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
  // OR
  console.log(key + " : " + person[key])
}

//for...of Loop

// Best for: Iterating over the values of arrays and other iterable collections.
// It iterates directly over the values of the collection, making the code clean and easy to read.
// It does not work on plain objects because they are not iterable by default.
// Example:

const fruits = ['apple', 'banana', 'cherry'];//ARRAY

for (let fruit of fruits) {
  console.log(fruit);
}
for (let fruit of "fruits") {
  console.log(fruit);
}


// forEach()
// Purpose: Executes a function for each element in an array.
// Return value: undefined (it doesn’t create a new array).
// Use case: Performing side effects, such as logging, updating DOM, or modifying external variables.
// Syntax:

// array.forEach(function(currentValue, index, array) {
//   // code to execute for each element
// });


// Example:
const numbers = [1, 2, 3, 4];
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});
// Output:
// Index 0: 1
// Index 1: 2
// Index 2: 3
// Index 3: 4


// Notes:
// Cannot break out of a forEach early; it always iterates over all elements.
