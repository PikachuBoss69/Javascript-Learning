
// 🧩 Common Console Methods
// Method	Description	Example
// console.log(msg)	    ->  Prints a normal message.	console.log("Hello World")
// console.info(msg)    ->  Prints informational messages (blue “i” icon).	console.info("Fetching data...")
// console.warn(msg)	->  Prints a warning message (yellow ⚠️).	console.warn("Low disk space!")
// console.error(msg)	->  Prints an error message (red ❌).	console.error("Something went wrong!")
// console.clear()	    ->  Clears the console screen.	console.clear()





//| `console.countReset(label)` | Resets a counter for that label. | `console.countReset("Loop")` |

// ---

// ## ⏱️ **Timing & Performance**

// | Method | Description | Example |
// |---------|--------------|----------|
// | `console.time(label)` | Starts a timer. | `console.time("Process")` |
// | `console.timeEnd(label)` | Stops timer and prints elapsed time. | ```js
// console.time("Process");
// // code here
// console.timeEnd("Process");
// ``` |
// | `console.timeLog(label)` | Logs current time without stopping the timer. | `console.timeLog("Process")` |

// ---

// ## 📊 **Displaying Data**

// | Method | Description | Example |
// |---------|--------------|----------|
// | `console.table(data)` | Displays arrays or objects as a formatted table. | ```js
// console.table([{name:"A", age:21}, {name:"B", age:22}]);
// ``` |
// | `console.dir(obj)` | Displays object in an expandable tree format (better than log for objects). | `console.dir(document.body)` |

// ---

// ## 🧱 **Grouping Messages**

// | Method | Description | Example |
// |---------|--------------|----------|
// | `console.group(label)` | Starts a new group (indents messages). |  |
// | `console.groupEnd()` | Ends the current group. | ```js
// console.group("User Info");
// console.log("Name: Subodh");
// console.log("Age: 20");
// console.groupEnd();
// ``` |
// | `console.groupCollapsed(label)` | Starts a collapsed group (expandable). | `console.groupCollapsed("Details")` |

// ---

// ## 🧩 **Tracing and Debugging**

// | Method | Description | Example |
// |---------|--------------|----------|
// | `console.trace(label)` | Prints the stack trace to show where the function was called from. | ```js
// function test() { console.trace("Trace Test"); }
// test();
// ``` |

// ---

// ## 🔒 **Memory (rarely used, advanced)**

// | Method | Description | Example |
// |---------|--------------|----------|
// | `console.memory` | Displays memory usage (available in browsers like Chrome). | `console.log(console.memory)` |

// ---

// ## 💡 **Bonus Tips**
// - You can use **CSS styling** in `console.log()`:
//   ```js
 //  console.log("%cHello World", "color: blue; font-size: 20px;");
