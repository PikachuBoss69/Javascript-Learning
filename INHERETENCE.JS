// Inheritance in JavaScript is a mechanism that allows one object or class to acquire properties and methods from another. It helps in code reusability and creating hierarchical relationships between classes.

// Allows reuse of properties and methods from a parent class.
// Implemented using the extends keyword in ES6 classes.
// Supports method overriding in child classes.
// Allows objects to inherit properties and methods from other objects, reducing code duplication.
// Uses prototypes to create a chain for sharing features between objects.
// Makes code more reusable, organized, and easier to maintain.

//ES6 Class-based Inheritance
// This code demonstrates class inheritance in JavaScript, where a child class (two) extends a parent class (one). The child class inherits properties and methods from the parent class.
class one {
    constructor(name) {
        this.name = name
    }
    speaks() {
        return `my name is ${this.name}`
    }
}
class two extends one {
    constructor(name) {
        super(name)
    }
}
const o = new two('Pranjal')
console.log(o.speaks())

//Inheritance with Object.create()
// Object.create() in JavaScript creates a new object that uses another object as its prototype, allowing it to inherit all its properties and methods.




let obj = {
    name: 'Pranjal',
    age: 21,
    prints() {
        return `my name is ${this.name}`
    }
}
let obj1 = Object.create(obj)
obj1.name = 'Hello'
console.log(obj1.age)
console.log(obj1.prints())
let obj = {
    name: 'Pranjal',
    age: 21,
    prints() {
        return `my name is ${this.name}`
    }
}
let obj1 = Object.create(obj)
obj1.name = 'Hello'
console.log(obj1.age)
console.log(obj1.prints())

