//A callback is simply a function that is passed as an argument into another function. 
// The outer function can then execute, or "call back," that function at a later time.
// This pattern is fundamental to asynchronous operations in JavaScript, like handling user clicks, 
// fetching data from a server, or setting a timer.


// Analogy: Ordering a Pizza 🍕

// You call a pizza place and place your order (this is like calling the main function).
// You give them your address (this is the callback function).
//  You're telling them what to do after their main job—making the pizza—is done.
// You hang up and don't just wait by the phone. You can do other things.
// When the pizza is ready, the delivery person comes to your address (the main function calls back your provided function).

// This is the callback function. It simply logs a name.
function greet(name) {
  console.log(`Hello, ${name}!`);
}
// This is the main function that accepts another function as an argument.
function processUserInput(callback) {
  let name = "Subodh";
  // Now, it "calls back" the function that was passed in.
  callback(name);
}
// We call the main function and pass our `greet` function to it.
processUserInput(greet);
// Output will be:
// Hello, Subodh!

// The Problem: The "Pyramid of Doom" 👹
// Your notes correctly point out the biggest issue with callbacks. 
// When you need to perform multiple asynchronous actions in a sequence, you end up nesting callbacks inside each other.
// For example, to load three scripts one after the other, your code would look like this, 
// forming a "pyramid" that drifts to the right:

loadScript('script1.js', function(error, script1) {
    if (error) {
        // handle error
    } else {
        // script1 loaded, now load script2
        loadScript('script2.js', function(error, script2) {
            if (error) {
                // handle error
            } else {
                // script2 loaded, now load script3
                loadScript('script3.js', function(error, script3) {
                    if (error) {
                        // handle error
                    } else {
                        // All scripts are loaded!
                        console.log("All scripts have loaded successfully!");
                    }
                });
            }
        });
    }
});
// This is hard to read, difficult to debug, and prone to errors. This is Callback Hell.