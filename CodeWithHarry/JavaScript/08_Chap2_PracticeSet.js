//Q.1 Use logical operators to find whether the age of a person lies between 10 and 20?
let age = prompt("What is your age?");
age = Number.parseInt(age)
if(age>10 && age<20){
  console.log("Your age lies betweeen 10 and 20");
}
else{
  console.log("Your age does not lies between 10 and 20");
}

//Q.2 Demonstrate the use of switch case statements in JavaScript.
let number = prompt("Enter a number");
switch(number){
  case '1':
    console.log("Number is 1");
    break;
  case '2':
    console.log("Number is 2");
    break;
  case '3':
    console.log("Number is 3");
    break;
  case '4':
    console.log("Number is 4");
    break;
  case '5':
    console.log("Number is 5");
    break;
  default:
    console.log("Number is not between 1 and 5");
}

//Q.3 Write a JavaScript program to find whether a number is divisible by 2 and 3.
let num = prompt("Enter a number");
num = Number.parseInt(num);
if(num%2==0 && num%3==0)
{
  console.log("Number is divisible by 2 and 3");
}
else{
  console.log("Number is not divisible by 2 and 3");
}

//Q.4 Write a JavaScript program to find whether a number is divisible by either 2 or 3.
let num1 = prompt("Enter a number");
num1 = Number.parseInt(num1);
if(num1%2==0)
{
  console.log("Number is divisible by 2");
}
else if(num1%3==0){
  console.log("Number is divisible by 3");
}
else{
  console.log("Number is  nott divisible by 2 and 3")
}

//Q.5 Print "You can drive" or "You cannot drive" based on age being greater than 18 using ternary operator.
let age1 = prompt("Enter your age");
age1 = Number.parseInt(age1);
console.log("You can ",(agr>18? "Drive":"Not Drive"));