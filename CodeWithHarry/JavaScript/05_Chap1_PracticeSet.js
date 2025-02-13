//Q-1 Create a variable of type string and try to add a number to it.
let a = "Rakesh"
let b = 29
console.log(a+b) //The string and number is concatenated


//Q-2 Use typeof operator to find the datatype of the string in last question.
console.log(typeof (a+b))

//Q-3 Create a const object in javascript. Can you change it to hold a number later?
const a1 = {
  name: "Rakesh",
  section: 1,
  isPrincipal: false
}
//a = "Rakesh", " 59" //No we cannot change it to hold a number later

//Q-4 Try to add a new key to the const object in problem 3. Were you able to
//We added a key and value in object
a1['friend'] = "Rax"
console.log(a1)
//Value can be changed of variable declared in object
a1['name'] = "Ramesh"
console.log(a1)

//Q-5 Write a JS program to create a word-meaning dictionary of 3 words.
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work."
}
//Two ways to print key value
console.log(dict.yakka)
console.log(dict['yakka'])
