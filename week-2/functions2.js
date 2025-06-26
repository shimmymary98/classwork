//continuing functions
function greetFarmer(){
    console.log('hello,welcome to young4chicks')
}
greetFarmer();

//trying a new function
function greeting(name){
    return 'hello, welcome ' + name;
}

greeting('shimmy');
greeting('john');
greeting('max');

//another function 
function submitRequest(){
    return 'your request has been processed';
}

submitRequest()

//function with parameters and arguements
function calculateTotalCost(quantity ,price) {
    return quantity*price
}
calculateTotalCost(100,1650)
console.log(calculateTotalCost())

//functions with if statements
function getApprovedStatus(requestedChicks) {
    if (requestedChicks<=300) {
        return "approved"
    } else {
        return "rejected"
    }
}
//functions creating functions
function processChickRequest(requestedChicks) {
    let status = getApprovedStatus(requestedChicks);
    return `Your request for ${requestedChicks} chicks has been ${status}.`;
}   

