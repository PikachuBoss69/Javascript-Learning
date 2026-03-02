// JavaScript Classes
// A class in JavaScript is a blueprint used to create objects that share similar properties and methods. It’s a cleaner, more structured way to implement object-oriented programming compared to the older prototype-based approach.

class Dog {
    constructor(name, breed) {
      
        // instance property  
        this.name = name;   
        this.breed = breed; 
    }

    // defining method
    bark() {
        console.log(`${this.name} says woof!`);
    }
}

// creating an object (instance)
const myDog = new Dog("Rayne", "Husky");
myDog.bark();

// Class Getters and Setters
// We can use getter and setter methods to get the value of an object and set the value of an object. We can use the get keyword for the getter method and the set keyword for the setter methods

// Example: The code below demonstrates the creation and different implementations of JavaScript Classes.




class Dog {
  constructor(name) {
    this.name = name;
  }
​
  // Getter method
  get dogName() {
    return this.name;
  }
​
  // Setter method
  set dogName(newName) {
    this.name = newName;
  }
​
  // Regular method
  bark() {
    console.log(`${this.name} says woof!`);
  }
}
​
// creating an object
let myDog = new Dog('Rayne');
console.log(myDog.name);
​
myDog.dogName = 'Buddy';
console.log(myDog.name);
​
myDog.bark();

// Output
// Rayne
// Buddy
// Buddy says woof!