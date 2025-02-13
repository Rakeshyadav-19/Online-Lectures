//Programs to add first n natural numbers
let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n)
for(let i=0; i<=n; i++){
  sum += i;
}
console.log("Sum of first " + n + " natural numbers is " + sum);

//Programs to find factorial of a number
let fact = 1;
let n1 = prompt("Enter the value of n");
n1 = Number.parseInt(n1);
for(let i = 1; i<=n; i++){
  fact *= i;
}
console.log("Factorial of number "+n1+" is "+fact);

//For In Loop
let obj ={
  Rakesh: 90,
  Ramesh: 45,
  Rajesh: 56,
  Rohan: 57,
  Ritika: 23
}
for(let a in obj){
  //It willl print key of object
  console.log(a);
  //It will print value of object
  console.log(obj[a])
}

//For OF Loop
//We need array or string to use for of loop
for(let b of "Rakesh"){
  console.log(b);
}