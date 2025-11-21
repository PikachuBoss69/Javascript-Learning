// 7 Primitive Data Types in JS:
// Null
let a = null
// Undefined
let b = undefined
// Number
let c = 234
// Boolean
let d = true
// String
let e = "hello"
// Symbol
let f = Symbol("HEllO")
// BigInt
let g = BigInt(567)
console.log(a,b,c,d,e,f,g)

// Objects = collections of key-value pairs.
// Keys → property names (must be string/symbol).
// Values → can be any data type (including other objects/functions).
// Example:
const item = {
  name: "Led Bulb",   // String value
  price: 150,         // Number value
  inStock: true       // Boolean value
};

// 3. Accessing Object Properties
// Two ways:
console.log(item.name);   // dot notation → "Led Bulb"
console.log(item["price"]); // bracket notation → 150

// 4. Updating Object Properties
item.price = 200;          // update value
item.brand = "Philips";    // add new property
delete item.inStock;       // remove property

console.log(item.brand)

//Objects (arrays, functions, plain objects) are stored as references in memory

let x = 10;
let y = x; 
y = 20;
console.log(x); // 10 (unchanged, primitive copy)

let obj1 = {name: "Bulb"};
let obj2 = obj1;
obj2.name = "Fan";
console.log(obj1.name); // "Fan" (reference copy)

// . What Happens Here?
// let obj1 = { name: "Bulb" };
// Creates an object in memory, e.g. at address 0x123.
// obj1 holds a reference (pointer) to 0x123.
// let obj2 = obj1;
// obj2 now holds the same reference as obj1.
// So obj1 → 0x123 and obj2 → 0x123 (both point to the same object).
// obj2.name = "Fan";
// You’re not changing the reference.
// You’re modifying the actual object at 0x123.
// Since obj1 also points to 0x123, obj1.name is now "Fan".


// How to Make an Independent Copy (Clone)

// If you actually want to clone obj1 so that obj2 is independent:

let obj12 = { name: "Bulb" };

// Shallow copy (only first level copied)
let obj21 = { ...obj12 };

obj21.name = "Fan";
console.log(obj12.name); // "Bulb"
console.log(obj21.name); // "Fan"