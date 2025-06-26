//3 ways of writing strings in javscript
// 1. Single quotes
let singleQuoteString = 'Hello, World!';
// 2. Double quotes
let doubleQuoteString = "Hello, World!";
// 3. Template literals (backticks)
let templateLiteralString = `Hello, World!`;
//template literals allow for multi-line strings and string interpolation
let name = 'John';
let greeting = `Hello, ${name}!`; // String interpolation
console.log(singleQuoteString); // Output: Hello, World!
console.log(doubleQuoteString); // Output: Hello, World!
console.log(templateLiteralString); // Output: Hello, World!
console.log(greeting); // Output: Hello, John!
// Template literals can also span multiple lines
let multiLineString = `This is a string
that spans multiple lines.`;
console.log(multiLineString); // Output: This is a string\nthat spans multiple lines.
// Template literals can include expressions
let a = 5;
let b = 10;
let sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // Output: The sum of 5 and 10 is 15.
// Template literals can be used to create HTML strings
let htmlString = `
    <div>
        <h1>${name}</h1>
        <p>Welcome to the site!</p>
    </div>
`;
console.log(htmlString); // Output: HTML string with name variable interpolated
// Template literals can also be used to create complex strings
let complexString = `
    <ul>
        <li>Item 1: ${a}</li>
        <li>Item 2: ${b}</li>
        <li>Sum: ${a + b}</li>
    </ul>

`;
console.log(complexString); // Output: Complex HTML string with variables interpolated
// Template literals can be used to create strings with dynamic content
let user = {
    name: 'Alice',
    age: 30
};
let userString = `
    <div>
        <h2>User Information</h2>
        <p>Name: ${user.name}</p>
        <p>Age: ${user.age}</p>
    </div>
`;
//template literals with funcctions and if statements
function getUserInfo(user) {
    return `
        <div>
            <h2>User Information</h2>
            <p>Name: ${user.name}</p>
            <p>Age: ${user.age}</p>
            <p>Status: ${user.age >= 18 ? 'Adult' : 'Minor'}</p>
        </div>
    `;
}
console.log(getUserInfo(user)); // Output: User information with age check
// Template literals can be used to create strings with loops
function getItemsList(items) {
    let listItems = items.map(item => `<li>${item}</li>`).join('');
    return `
        <ul>
            ${listItems}
        </ul>
    `;
}
//template with user prompts
let items = ['Apple', 'Banana', 'Cherry'];
console.log(getItemsList(items)); // Output: List of items in HTML format
// Template literals can be used to create strings with user prompts
function getUserPrompt() {
    let userName = prompt('Enter your name:');
    let userAge = prompt('Enter your age:');
    return `
        <div>
            <h2>Welcome, ${userName}!</h2>
            <p>Your age is ${userAge}.</p>
        </div>
    `;
}
console.log(getUserPrompt()); // Output: User prompt with name and age
// Template literals can be used to create strings with user input
function getUserInput() {
    let userInput = prompt('Enter some text:');
    return `
        <div>
            <p>You entered: ${userInput}</p>
        </div>
    `;
}
console.log(getUserInput()); // Output: User input displayed in HTML format
// Template literals can be used to create strings with user input and conditions
function getUserInputWithCondition() { 
    let userInput = prompt('Enter a number:');
    let number = parseInt(userInput, 10);
    return `
        <div>
            <p>You entered: ${number}</p>
            <p>Status: ${number >= 10 ? 'High' : 'Low'}</p>
        </div>
    `;
}
