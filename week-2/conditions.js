//if statements
//if and else are conditionalsstatements
//else runs if the condition is false 
if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}
//if and else if statements
//else if is used to check multiple conditions
if (condition1) {
    // code to execute if condition1 is true
} else if (condition2) {
    // code to execute if condition2 is true
} else {
    // code to execute if both condition1 and condition2 are false
}

//switch statements
//switch statements are used to execute one block of code among many options
switch (expression) {
    case value1:
        // code to execute if expression === value1
        break;
    case value2:
        // code to execute if expression === value2
        break;
    default:
        // code to execute if expression doesn't match any case
}
//switch menu example
let menu = 'chicken';      
switch (menu) {
    case 'chicken':
        console.log('You ordered chicken');
        break;
    case 'beef':
        console.log('You ordered beef');
        break;
    case 'fish':
        console.log('You ordered fish');
        break;
    default:
        console.log('Unknown menu item');
}
//switch example with a variable
let day = 'Monday';
switch (day) {
    case 'Monday':
        console.log('Start of the week');
        break;
    case 'Tuesday':
        console.log('Second day of the week');
        break;
    case 'Wednesday':
        console.log('Midweek');
        break;
    case 'Thursday':
        console.log('Almost weekend');
        break;
    case 'Friday':
        console.log('End of the work week');
        break;
    default:
        console.log('Weekend or unknown day');
}
//switch example with a variable and a function
function getDayMessage(day) {
    switch (day) {
        case 'Monday':
            return 'Start of the week';
        case 'Tuesday':
            return 'Second day of the week';
        case 'Wednesday':
            return 'Midweek';
        case 'Thursday':
            return 'Almost weekend';
        case 'Friday':
            return 'End of the work week';
        default:
            return 'Weekend or unknown day';
    }
}
getDayMessage('Monday'); // "Start of the week"
getDayMessage('Friday'); // "End of the work week"  
getDayMessage('Sunday'); // "Weekend or unknown day"
//switch example with a variable and a function with a default case
function getMenuMessage(menu) { 
    switch (menu) {
        case 'chicken':
            return 'You ordered chicken';
        case 'beef':
            return 'You ordered beef';
        case 'fish':
            return 'You ordered fish';
        default:
            return 'Unknown menu item';
    }
}
getMenuMessage('chicken'); // "You ordered chicken"
getMenuMessage('beef'); // "You ordered beef"   
getMenuMessage('pork'); // "Unknown menu item"
//switch example with a variable and a function with multiple cases
function getWeatherMessage(weather) {
    switch (weather) {
        case 'sunny':
            return 'It is a sunny day';
        case 'rainy':
            return 'It is a rainy day';
        case 'cloudy':
            return 'It is a cloudy day';
        case 'snowy':
            return 'It is a snowy day';
        default:
            return 'Weather condition unknown';
    }
}
//Ternary operator
//The ternary operator is a shorthand for an if-else statement
let weather = 'sunny';
let message = (weather === 'sunny') ? 'It is a sunny day' : 'It is not a sunny day';

console.log(message); // "It is a sunny day"
//Ternary operator with a function
function getWeatherMessage(weather) {
    return (weather === 'sunny') ? 'It is a sunny day' : 'It is not a sunny day';
}
getWeatherMessage('sunny'); // "It is a sunny day"
getWeatherMessage('rainy'); // "It is not a sunny day"
//Ternary operator with a function and multiple conditions
function getWeatherMessage(weather) {
    return (weather === 'sunny') ? 'It is a sunny day' :
           (weather === 'rainy') ? 'It is a rainy day' :
           (weather === 'cloudy') ? 'It is a cloudy day' :
           (weather === 'snowy') ? 'It is a snowy day' :
           'Weather condition unknown';
}
getWeatherMessage('sunny'); // "It is a sunny day"
getWeatherMessage('rainy'); // "It is a rainy day"
getWeatherMessage('cloudy'); // "It is a cloudy day"
getWeatherMessage('snowy'); // "It is a snowy day"
getWeatherMessage('foggy'); // "Weather condition unknown"