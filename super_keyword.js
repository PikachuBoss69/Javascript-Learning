// The super keyword is used to call the parent class's constructor to access its properties and methods.

// Syntax:
// super(arguments);
// super.parentMethod(arguments);
// Arguments:
// This keyword can accepts all the arguments that has been used to create a constructor.

// Example:  The code defines Person and FashionDesigner classes, where FashionDesigner extends Person. The person has methods for work, home, and sleep states. FashionDesigner adds a profession method and a combined task method. An instance of FashionDesigner is created, and its methods' outputs are displayed using a display function.




class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    atWork() {
        return this.name + " is at work, ";
    }
    atHome() {
        return this.name + " is at home";
    }
    sleeping() {
        return this.name + " is sleeping";
    }
}
class FashionDesigner extends Person {
    constructor(name, age) {
        super(name, age);
    }
    profession() {
        return this.name +
            " is a Fashion Designer";
    }
    doTasks() {
        return super.atWork() + this.profession();
    }
}
function display(content) {
    console.log(content);
}
const character =
    new FashionDesigner("Sayan", 30);
display(character.profession());
display(character.atHome());
display(character.doTasks());

// Output
// Sayan is a Fashion Designer
// Sayan is at home
// Sayan is at work, Sayan is a Fashion Designer