//event listeners & event handling
// Event listeners are functions that are called when a specific event occurs on an element, such as
// a click, key press, or mouse movement. They allow you to respond to user interactions with the web page.
// You can add an event listener to an element using the `addEventListener` method.
function handleClick(event) {
    console.log('Element clicked:', event.target);
}
document.getElementById('myButton').addEventListener('click', handleClick);
// You can also remove an event listener using the `removeEventListener` method.
function handleMouseOver(event) {
    console.log('Mouse over element:', event.target);
}
document.getElementById('myElement').addEventListener('mouseover', handleMouseOver);
//examplwe of event handling with a button click
document.getElementById('myButton').addEventListener('click', function(event) {
    console.log('Button clicked:', event);
    alert('Button was clicked!');
}
);  
// You can also pass additional parameters to the event handler function.
function handleButtonClick(event, message) {
    console.log('Button clicked:', event);
    alert(message);
}
document.getElementById('myButton').addEventListener('click', function(event) {
    handleButtonClick(event, 'Hello from the button click handler!');
});
// You can use event delegation to handle events on dynamically added elements.
document.getElementById('parentElement').addEventListener('click', function(event) {
    if (event.target.matches('.childElement')) {
        console.log('Child element clicked:', event.target);
    }
});
//trying another event listener
let submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function(event) {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        console.log('Form submitted:', event.target);
        alert('Form submitted successfully!');
    });
});

//another example of event handling with a form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    let formData = new FormData(event.target);
    console.log('Form data submitted:', Object.fromEntries(formData.entries()));
    alert('Form submitted successfully!');
});
//another example of aevent listner button
document.getElementById('myButton').addEventListener('click', function(event) {
    console.log('Button clicked:', event);
    alert('Button was clicked!');
});
// Adding an event listener to a button
document.getElementById('myButton').addEventListener('click', function(event) {
    console.log('Button clicked:', event);
    alert('Button was clicked!');
});
//event listeners in a multiple elements
let myButton = document.getElementById('myButton');
myButton.addEventListener('click', function(event) {
    console.log('Button clicked:', event);
    alert('Button was clicked!');
});

//multiple event listeners on the same element
let myNewButton = document.getElementById('myElement');
myNewButton.addEventListener('click', function(event) {
    console.log('Element clicked:', event);
});
myNewButton.addEventListener('mouseover', function(event) {
    console.log('Mouse over element:', event);
}); 
