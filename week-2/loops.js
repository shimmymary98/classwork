//loops
//types of loops
// for loop //known number of iterations
// while loop //unknown number of iterations
//do while // one iteration guaranteed
// for...of loop //iterating over iterable objects like arrays, strings, etc.
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// do...while loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);
// for...of loop    
let array = ['apple', 'banana', 'cherry'];
for (let fruit of array) {
    console.log(fruit);
}
// for...in loop (for objects)
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
    //output: a: 1, b: 2, c: 3

}
// nested loops
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
// output: i: 0, j: 0; i: 0, j: 1; i: 1, j: 0; i: 1, j: 1; i: 2, j: 0; i: 2, j: 1
// break and continue statements
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // skip the iteration when i is 2
    }
    console.log(i); // output: 0, 1, 3, 4
}