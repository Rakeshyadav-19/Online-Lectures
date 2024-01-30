let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num1 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let num2 = [211, 212, 213, 214, 215, 216, 217, 218, 219];
console.log(num, typeof num);

// delete is an operator
//length of array will not change
delete num[0];
console.log(num);

//concat(), used to join arrays to the given array
//concat returns a new array, does not change existing arrays
let newArray = num.concat(num1, num2);
console.log(newArray);

//sort(), sorts an array alphabetically
//modifies the original array
//sort() takes an optional compare function. If this function is provided as the first argument the sort function will consider these values
let compare = (a, b) =>{
  //if a-b is positive then a will come before b
  //if a-b is negative then b will come before a
  //if a-b is 0 then no change
  return a - b;
  //it will sort in ascending order
  //if we want to sort in descending order then we have to return b-a
}
let num3 = [551, 22, 3, 14, 5, 6, 7, 8, 229];
//sort() takes an optional compare function.
//by default it sorts them by asuming them as strings
//all the 1s first then all 2nd then all 3s and soo on....
num3.sort();
console.log(num3);
//we need to pass a compare function to sort in desired order.
num3.sort(compare);
console.log(num3);

//reverse(), reverses the elements in the source array
//modifies the original array
num3.reverse();
console.log(num3);

//splice(), splice can be used to add new items to an array
//splice(position to add, no. of elements to remove, elements to be added)
//returns deleted items and modifies the array
let num4 = [551, 22, 3, 14, 5, 6, 7, 8, 229];
let deleted = num4.splice(2,3,1021,1022,1023,1024)
console.log(num4);
console.log(deleted)

//slice(), slices out a piece from an array. It creates a new array
//slice(start, end)
//returns deletd items and modifies the array
//end is not included
let num5 = [551, 22, 3, 14, 5, 6, 7, 8, 229];
//removes from index 3 to till the end
let newNum = num5.slice(3);
console.log(newNum);
//removes from indes 3 to 5
let newNum1 = num5.slice(3,5);
console.log(newNum1);
