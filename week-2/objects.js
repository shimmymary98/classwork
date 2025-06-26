
let person={
firstName:"shimmy",
age:27,
weight:70.0,
profession:"Lawyer",
occupation:"enterpreneur"
}

console.log(person.age);
console.log(person.firstName);
console.log(person.weight);
console.log(person.profession);
console.log(person.occupation);

console.log(this.person);
// Accessing object properties
console.log(person['firstName']); // using bracket notation
console.log(person['age']); // using bracket notation
console.log(person['weight']); // using bracket notation
console.log(person['profession']); // using bracket notation
console.log(person['occupation']); // using bracket notation
// Modifying object properties
person.age = 28; // changing age
console.log(person.age); // Output: 28
person.firstName = "John"; // changing firstName
console.log(person.firstName); // Output: John      
// Adding new properties
person.city = "Kampala"; // adding city property
console.log(person.city); // Output: Kampala
// Deleting properties
delete person.weight; // deleting weight property
console.log(person.weight); // Output: undefined
// Checking if a property exists
console.log('profession' in person); // Output: true
console.log('height' in person); // Output: false
// Looping through object properties        
for (let key in person) {
    console.log(key + ": " + person[key]); // Output: key and value pairs
}   
// Object methods
person.greet = function() {
    return "Hello, my name is " + this.firstName;
};
console.log(person.greet()); // Output: Hello, my name is John
// Object with nested objects
let employee = {    
    name: "Jane",
    position: "Developer",
    skills: {
        programming: "JavaScript",
        database: "MongoDB"
    }
};
console.log(employee.skills.programming); // Output: JavaScript
console.log(employee.skills.database); // Output: MongoDB
