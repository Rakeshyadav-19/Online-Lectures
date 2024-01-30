//Strings are iimutable
//we cant change the string

let name = "Rakesh";
//.length is a property
console.log(name.length);

//.toUpperCase() is a function
console.log(name.toUpperCase());
console.log(name.toLowerCase());

//.slice() is a function
//.slice(a,b) it will print the characters from a to b-1
console.log(name.slice(2,4));
//.slice(a) it will print the characters from a to end of the string
console.log(name.slice(2));

//.replace() is a function
//.replace("a","b") it will replace all the occurences of a with b
console.log(name.replace("Rak","Pak"));

//.concat() is a function
//.concat("a","b") it will concatenate a and b
let friend = "Ramesh";
console.log(name.concat(" is a friend of ",friend," Ok"));

//.trim() is a function
//.trim() it will remove the whitespaces from the string
let friend2 = "    Rajesh    ";
console.log(friend2);
console.log(friend2.trim());