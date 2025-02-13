//Q.1 Write a program to print the marks of a student in an object using for loop.
// obj =
let marks ={
  Rakesh: 90,
  Ramesh: 45,
  Rajesh: 56,
  Rohan: 57,
  Ritika: 23
}
//Object.keys(Object_Name) it creates an array of keys in that object
//Object.keys(Object_Name).length it gives the length of the array creted, equal to no. of keys in the object
for(let i = 0; i<Object.keys(marks).length; i++){
  console.log("The marks of "+ Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]);
}
//Object.keys(Object_Name)[i] it gives the keys of the object at that position in array
//marks[Object.keys(Object_Name)[i]] it gives the value of the object at that position in array

console.log("\n");

//Q.2 Write the program in Q1 using for in loop.
for(let key in marks){
  console.log("The marks of "+ key +" are "+marks[key]);
}

console.log(" \n");

//Q.3 Write a program to print "try again" until the user enters the correct number.
let cn = 5;
let i;
while(i != cn){
  i = prompt("Enter a number");
  console.log("Try Again");
}
console.log("Ypu have enterd the correct number ");

//Q.4 Write a function to find mean of 5 numbers.
const mean = (a,b,c,d,e) =>{
  return (a+b+c+d+e)/5
}
console.log("The mean of 5 numbers is "+mean(4,5,6,7,8));