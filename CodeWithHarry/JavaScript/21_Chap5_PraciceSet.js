//Q.0 Create an array of numbers and take input from the user to add(sum) numbers to this array.
let z = [1, 2, 3, 4, 5, 6, 7, 8];
 let n = prompt("Enter a number");
n = Number.parseInt(n);
let nr = z.map((value) =>{
  return value + n;
});
console.log(nr);

//Q.1 Creae an array of numbers and take input from the user to add numbers to this array.
let arr = [1, 2, 3, 4, 5, 6, 7, 83];
let a = prompt("Enter a number");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

//Q.2 Keep adding numbers to the array in Q.1 until 0 is added to the array.
let arr1 = [1, 2, 3, 4, 5, 6, 7, 83];
let a1;
do{
  a1 = prompt("Enter a number");
  a1 = Number.parseInt(a1);
  arr1.push(a1);
}while(a1 != 0);
console.log(arr1);

//Q.3 Filter for numbers divisible by 10 from a given array.
let arr2 = [1, 2, 30, 4, 50, 6, 7, 83, 670];
let filt = arr2.filter((a) =>{
  return a%10 == 0;
})
console.log(filt);

//Q.4 Create an array of square of given numbers.
let arr3 = [1,2,3,4,5];
let sqarr = arr3.map((x) =>{
  return x*x;
})
console.log(sqarr);

//Q.5 Use reduce to calculate factorial of a given number from an array of first n natural numbers
let arr4 = [1,2,3,4,5];
let red = arr4.reduce((y,z) => {
  return y*z;
})
console.log(red);