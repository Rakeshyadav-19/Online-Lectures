//Take input from user
let a = prompt("Hey whats you age?")
console.log(typeof a)
a = Number.parseInt(a); // Converting the string to a number

if(a<0){
  alert("This is not a valid age")
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving")
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18")
}
else{
  alert("You can now drive as you are above 18")
}
console.log("Done")

//Ternary operator
console.log("You can", (a<18? "not drive" :"drive"))

//Homework - Explore switch statement and write a basic program in the comments

//Switch statement
const expr = 'Papayas';
switch (expr){
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      // Expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
}