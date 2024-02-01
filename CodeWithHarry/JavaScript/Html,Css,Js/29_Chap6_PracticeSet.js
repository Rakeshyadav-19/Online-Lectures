//Q.1 write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive.
let age = prompt("Enter your age");
age = Number.parseInt(age);
if (age >= 18) {
  alert("You can drive");
} else {
  alert("You cannit drive");
}
//OR
/*
let age = prompt("Enter your age");
age = Number.parseInt(age);
const canDrive = (age) =>{
  return age >= 18 ? true : false
}
if (canDrive(age)){
  alert("You can drive");
}
else{
  alert("You cannit drive");
}
*/

//Q.2 In Q.1 use confirm to ask the user if he wants to see prompt again.
let con = true;
do{
  let age2 = prompt("Enter your age");
  age2 = Number.parseInt(age2);
  if (age2 >= 18) {
    alert("You can drive");
  } else {
    alert("You cannit drive");
  }
  con = confirm("Would you  like to see the prompt again");
}while (con == true) 

//Q.3 In the previous question, use console.error to log the error if the age entered is negative.
let age1 = prompt("Enter your age");
age1 = Number.parseInt(age1);
if (age1 >= 18) {
  alert("You can drive");
} else if (age1 <= 0) {
  console.error("You entered a negative age");
} else {
  alert("You can't drive");
}

//Q.4 Write a program to change the url to google.com (Redirection) if user enters a number greater
let num1 = prompt("Enter a number");
num1 = Number.parseInt(num1);
if (num1 >= 1) {
  console.href = "https://google.com";
} else{
  alert("You enterd small number");
}

//Q.5 Change the background of the page to yellow, red or any other color based on user input through prompt.
let color = prompt("Enter a color");
document.body.style.background = color;