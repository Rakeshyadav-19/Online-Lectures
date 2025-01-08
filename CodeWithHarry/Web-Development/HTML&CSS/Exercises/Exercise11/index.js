// Write a program to calculate factorial of a number using reduce and using for loops
// 6! = 6*5*4*3*2*1

// let fact = 6;
let fact = prompt("Enter number to calculate factorial");

let facto = [];

for (let i = 1; i <= fact; i++) {
  //   let fac = 1;
  //   fac = i * fac;
  facto.push(i);
}
console.log(facto);

let factorial = facto.reduce((x, y) => {
  return x * y;
  // console.log(a*b);
});

console.log(factorial);

// Harry sir
function factorial(number) {
  let arr = Array.from(Array(number + 1).keys());
  let c = arr.slice(1).reduce((a, b) => a * b);
  return c;
}
