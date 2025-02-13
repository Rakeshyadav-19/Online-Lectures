//Alerts the user 
alert("This is alert message");

//We can give adefault value in prompt
let a = prompt("Enter a value", "29");
a = Number.parseInt(a)
//Writes this value in document
alert("You enter the number of type "+ (typeof a))
alert("You enter the number "+a)
console.log(a);

//Confirm waits for user to press ok or cancel
//If cancel return false
//If ok return true
let write = confirm("Do you want to write it to the page")
if (write) {
  document.write(a)
}
else {
  document.write("Please allow me to write")
}