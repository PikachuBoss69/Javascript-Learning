// 🔹 Strings in JavaScript
// Strings store and manipulate text.
// Creating Strings
// Using double quotes:
let name = "Harry";
console.log(name)

// Using single quotes:
let name1 = 'Harry';
console.log(name1)

// You can check length:
console.log(name1.length); // 5

// 🔹 Template Literals (Backticks)
// Template literals use backticks ( ) instead of quotes.
let name2 = `Harry`;
console.log(name2)
// Advantages:
// You can mix single and double quotes inside easily:
let sentence = `The name is "Harry's"`;
console.log(sentence)

// You can insert variables directly (string interpolation):
// 1. Template Literals (using backticks + ${})
let name3 = "Harry";
let a = `This is ${name3}`;
console.log(a); // This is Harry
// ✅ Cleaner syntax, easy to read.
// ✅ Allows string interpolation (inserting variables directly).
// ✅ Supports multi-line strings without \n.

// 2. String Concatenation (using +)
console.log("this is " + name3); // this is Harry
// ✅ Works in all JS versions.
// ❌ Gets messy with multiple variables:
console.log("My name is " + name3 + " and I am " + 21 + " years old.");

// ⚡ Why Template Literals are Better:
// With template literals, the same thing is cleaner:
console.log(`My name is ${name3} and I am ${21} years old.`);

// Escape Sequence Characters in JavaScript
// When you have special characters inside a string (like quotes, newline, tab), JavaScript may misunderstand them. To fix this, we use escape characters with a backslash \.
// Example Problem:
//let name = 'Adam D'Angelo'; // ❌ Error: JS thinks the string ends early
// Solution (Escape the quote):
let name4 = 'Adam D\'Angelo'; // ✅ Correct
console.log(name4)

// Similarly, you can escape double quotes inside double-quoted strings:
let str = "He said, \"Hello!\"";
console.log(str)
// 🔹 Common Escape Sequences
// Escape	Meaning
// \'	Single quote
// \"	Double quote
// \\	Backslash
// \n	Newline
// \t	Tab
// \r	Carriage return
// \b	Backspace
// \f	Form feed


// 🔹 Common String Methods in JavaScript
// Method	Description	Example
// toUpperCase()	            Converts string to uppercase	                "hello".toUpperCase() → "HELLO"
// toLowerCase()	            Converts string to lowercase	                "HELLO".toLowerCase() → "hello"
// trim()	                    Removes whitespace from both ends	            " hi ".trim() → "hi"
// slice(start, end)	        Extracts part of string	"abcdef".slice(1, 4) →  "bcd"
// substring(start, end)	    Similar to slice but no negatives	            "abcdef".substring(1, 4) → "bcd"
// substr(start, length)	    Extracts part of string (old, rarely used now)	"abcdef".substr(1, 3) → "bcd"
// replace(find, replace)	    Replaces first match	                        "hello world".replace("world", "JS") → "hello JS"
// replaceAll(find, replace)	Replaces all matches	                        "aabb".replaceAll("a","x") → "xxbb"
// split(separator)	            Splits string into array	                    "a,b,c".split(",") → ["a","b","c"]
// charAt(index)	            Returns char at index                       	"hello".charAt(1) → "e"
// charCodeAt(index)	        Returns Unicode of char                        	"A".charCodeAt(0) → 65
// indexOf(search)	            First occurrence index	                        "banana".indexOf("a") → 1
// lastIndexOf(search)      	Last occurrence index	                        "banana".lastIndexOf("a") → 5
// includes(search)	            Checks if string contains substring	            "hello".includes("ell") → true
// startsWith(search)	        Checks if string starts with substring	        "hello".startsWith("he") → true
// endsWith(search)	            Checks if string ends with substring	        "hello".endsWith("lo") → true
// repeat(n)	                Repeats string n times	"ha".repeat(3) →        "hahaha"