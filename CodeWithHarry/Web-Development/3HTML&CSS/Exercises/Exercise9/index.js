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

function calculate(x, y) {
  console.log("a+b=", x + y);
  console.log("a*b=", x * y);
  console.log("a-b=", x - y);
  console.log("a/b=", x / y);
}

function fcalculate(x, y) {
  console.log("a+b=", x - y);
  console.log("a*b=", x + y);
  console.log("a-b=", x / y);
  console.log("a/b=", x ** y);
}

let fault = Math.random();
// var x = prompt("enter 1st number");
// var y = prompt("enter 2nd number");
if (fault <= 0.1) {
  //   fcalculate(x, y);
  fcalculate(6, 2);
} else {
  //   calculate(x, y);
  calculate(6, 2);
}

// Harry sir
let random = Math.random();
console.log(random);
let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  // Perform correct calculation
  console.log(`The result is ${a} ${c} ${b}`);
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`); //eval used to calculate.
} else {
  // Perform wrong calculation
  c = obj[c];
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
