/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let random = Math.random()
let a = prompt("enter first number: ")
let b = prompt("enter first second number: ")
let c = prompt("enter operation")


// definition of the object
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

// using if else statement for the operation

if (random > 0.1){
    //Perform the correct calculation
}


