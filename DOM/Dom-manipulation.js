
                            // 1. Change the Content of an Element
// You can change the content inside an HTML element using JavaScript. The two most common properties for this are innerHTML and textContent:

// innerHTML: Allows you to get or set the HTML content inside an element.
// textContent: Allows you to get or set the text content inside an element, ignoring any HTML tags.

<body>
    <div id="example1">This is the original content using innerHTML.</div>
    <div id="example2">This is the original text content using textContent.</div>

    <button onclick="changeContent()">Change Content</button>

    <script>
        // Function to change content
        function changeContent() {
            document.getElementById("example1").innerHTML = 
            "<strong>This is changed using innerHTML!</strong>";

            document.getElementById("example2").textContent = 
            "This is changed using textContent!";
        }
    </script>
</body>
// Output

// Animationkk
// DOM Manipulation - Change the Content of an Element
// In this example

// innerHTML changes the entire content of an element, including HTML tags. In this case, we replace the content of the first div with bold text using <strong>.
// textContent changes only the text inside the element, ignoring any HTML tags. The second div is updated with plain text, without any HTML formatting.
// The first div shows "This is the original content using innerHTML."
// The second div shows "This is the original text content using textContent."
// After clicking the "Change Content" button.
// The first div will display "This is changed using innerHTML!" with bold text.
// The second div will display "This is changed using textContent!" with plain text.

                                    // 2. Manipulate the Class Attribute
// You can add, remove, or toggle classes on an element using JavaScript. This is helpful for styling or applying animations.

classList.add(): Adds a class to an element.
classList.remove(): Removes a class from an element.
classList.toggle(): Toggles a class (adds it if it's not present, removes it if it is).

<html>
<head>
    <style>
        .highlight {
            color: red;
            font-weight: bold;
        }
        .bold {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div id="example" class="bold">This is a text element with the "bold" class.</div>

    <button onclick="addClass()">Add 'highlight' Class</button>
    <button onclick="removeClass()">Remove 'bold' Class</button>
    <button onclick="toggleClass()">Toggle 'highlight' Class</button>
    <script>
        function addClass() {
            document.getElementById("example").classList.add("highlight");
        }
        function removeClass() {
            document.getElementById("example").classList.remove("bold");
        }
        function toggleClass() {
            document.getElementById("example").classList.toggle("highlight");
        }
    </script>
</body>
</html>
// Output:

// Animationkk
// Dom Manipulation - Manipulate the Class Attribute
// In this example

// Adding a Class (addClass()): When you click the "Add 'highlight' Class" button, the highlight class is added to the div element with the id="example". This changes the text color to red and makes it bold (as defined in the CSS).
// Removing a Class (removeClass()): When you click the "Remove 'bold' Class" button, the bold class is removed from the div, which removes the bold styling from the text.
// Toggling a Class (toggleClass()): When you click the "Toggle 'highlight' Class" button, the highlight class is either added or removed, depending on whether it's already present. If the class is present, it will be removed; if not, it will be added.

                            // 3. Set CSS Styles Using JavaScript
// You can directly manipulate the CSS styles of an element using the style property. This allows you to dynamically change how elements appear on the page.


// Changing multiple CSS properties
document.getElementById("demo").style.color = "red";
document.getElementById("demo").style.fontSize = "20px";
// Adding more than one style
document.getElementById("demo").style.cssText = "color: blue; font-size: 18px;";
                        
                                //4. Create, Add, and Remove Elements
// Sometimes, you need to create new elements, add them to the DOM, or remove existing ones. You can do this easily with the following methods

document.createElement(): Creates a new element.
// appendChild(): Adds a new element to a parent element.
// removeChild(): Removes a child element from a parent.

// Create a new element
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";
// Add the new element to the DOM
document.body.appendChild(newDiv);
// Remove an element from the DOM
document.body.removeChild(newDiv);

                            // 5. Insert Elements at a Specific Position
// You can insert new elements at specific positions relative to existing elements using methods like insertBefore().


// Create a new element
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";

// Find an existing element to insert before
let referenceNode = document.getElementById("referenceElement");

// Insert the new element before the reference element
document.body.insertBefore(newDiv, referenceNode);
                            
                                // 6. Manipulate Element Attributes
// You can easily get, set, or remove the attributes of an HTML element using the following methods:

// getAttribute(): Retrieves the value of an attribute.
// setAttribute(): Sets a new value for an attribute.
// removeAttribute(): Removes an attribute.

// Get the value of an attribute
let src = document.getElementById("image").getAttribute("src");

// Set a new value for an attribute
document.getElementById("image").setAttribute("src", "new-image.jpg");

// Remove an attribute
document.getElementById("image").removeAttribute("src");
                        
                                    // 7. Manipulate Data Attributes
// HTML5 introduced data attributes, which are custom attributes that you can use to store extra information about an element. These are particularly useful for adding data to an element without affecting its visual structure.

// dataset: A special property in JavaScript that allows you to access data attributes.

// Setting a data attribute
document.getElementById("demo").dataset.userId = "12345";
// Getting a data attribute
let userId = document.getElementById("demo").dataset.userId;
console.log(userId); // Outputs: 12345

                                                // Conclusion
// Manipulating the DOM with JavaScript is a core aspect of web development. Understanding how to select, modify, and manipulate DOM elements enables you to create dynamic, interactive web applications. With the power to change text, styles, attributes, and even structure in real-time, JavaScript empowers developers to build rich, user-responsive websites.
