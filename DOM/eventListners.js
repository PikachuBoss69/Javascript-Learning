// The addEventListener() method is used to attach an event handler to an element in the DOM (Document Object Model). It listens for specific events (such as click, keydown, or submit) on that element and executes a function when the event occurs.

// Syntax

// element.addEventListener(event, function, useCapture);
// element: The DOM element you want to listen for events on (for example, document, button, div).
// event: The type of event you want to listen for, such as 'click', 'keydown', 'submit', etc.
// function: The function to be executed when the event is triggered. It could be an anonymous function or a reference to a named function.
// useCapture (optional): A boolean value that specifies whether to use event capturing.
// How addEventListener() Works?
// When you use addEventListener(), you’re essentially telling JavaScript to "watch" for a specific event on an element. Here's how it works:

// Choose an element: We need to select the element we want to attach an event to.
// Specify the event type: This could be any event like click, hover, keyup, etc.
// Define the action: Provide the function that should run when the event happens.
// Note => The event listener continuously checks for the occurrence of the specified event, and once it happens, the corresponding function is executed.

// Now let's understand this with the help of example:

<html>
<head>
    <title>JavaScript addEventListeners</title>
</head>
​
<body>
    <button id="try">Click here</button>
    <h1 id="text"></h1>
    <script>
        document.getElementById("try").addEventListener("click", function () {
            document.getElementById("text").innerText = "GeeksforGeeks";
        });
    </script>
</body>
​
</html>

// Adding Multiple Event Listeners to an Element
// In JavaScript, we can attach multiple event listeners to the same element. Each event listener can handle a different event or the same event type, and they will all trigger their respective functions when the event occurs.

// Let's understand this with the help of example




<html>
​
<head>
    <title>Multiple Event Listeners Example</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }
​
        #myButton {
            padding: 15px 30px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #4CAF50;
            color: white;
            transition: background-color 0.3s ease;
        }
​
        #myButton:hover {
            background-color: #45a049;
        }
​
        #message {
            font-size: 20px;
            font-weight: bold;
            margin-top: 20px;
        }
    </style>
</head>
​
<body>
    <div>
        <button id="myButton">Click me!</button>
        <h1 id="message"></h1>
    </div>
​
    <script>
        const button = document.getElementById("myButton");
        const message = document.getElementById("message");
​
        button.addEventListener("click", function () {
            button.style.backgroundColor = "lightblue";
            message.innerText = "Button was clicked!";
        });
​
​
        button.addEventListener("mouseenter", function () {
            message.innerText = "Mouse is over the button!";
        });
​
​
        button.addEventListener("mouseleave", function () {
            message.innerText = "Mouse left the button!";
        });
​
​
        document.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                message.style.color = "green";
                message.innerText = "Enter key pressed!";
            }
        });
    </script>
​
</body>
</html>

// event-listner-1
// JavaScript addEventListener()
// In this example

// Click Event: When the button is clicked, its background color changes to lightblue and the message updates to "Button was clicked!".
// Mouse Enter Event: When the mouse hovers over the button, the message changes to "Mouse is over the button!".
// Mouse Leave Event: When the mouse leaves the button, the message updates to "Mouse left the button!".
// Keydown Event: When any key is pressed, if the Enter key is pressed, the message color changes to green and displays "Enter key pressed!".
// The button reacts to mouse events (click, hover, leave) and a keyboard event (Enter key press), updating the message accordingly



// RemoveEventListener() method
// To remove an event listener in JavaScript, we can use the removeEventListener() method. This method allows us to remove an event listener that was previously added with addEventListener(). It requires the same arguments as addEventListener(), including the event type, the callback function, and the useCapture flag.




<html>
<head>
    <title>Remove Event Listener Example</title>
    <style>
        #myButton {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            background-color: lightcoral;
            color: white;
            border: none;
            border-radius: 5px;
        }
    </style>
</head>
​
<body>
​
    <button id="myButton">Click me (3 times)</button>
    <p id="message">You have clicked the button 0 times.</p>
​
    <script>
        const button = document.getElementById('myButton');
        const message = document.getElementById('message');
​
        let clickCount = 0;
        function handleClick() {
            clickCount++;
            message.innerText = `You have clicked the button ${clickCount} times.`;
            if (clickCount === 3) {
                button.removeEventListener('click', handleClick);
                message.innerText = 'You clicked the button 3 times. Event listener removed!';
            }
        }
        button.addEventListener('click', handleClick);
    </script>
​
</body>
​
</html>