//Array methods

let num = [1, 2, 3, 34, 4];
console.log(num, typeof num);

//toString(), Converts an array to a string of comma separated values
let str = num.toString();
console.log(str, typeof str);

//join(), Joins all the array elements using a separator, the is a string, that we decide to use
let jn = num.join("_");
console.log(jn, typeof jn);

//pop(), Removes the last element from an array
let r = num.pop()//r will store the pooped value, it returns pooped value
console.log(num);
console.log("The pop return the last element poped", r);

//push(), Adds a new element at the end of the array
let p = num.push(56);//push returns the new array length
console.log(num);
console.log("Push will return new length of array",p);

//shift(), Removes the first element and returns it
let s = num.shift();
console.log(num);
console.log("Shift will return the first element removed",s);

//unshift(), Adds a new element to the beginning of the array
let u = num.unshift(78);
console.log(num);
console.log("Unshift will return the new length of array",u);