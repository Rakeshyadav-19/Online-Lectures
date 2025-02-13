//t is collection of items.
//Arrays are mutable. Arrays can be changed.

let a = [1,2,3,4,5,6,7,8,9];
console.log(a);

let arr = [19,false,null,"Rakesh"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);//undefined
arr[4] = "Ramesh";//Adding a new value to the array
console.log(arr[4]);
arr[0] = 10;//Changing the value of an array
console.log(arr[0]);
console.log("The lenth of arr is ", arr.length)
console.log(typeof arr);