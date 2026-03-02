// Yes. In JavaScript, Array.prototype.sort() by default sorts elements lexicographically, meaning it treats elements as strings and compares them using Unicode code point order.
// Let’s break this down properly.
// 1️⃣ What “lexicographically” actually means
// Lexicographic order = dictionary order.
// But important detail:
// It compares character by character
// Based on Unicode values
// Not based on numeric magnitude
// Example:
["apple", "banana", "cherry"].sort()

// Output:
["apple", "banana", "cherry"]

// That’s normal dictionary sorting.
// 2️⃣ The Big Problem: Numbers
// Here’s where beginners get confused.
[1, 2, 10, 5].sort()

// You might expect:
[1, 2, 5, 10]

// But actual result is:
[1, 10, 2, 5]

// Why?
// Because it converts numbers to strings:
// "1"
// "2"
// "10"
// "5"
// Then compares:
// "1" vs "10" → first char same → compare next char → "10" comes before "2"
// So "10" is considered smaller than "2"
// This is lexicographic comparison, not numeric.

// JS sort() method is used to rearrange the array elements alphabetically in ascending order. It updates the given array and does not return anything.
let arr = ["HTML", "CSS", "JS"];
​
arr.sort();
​
console.log(arr);

// Output
// [ 'CSS', 'HTML', 'JS' ]
// Sorting Array of Strings in Descending Order
// Modify the comparator for alphabetically reverse order.

let arr = ["HTML", "CSS", "JS"];
​
// sort with comparator function for reverse order
// Note : If we write a.localeCompare(b)), then it would
// sort in ascending order
arr.sort((a, b) => b.localeCompare(a));
​
console.log(arr);

// Output
// [ 'JS', 'HTML', 'CSS' ]

// What is localeCompare()?
// localeCompare() is a string method.
// Syntax:
// string1.localeCompare(string2)
// It compares two strings according to language-sensitive rules.
// It returns:
// Negative number → string1 comes before string2
// 0 → equal
// Positive number → string1 comes after string2
// Example:
// "HTML".localeCompare("CSS")
// This checks:
// Should "HTML" come before or after "CSS"?
// Since "H" comes after "C", it returns positive.

// Sorting Array of Objects
// The array of obects can be sorted on the basis of property values.

// Array of people objects with different names and ages
let people = [
    { name: 'Rahul', age: 28 },  
    { name: 'Jatin', age: 25 },   
    { name: 'Vikas', age: 32 },  
    { name: 'Rohit', age: 35 }   
];
​
// Sort the objects for age
people.sort((a, b) => a.age - b.age);
​
console.log(people);  
​
// Sort object for names 
people.sort((a, b) => a.name.localeCompare(b.name));
​
console.log(people);

// Output
// [
//   { name: 'Jatin', age: 25 },
//   { name: 'Rahul', age: 28 },
//   { name: 'Vikas', age: 32 },
//   { name: 'Rohit', age: 35 }
// ]
// [
//   { name: 'Jatin', age: 25 },
//   { name: 'Rahul', age: 28 },
//   { name: 'Rohit', age: 35 },
//   { name: 'Vikas', age: 32 }
// ]