// JavaScript uses a prototype-based object model where objects inherit properties and behavior from other objects.

// Functions, arrays, and strings are specialized objects.
// Inheritance is handled through prototypes rather than classes.
// Prototypes define how objects share properties and methods.
// Prototype in JavaScript
// In JavaScript, a prototype acts as a shared blueprint that stores common methods and properties for objects of the same type.

// Properties and methods added to a prototype are shared across all instances.
// This mechanism helps optimize memory usage and enables inheritance.



Object.prototype.print = function () {
    console.log('I am from object prototype')
}
let b = {
    name: 'Pranjal',
    age: 21
}
b.print()
// Every JavaScript object has a prototype that shares methods and properties.
// Adding a method or property to an object’s prototype makes it accessible to all its instances.
// The print() method is added to Object.prototype, so any object (like b) can use it.
// Using prototypes avoids code duplication by defining shared methods once, making the code more efficient.

// Creating Constructor Functions
// A constructor function in JavaScript is used to create and initialize objects using the new keyword.

// It defines properties and methods for the object.
// Allows creation of multiple object instances.
// Enables shared behavior through prototypes.



function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}.`);
};
const n = new Person("Sheema");
n.sayHello();
// Person is a constructor function that initializes objects using the name argument and this.
// The sayHello method is added to Person.prototype, making it available to all instances.
// new Person("Sheema") creates a new object with name set to "Sheema".
// Calling sayHello() prints "Hello, my name is Sheema."
// Adding method to prototype
// Adding a method to a prototype allows all instances of an object to share the same functionality.

// The method is defined once on the prototype.
// All existing and future instances can access it.



let a1 = [1, 2, 3, 4, 5]
let a2 = [5, 6, 7, 8, 9]
Array.prototype.sum = function () {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
        sum += this[i]
    }
    return sum
}
console.log(a1.sum())
console.log(a2.sum())
let a1 = [1, 2, 3, 4, 5]
let a2 = [5, 6, 7, 8, 9]
Array.prototype.sum = function () {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
        sum += this[i]
    }
    return sum
}
console.log(a1.sum())
console.log(a2.sum())