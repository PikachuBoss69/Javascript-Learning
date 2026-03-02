// JavaScript Nested Objects
// A nested object is an object that contains another object as the value of one of its properties.


const dog = {
    name: "Rayne",
    breed: "Husky",
    details: {
        height: "18 inches",
        weight: "30 pounds"
    }
};
// JavaScript Object Methods
// In JavaScript, we can add methods to Objects.

// Example: We can see how we can apply JavaScript nested objects and also use the different accessing methods.




const Dog = {
    breed: 'Husky',
    color: 'Gray & White',
    details: {
        height: '18 inches',
        weight: '30 pounds'
    }
};
​
console.log(Dog.breed);         
console.log(Dog.details.height);    
console.log(Dog["color"]);          
console.log(Dog.details["weight"]);

// Output
// Husky
// 18 inches
// Gray & White
// 30 pounds