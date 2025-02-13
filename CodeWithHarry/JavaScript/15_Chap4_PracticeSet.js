//Q.1 What will the following print in JavaScript?
console.log("har\"".length);

//Q.2 Explore the includes, startsWith & endsWith functions of a string.
const sentence = 'The quick brown fox jumps over the lazy dog';
const word = 'fox';
//Retursn true if the word is present in the sentence
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
//return true if the string start with that letter
console.log(sentence.startsWith('k'));
//return true if the string end with that letter
console.log(sentence.endsWith('g'));

//Q.3 Write a program to convert a given string to lowercase.
let str = "RAKESH";
console.log(str.toLowerCase());

//Q.4 Extract the amount out of this string
// "Please give Rs 1000"
let str1 = "Please give Rs 1000";
//Other wise 1000 will be treated as a string
let amount = Number.parseInt(str1.slice("Please give Rs ".length));
console.log(amount);

//Q.5 Try to change 4th character of a given string. Were you able to do it?
let friend = "Deepika";
//We cant do this because string is immutable
friend[3] = "r";
console.log(friend);
console.log(friend.replace("p","r"));//We can do this,but we cant change the original string