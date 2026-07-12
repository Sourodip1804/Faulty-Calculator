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
let c = prompt("enter operation")
let b = prompt("enter first second number: ")


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
    
    console.log(`The result is ${a} ${c} ${b}}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}

else{
    //Perform Wrong operation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}


