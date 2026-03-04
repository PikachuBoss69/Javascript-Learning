// JavaScript Events are actions or occurrences that happen in the browser. They can be triggered by various user interactions or by the browser itself.




<html>
<script>
    function myFun() {
        document.getElementById(
            "gfg").innerHTML = "GeeksforGeeks";
    }
</script>
​
<body>
    <button onclick="myFun()">Click me</button>
    <p id="gfg"></p>
</body>
</html>
// The onclick attribute in the <button> calls the myFun() function when clicked.
// The myFun() function updates the <p> element with id="gfg" by setting its innerHTML to "GeeksforGeeks".
// Initially, the <p> is empty, and its content changes dynamically on button click.
// Event Types
// JavaScript supports a variety of event types. Common categories include:

// Mouse Events: click, dblclick, mousemove, mouseover, mouseout
// Keyboard Events: keydown, keypress, keyup
// Form Events: submit, change, focus, blur
// Window Events: load, resize, scroll
// Common JavaScript Events

// Event Attribute	Description
// onclick	Triggered when an element is clicked.
// onmouseover	Fired when the mouse pointer moves over an element.
// onmouseout	Occurs when the mouse pointer leaves an element.
// onkeydown	Fired when a key is pressed down.
// onkeyup	Fired when a key is released.
// onchange	Triggered when the value of an input element changes.
// onload	Occurs when a page has finished loading.
// onsubmit	Fired when a form is submitted.
// onfocus	Occurs when an element gets focus.
// onblur	Fired when an element loses focus.

// Mouse Event
document.addEventListener("mousemove", (e) => {
    console.log(`Mouse moved to (${e.clientX}, ${e.clientY})`);
});

// Keyboard Event
document.addEventListener("keydown", (e) => {
    console.log(`Key pressed: ${e.key}`);
});
// The mousemove event tracks cursor movement.
// The keydown event captures key presses.
// JavaScript Event Handlers
// Event handlers can be used to handle and verify user input, user actions, and browser actions:

// Things that should be done every time a page loads
// Things that should be done when the page is closed
// Action that should be performed when a user clicks a button
// Content that should be verified when a user inputs data
// And more ...
// Many different methods can be used to let JavaScript work with events:

// HTML event attributes can execute JavaScript code directly
// HTML event attributes can call JavaScript functions
// You can assign your own event handler functions to HTML elements
// You can prevent events from being sent or being handled
// And more ...
// Event Handling Methods
// 1. Inline HTML Handlers

<button onclick="alert('Button clicked!')">Click Me</button>

                    //2. DOM Property Handlers

let btn = document.getElementById("myButton");
btn.onclick = () => {
      alert("Button clicked!");
};

                            //3. addEventListener() (Preferred)

btn.addEventListener("click", () => {
    alert("Button clicked using addEventListener!");
});
// addEventListener() is the most versatile and recommended method as it supports multiple event listeners and removal of listeners.

// Event Propagation
// JavaScript events propagate in two phases:

// Capturing Phase: Event travels from the root to the target element.
// Bubbling Phase: Event travels from the target element back to the root.

document.querySelector("div").addEventListener("click", () => {
    console.log("Div clicked");
}, true); // Capturing phase

button.addEventListener("click", (e) => {
    console.log("Button clicked");
    e.stopPropagation(); // Stops propagation
});
// Setting true in addEventListener makes it capture events during the capturing phase.
// stopPropagation() halts further propagation.
// Event Delegation
// Event delegation allows you to handle events efficiently by attaching a single listener to a parent element.




document.querySelector("ul").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log(`Clicked on item: ${e.target.textContent}`);
    }
});
// Events are delegated to list, reducing the need to add listeners to each list items.

// Preventing Default Behavior
// Certain elements have default actions (e.g., links navigating to URLs). Use preventDefault() to override them.




document.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Link click prevented");
});
// preventDefault() stops the link from navigating.

// Practical Applications
// 1. Form Validation



<html>
<body>
    <h2>Form Validation</h2>
    <form id="example">
        <input type="text" placeholder="Enter something" id="formInput" />
        <button type="submit">Submit</button>
    </form>
    <script>
        document.querySelector("#example").addEventListener("submit", (e) => {
            let input = document.querySelector("#formInput");
            if (!input.value) {
                e.preventDefault();
                alert("Input cannot be empty");
            }
        });
    </script>
​
</body>
​
</html>
// 2. Dynamic Content



<html>
​
<body>
    <h2>Dynamic Content</h2>
    <button id="button">Add Element</button>
    <script>
        document.querySelector("#button").addEventListener("click", () => {
            let newDiv = document.createElement("div");
            newDiv.textContent = "New Element Added";
            newDiv.style.margin = "10px 0";
            document.body.appendChild(newDiv);
        });
    </script>
​
</body>
​
</html>
// 3. Interactive Lists



<html>
​
<body>
    <h2>Interactive Lists</h2>
    <ul id="lists">
        <li>Interactive Item 1</li>
        <li>Interactive Item 2</li>
        <li>Interactive Item 3</li>
    </ul>
    <script>
        let ul = document.querySelector("#lists");
​
        ul.addEventListener("click", (e) => {
            if (e.target.tagName === "LI") {
                e.target.style.backgroundColor = "yellow";
            }
        });
    </script>
​
</body>
​
</html>