
// Array methods are functions built into JavaScript that help you perform common tasks on arrays, such as adding or removing elements, sorting, and transforming data.

// Common Array Methods
// toString(): Converts an array to a string of comma-separated values.
// join(): Joins all elements of an array into a single string, using a specified separator.
// pop(): Removes the last element from an array and returns that element. It modifies the original array.
// push(): Adds a new element to the end of an array and returns the new length of the array. It modifies the original array.
// shift(): Removes the first element from an array and returns that element. It modifies the original array.
// unshift(): Adds a new element to the beginning of an array and returns the new length of the array. It modifies the original array.
// delete: An operator used to remove an element from an array. It leaves a "hole" or undefined value in its place and does not change the array's length.
// concat(): Joins two or more arrays together and returns a new array. It does not modify the original arrays.
// sort(): Sorts the elements of an array in place. By default, it sorts alphabetically. For numerical sorting, you need to provide an optional compare function.
// splice(): A powerful method that can add or remove elements from an array at any position. It modifies the original array and returns the deleted elements.
// slice(): Extracts a section of an array and returns a new array. It does not modify the original array.
// reverse(): Reverses the order of the elements in an array. It modifies the original array.

// 2. map()
// Purpose: Transforms an array by applying a function to each element, returning a new array of the same length.
// Return value: A new array with transformed values.
// Use case: Transforming data, e.g., converting numbers, formatting strings, or extracting properties.
// Syntax:

const newArray = array.map(function(currentValue, index, array) {
  return currentValue * 2; // Example transformation
});

// Example:
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// Notes:
// Always returns a new array.
// Original array remains unchanged.

// 3. filter()
// Purpose: Creates a new array containing only elements that satisfy a condition.
// Return value: New array with filtered elements.
// Use case: Extracting certain elements from an array based on conditions.
// Syntax:

const newArray2 = array.filter(function(currentValue, index, array) {
  return condition; // return true to keep, false to discard
});


// Example:
const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Notes:
// Original array is not modified.
// Useful for searches, removing unwanted data, or conditional processing.

// 4. reduce()
// Purpose: Reduces an array to a single value by applying a function cumulatively.
// Return value: A single value (number, string, object, etc.).
// Use case: Summing numbers, concatenating strings, flattening arrays, counting occurrences.
// Syntax:

const result = array.reduce(function(accumulator, currentValue, index, array) {
  return accumulator + currentValue; // Example operation
}, initialValue//it is the value of total , not the index
 );

// Example:
const numbers2 = [1, 2, 3, 4];
const sum = numbers2.reduce((total, num) => total + num, 0);
console.log(sum); // 10


// Notes:
// initialValue is optional but recommended.
// Can perform very complex operations like building objects or arrays from existing arrays.

// 5. Array.from()
// Purpose: Creates a new array from an array-like or iterable object (like strings, Sets, Maps, or NodeLists).
// Return value: A new array.
// Use case: Converting objects like strings or NodeLists into arrays to use array methods.

// Syntax:
Array.from(arrayLike, mapFunction, thisArg);

// Example:
const str = "Hello";
const chars = Array.from(str);
console.log(chars); // ['H', 'e', 'l', 'l', 'o']
// Using map function while creating
const doubled3 = Array.from([1, 2, 3], x => x * 2);
console.log(doubled3); // [2, 4, 6]

// Notes:
// Very useful for DOM manipulation (NodeList → Array).
// Can apply a mapping function immediately.