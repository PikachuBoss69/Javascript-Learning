// ## Types of Events
// There are many types of events, but they usually fall into a few common categories:

// 🖱️ Mouse Events: These fire when the user interacts with their mouse.
// click: A single click.
// contextmenu: The user right-clicks.
// mouseover / mouseout: The mouse pointer enters or leaves an element.
// mousedown / mouseup: The user presses or releases a mouse button.
// mousemove: The user moves the mouse.
// ⌨️ Keyboard Events: These happen when the user uses the keyboard.
// keydown: A key is pressed down.
// keyup: A key is released.
// 📄 Form Events: Related to interacting with forms (<input>, <form>, etc.).
// submit: The user submits a form (e.g., by clicking a submit button or pressing Enter).
// focus: The user clicks on or tabs into a form element, making it active.

// 🌐 Document Events: Related to the state of the webpage itself.
// DOMContentLoaded: The browser has finished loading and parsing the HTML, and the DOM tree is ready.
//  This is a very common event to listen for before running your main JavaScript code, to make sure all elements exist.
// ## How to Handle Events (Event Handlers)
// An "event handler" or "listener" is the function that runs when a specific event happens on a specific element. 
// There are a few ways to set one up.
// 1. HTML Attribute (The Old Way)
// You can put the JavaScript code directly inside an HTML attribute like onclick.
// HTML
{/* <input type="button" value="Click Me" onclick="alert('Hello!')"> */}
{/* Why it's not great: It mixes your HTML structure with your JavaScript logic, which can get very messy in larger projects. 
    It's best to avoid this method.

2. DOM Property (A Better Way)
You can assign a function directly to an element's property, like element.onclick.
JavaScript */}
let myButton = document.getElementById('myBtn');
myButton.onclick = function() {
  alert('You clicked me!');
};
{/* The big limitation: You can only have one function for each event property. If you try to assign another function, 
    it will overwrite the first one.
JavaScript */}
myButton.onclick = function() { alert('First message'); };
myButton.onclick = function() { alert('Second message'); }; // The first message will never show!
{/* 3. addEventListener (The Modern & Best Way) 👍
This is the recommended approach. It's clean, flexible, and powerful.
Syntax: element.addEventListener('eventName', functionToRun);
The key advantage is that you can add multiple handlers for the same event on the same element. They won't overwrite each other; 
they will all run.
JavaScript */}
let myButton = document.getElementById('myBtn');
function sayHello() {
  console.log('Hello!');
}
function sayGoodbye() {
  console.log('Goodbye!');
}
myButton.addEventListener('click', sayHello);
myButton.addEventListener('click', sayGoodbye);
// When you click the button, both "Hello!" and "Goodbye!" will be logged.
// To stop listening, you use removeEventListener.
// Syntax: element.removeEventListener('eventName', functionToRun);
// 🚨 Very Important: To remove a listener, you must pass the exact same function object that you originally added.
//  This means you cannot remove a listener that was added as an anonymous function (a function without a name).
// JavaScript
{/* // This works: */}
myButton.removeEventListener('click', sayHello);
{/* // This does NOT work, because it's a new, different function: */}
myButton.removeEventListener('click', function() { console.log('Hello!'); });
{/* ## The Event Object
When an event handler function runs, the browser automatically passes it a special object as its first argument.
 This object, often called event or e, contains a ton of useful information about what just happened. */}
// JavaScript
myButton.addEventListener('click', function(event) {
  // Now we can use the 'event' object inside this function
  console.log(event);
});
{/* Here are some of the most useful properties on the event object:

event.type: The type of event that occurred (e.g., "click", "mouseover").

event.currentTarget: The element that the event listener is attached to.

event.target: The actual element that triggered the event. 
(This can be different from currentTarget if you click on a child element inside it).

event.clientX / event.clientY: The X and Y coordinates of the mouse pointer relative to the visible part
 of the window when the event occurred.

event.key (for keyboard events): The value of the key that was pressed (e.g., "a", "Enter", "Shift").

Example putting it all together:
HTML */}

<button id="mainBtn">Click me anywhere!</button>
JavaScript

let btn = document.getElementById('mainBtn');

function handleClick(e) {
  console.log('Event type:', e.type); // "click"
  console.log('You clicked me!');
  console.log(`Mouse position: X=${e.clientX}, Y=${e.clientY}`);
  
  // Let's stop listening after the first click
  btn.removeEventListener('click', handleClick);
  console.log("Listener removed. I won't respond to more clicks.");
}

btn.addEventListener('click', handleClick);