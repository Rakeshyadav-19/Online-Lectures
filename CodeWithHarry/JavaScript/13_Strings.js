let name = "Rakesh"; //String can be created using double quotes
console.log(name);

let friend = 'Rax'; //String can be created using single quotes
console.log(friend);

//Template Literals

let boy1 = "Sahil";
let boy2 = "Ketan";
//Template literals use backticks instead of quotes to define a string
//We can insert variables directly in template literals. This is called string interpolation
//present at key above tab
//we can use single and double quotes inside a string
let sentance = `${boy1} is friend of ${boy2}`;
console.log(sentance);

//Escape Sequence Characters
//tu use single quote inside a single quote string use \
let fruit = 'Banana\'s';
console.log(fruit);

let num = "1\n2\n3\n4\n5";
console.log(num);
let num1 = "1\t2\t3\t4\t5";
console.log(num1);
let num2 = "r\rakesh";
// \r is used to replace the first character of the string with the second character
console.log(num2);
