//Array map method
let arr = [45, 23, 21];
//map creates a new array by performing some operation on each array element
//Takes 3 values, array.forEach((value, index, array) => { }  )
let a = arr.map((value, index, array) => {
  //We can give this paraameters as per our need
  console.log(value, index, array);
  return value + index;
});
console.log(a);

//We use for each when we want to perform operation on each element of an array, map creates a new array by performing some operation on each array element.

//Array filter method
let arr1 = [45, 23, 21, 0, 3, 5];
//filter an array with values that passes a test. Creates a new array
//name of function can be anything, e.g here it is a.
let a1 = arr1.filter((a) => {
  return a < 10;
});
console.log(a1);

//Array reduce method
let arr2 = [1, 2, 3, 5, 2, 1];
//reduce an array to a single value
//Takes 1st two values add them then (reult+2nd) then (result+3rd) and soo on...
let newarr2 = arr2.reduce((h1, h2)=>{return h1 + h2});
console.log(newarr2);

//OR
//We can also write function as
const reduce_func = (h1, h2) =>{
  return h1 + h2;
}
let newarr3 = arr2.reduce(reduce_func);
console.log(newarr3);