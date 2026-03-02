// Encapsulation is a fundamental concept in object-oriented programming that refers to the practice of hiding the internal details of an object and exposing only the necessary information to the outside world.

// Encapsulation can be achieved using two techniques:

// Using Closures
// In JavaScript, closures are functions that have access to variables in their outer lexical environment, even after the outer function has returned. Private variables and methods can be created using closures.

// Example: In this example, we have created a BankAccount object using a closure. The object has three private variables: _accountNumber, _accountHolderName, and _balance. These variables are only accessible within the BankAccount function and cannot be accessed from outside. The showAccountDetails function is a private method that displays the account details. The deposit and withdrawal methods are public methods that can be accessed from outside the object. When these methods are called, they update the _balance variable and call the showAccountDetails function to display the updated account details.




function BankAccount(accountNumber, accountHolderName, balance) {
    let _accountNumber = accountNumber;
    let _accountHolderName = accountHolderName;
    let _balance = balance;
​
    function showAccountDetails() {
        console.log(`Account Number: ${_accountNumber}`);
        console.log(`Account Holder Name: ${_accountHolderName}`);
        console.log(`Balance: ${_balance}`);
    }
​
    function deposit(amount) {
        _balance += amount;
        showAccountDetails();
    }
​
    function withdraw(amount) {
        if (_balance >= amount) {
            _balance -= amount;
            showAccountDetails();
        } else {
            console.log("Insufficient Balance");
        }
    }
​
    return {
        deposit: deposit,
        withdraw: withdraw
    };
}
​
let myBankAccount = BankAccount("123456", "John Doe", 1000);
​
myBankAccount.deposit(500); 
// Output: Account Number: 123456 Account Holder Name: 
//John Doe Balance: 1500
​
myBankAccount.withdraw(2000); // Output: Insufficient Balance

// Output
// Account Number: 123456
// Account Holder Name: John Doe
// Balance: 1500
// Insufficient Balance
// Using Classes
// ES6 introduced the class syntax in JavaScript, which allows us to define classes and objects in a more structured way. Classes can be used to achieve encapsulation in JavaScript.

// encapsulation
// Example: In this example, we have created a BankAccount class using the class keyword. The class has three private variables: _accountNumber, _accountHolderName, and _balance. These variables are prefixed with an underscore to indicate that they are private variables. The showAccountDetails method is a public method that displays the account details. The deposit and withdrawal methods are also public methods that can be accessed from outside the object. When these methods are called, they update the _balance variable and call the showAccountDetails method to display the updated account details.




class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
        this._accountNumber = accountNumber;
        this._accountHolderName = accountHolderName;
        this._balance = balance;
    }
​
    showAccountDetails() {
        console.log(`Account Number: ${this._accountNumber}`);
        console.log(`Account Holder Name: ${this._accountHolderName}`);
        console.log(`Balance: ${this._balance}`);
    }
​
    deposit(amount) {
        this._balance += amount;
        this.showAccountDetails();
    }
​
    withdraw(amount) {
        if (this._balance >= amount) {
            this._balance -= amount;
            this.showAccountDetails();
        } else {
            console.log("Insufficient Balance");
        }
    }
}
​
let myBankAccount = new BankAccount("123456", "John Doe", 1000);
myBankAccount.deposit(500); 
// Output: Account Number: 123456 Account Holder Name: 
//John Doe Balance: 150

// Output
// Account Number: 123456
// Account Holder Name: John Doe
// Balance: 1500