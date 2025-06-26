// the document object model
// The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing programming languages to manipulate the content, structure, and style of web pages.
// The DOM provides a way to access and modify the elements of a web page, such as HTML elements, attributes, and text content.
// The DOM is created by the browser when a web page is loaded, and it can be manipulated using JavaScript.
//how to access the DOM
// The DOM can be accessed using the `document` object in JavaScript.
// The `document` object represents the entire HTML document and provides methods to access and manipulate its elements.
// For example, to access an element by its ID, you can use `document.getElementById('elementId')`.
//Getting elements by class name or tag
document.getElementsByClassName('className'); // Returns a collection of elements with the specified class name
document.getElementsByTagName('tagName'); // Returns a collection of elements with the specified tag name
document.getElementById('elementId'); // Returns the first element with the specified ID
//querySelector and querySelectorAll
document.querySelector('selector'); // Returns the first element that matches the specified CSS selector
document.querySelectorAll('selector'); // Returns a NodeList of all elements that match the specified CSS selector
//Creating new elements
let newElement = document.createElement('div'); // Creates a new div element
newElement.textContent = 'Hello, World!'; // Sets the text content of the new element
document.body.appendChild(newElement); // Appends the new element to the body of the document
//Modifying existing elements
let existingElement = document.getElementById('existingElementId'); // Access an existing element
existingElement.textContent = 'Updated Content'; // Modify the text content of the existing element
existingElement.style.color = 'blue'; // Change the style of the existing element
//Removing elements
document.body.removeChild(existingElement); // Removes the existing element from the document
//Event handling
// Adding an event listener to an element
let button = document.getElementById('myButton'); // Access a button element
button.addEventListener('click', function() {
    alert('Button clicked!');
}); // Displays an alert when the button is clicked
//Accessing and modifying attributes
let link = document.querySelector('a'); // Access the first anchor element
link.setAttribute('href', 'https://www.example.com'); // Modify the href attribute
//dom with functions
function createElement(tag, text) {
    let element = document.createElement(tag);
    element.textContent = text;
    document.body.appendChild(element);
}   
// Example usage
createElement('h1', 'Hello, DOM!'); // Creates an h1 element with text "Hello, DOM!"
createElement('p', 'This is a paragraph.'); // Creates a p element with text "This is a paragraph."
// Accessing elements and modifying their content
function updateElementContent(selector, content) {
    let element = document.querySelector(selector);
    if (element) {
        element.textContent = content;
    } else {
        console.error('Element not found:', selector);
    }
}

// Example usage
updateElementContent('h1', 'Updated Heading'); // Updates the content of the first h1 element
updateElementContent('.my-class', 'Updated Content'); // Updates the content of the first element with class "my-class"

//innerHTML and textContent
// The `innerHTML` property allows you to get or set the HTML content of an element
let element = document.querySelector('.my-class');
element.innerHTML = '<strong>Bold Content</strong>'; // Sets the HTML content of the element
// The `textContent` property allows you to get or set the text content of an element
element.textContent = 'Plain Text Content'; // Sets the text content of the element