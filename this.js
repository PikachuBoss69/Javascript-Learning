// 1️⃣ this Keyword
// Technical Truth
// this is determined at call time, not definition time.
// Its value depends on how a function is called.
// There are 4 primary rules:
// 1. Global context
console.log(this)
// In browsers → window
// In strict mode → undefined

// 2. Method call
const obj = {
  name: "Ali",
  greet() {
    console.log(this.name)
  }
}

obj.greet()
this = obj
// Because the function was called as a property of obj.

3. Function call
function greet() {
  console.log(this)
}
greet()
// In strict mode → undefined
// Otherwise → global object

// 4. Constructor call
function Person(name) {
  this.name = name
}
new Person("Ali")
// this = the new object created.

// 5. Arrow Functions
// Arrow functions do NOT bind this.
// They inherit this from the surrounding scope (lexical this).

const obj = {
  name: "Ali",
  greet: () => {
    console.log(this.name)
  }
}

// This won’t work as expected because arrow functions don’t get their own this.
// 🧠 Intuition
// Think of this as:
// “Who is currently holding the microphone?”
// When a function runs, someone “calls” it.
// Whoever calls it gives it context.
// If you say:

obj.greet()

// The microphone is handed to obj.
// If you just say:

greet()

// No one owns it.
// Arrow functions?
// They refuse the microphone and instead look around and say:
// “Who had it before me?”