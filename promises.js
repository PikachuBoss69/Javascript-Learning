// The Promise: When you place the order, the company gives you a tracking number. 
// This tracking number is a "promise" that you will eventually get your package (or be notified if something goes wrong). 
// You don't have the package yet, but you have an object that represents its future delivery.
// Pending: Immediately after ordering, the status is "processing" or "pending." You wait.
// Fulfilled: The package arrives at your door. The promise is "fulfilled" with a value (your package).
// Rejected: You get a notification that the package was lost in transit. The promise is "rejected" with a reason (an error).
let myPromise = new Promise(function(resolve, reject) {
  // This function is called the "executor".
  // It starts the asynchronous job (e.g., download, calculation).

  // ... some time-consuming code ...
  let isSuccess = true; // Let's pretend the job finished
  if (isSuccess) {
    // If the job finished successfully, call resolve().
    resolve("Here is the successful value!"); 
  } else {
    // If the job failed, call reject().
    reject(new Error("Something went wrong."));
  }
});

// Let's use the 'myPromise' we created earlier

console.log("Code after creating the promise.");

myPromise
  .then(function(result) {
    // This function runs ONLY if the promise is FULFILLED (resolved).
    console.log("Success! The result is:", result); // "Here is the successful value!"
  })
  .catch(function(error) {
    // This function runs ONLY if the promise is REJECTED.
    console.log("Failure! The error is:", error); // "Something went wrong."
  })
  .finally(function() {
    // This function runs ALWAYS, whether it was a success or failure.
    // Good for cleanup tasks, like hiding a loading spinner.
    console.log("The promise is now settled.");
  });

console.log("This line runs immediately, it doesn't wait for the promise.");

//We'll follow this structure:
// The Problem: What is "Callback Hell"?The Solution: What is a Promise? (An Analogy)Creating a Promise: The new Promise SyntaxThe Life of a Promise: States and ResultsUsing a Promise: .then(), .catch(), and .finally()1. The Problem: "Callback Hell"Before Promises, the only way to handle asynchronous operations (like loading a script, fetching data) was with callback functions. This works fine for one operation.But what if you need to do several operations in a sequence? For example, load script A, then load script B, then load script C. You would end up with code like this:JavaScriptloadScript('scriptA.js', function (scriptA) {
  console.log('Script A is loaded');
  
  loadScript('scriptB.js', function (scriptB) {
    console.log('Script B is loaded');
    
    loadScript('scriptC.js', function (scriptC) {
      console.log('Script C is loaded');
      // And so on...
    });
  });

// This nested structure is called "Callback Hell" or the "Pyramid of Doom." It's hard to read, hard to manage, and even harder to handle errors for each step.2. The Solution: What is a Promise? (An Analogy)As your notes say, a Promise is the solution.Think of a Promise like ordering a package online.The Promise: When you place the order, the company gives you a tracking number. This tracking number is a "promise" that you will eventually get your package (or be notified if something goes wrong). You don't have the package yet, but you have an object that represents its future delivery.Pending: Immediately after ordering, the status is "processing" or "pending." You wait.Fulfilled: The package arrives at your door. The promise is "fulfilled" with a value (your package).Rejected: You get a notification that the package was lost in transit. The promise is "rejected" with a reason (an error).A JavaScript Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.3. Creating a Promise: The new Promise SyntaxThis section breaks down the syntax from your notes.JavaScriptlet myPromise = new Promise(function(resolve, reject) {
  // This function is called the "executor".
  // It starts the asynchronous job (e.g., download, calculation).

  // ... some time-consuming code ...


// Key parts:new Promise(...): The constructor you use to create a promise object.The Executor (function(resolve, reject){...}): This function runs immediately when the promise is created. It's where you put your asynchronous logic.resolve(value): This is a callback function provided by JavaScript. You call it when your operation is successful. The value you pass is the result of the job.reject(error): This is the other callback function provided by JavaScript. You call it when your operation fails. You should pass an Error object.4. The Life of a Promise: States and ResultsAs your notes correctly point out, a promise object has internal properties that change over its lifetime. A promise can only be "settled" (fulfilled or rejected) once. It cannot go from fulfilled back to pending, or from rejected to fulfilled.Initial Stateresolve(value) is calledreject(error) is calledstate: "pending"state: "fulfilled"state: "rejected"result: undefinedresult: valueresult: errorThis guarantees that the code that uses the promise will get a result exactly once.5. Using ("Consuming") a PromiseCreating a promise is only half the story. The real power comes from how you attach code that will run when the promise is settled. You do this with the methods .then(), .catch(), and .finally().JavaScript// Let's use the 'myPromise' we created earlier

console.log("Code after creating the promise.");

myPromise
  .then(function(result) {
    // This function runs ONLY if the promise is FULFILLED (resolved).
    console.log("Success! The result is:", result); // "Here is the successful value!"
  })
  .catch(function(error) {
    // This function runs ONLY if the promise is REJECTED.
    console.log("Failure! The error is:", error); // "Something went wrong."
  })
  .finally(function() {
    // This function runs ALWAYS, whether it was a success or failure.
    // Good for cleanup tasks, like hiding a loading spinner.
    console.log("The promise is now settled.");
  });

console.log("This line runs immediately, it doesn't wait for the promise.");

// How this solves Callback Hell:Instead of nesting, you can chain
 promises.JavaScriptloadScriptWithPromise('scriptA.js')
  .then(function() {
    console.log('Script A loaded, now loading B');
    return loadScriptWithPromise('scriptB.js'); // Return a new promise
  })
  .then(function() {
    console.log('Script B loaded, now loading C');
    return loadScriptWithPromise('scriptC.js'); // Return another one
  })
  .then(function() {
    console.log('All scripts are loaded!');
  })
  .catch(function(error) {
    // A SINGLE catch block can handle an error from ANY of the steps above!
    console.error("An error occurred in the chain:", error);
  });
// This code is flat, readable from top to bottom, and has centralized error handling. It's a massive improvement!