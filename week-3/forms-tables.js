//forms and tables
// code for the form
//console.log(document.form[0].id);
//console.log(document.form[0].id.length);
//const firstform = document.getElementById('form1');



//table code
//const table = document.getElementById('tb1');
//let newRow = table.insertRow();
//let cell1 = newRow.insertCell(0);
//let cell2 = newRow.insertCell(1);
//let cell3 = newRow.insertCell(2);
//cell1.textContent = 'shimmy';
// cell2.textContent = '25';
// cell3.textContent = 'female';
//adding a new row
// newRow = table.insertRow();
//cell1 = newRow.insertCell(0);
// cell2 = newRow.insertCell(1);
//cell3 = newRow.insertCell(2);
//cell1.textContent = 'John';
//cell2.textContent = '30';
//cell3.textContent = 'male';
//adding a new row
// newRow = table.insertRow();
//cell1 = newRow.insertCell(0);
//cell2 = newRow.insertCell(1);
//cell3 = newRow.insertCell(2);
// cell1.textContent = 'Jane';
// cell2.textContent = '28';
// cell3.textContent = 'female';

//event handling (Always first declare the variables)
let age = document.getElementById('age').value.trim();
let name = document.getElementById('name').value;
let gender = document.getElementById('gender').value;
let errorMessage = document.getElementById('errorMessage');
let form = document.getElementById('form1')
const table = document.getElementById('tb1')

//form handling
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let form = document.getElementById('form1')
    let age = document.getElementById('age').value;
    let name = document.getElementById('name').value;
    let gender = document.getElementById('gender').value;
    let errorMessage = document.getElementById('errorMessage');
    if (!name || !age) {
        errorMessage.textContent = "please fill out all the fields";
        return;
    }

    if (age < 20 || age > 30) {
        errorMessage.textContent = 'age must be between 20 and 30 years';
        return;
    }

    if (gender !== "male" && gender !== "female") {
        errorMessage.textContent = "choose a proper gender";
        return;
    }



    addToTable(name,age,gender)
    form.reset()
});

//table function
function addToTable(name, age, gender) {
    const table = document.getElementById('tb1');
    let newRow = table.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    cell1.textContent = name;
    cell2.textContent = age;
    cell3.textContent = gender;
}


