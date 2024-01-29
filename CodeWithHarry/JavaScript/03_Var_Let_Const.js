console.log("Diff between Var, Let and Const")

//Value of var can be changed  from anywhere in the program
var a = 10;
var a = 9;//Var can be re-declared
{
  var a = 11;
  console.log(a)
}
console.log(a)

//Use let in program.
//Value of let is block limited and cannot be changed.
let b  = 10;
//let b = 9 let cannot be re-declared
//we can chnage value of let
b = 9;
{
  let b = 11;
  console.log(b)
}
console.log(b);

//Value of const cannot be changed nor it can be re-declared
const auth = rax;
console.log(auth)

//Value of const neeb to be defined when it is declared,but value of let and var be defined later. 