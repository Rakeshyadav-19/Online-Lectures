let num = [3, 5, 1, 2, 4];

//Normal for loop
for(let i=0; i<num.length; i++){
  console.log(num[i]);
}

//forEach loop
//Takes 3 values, array.forEach((value, index, array) => { }  )
//for every element in the array, perform the function
num.forEach((element) =>{
  console.log(element*element);
})

//Array.from
//used to create an array from any other object
let name = "Rakesh";
//converted string to array
let arr = Array.from(name);
console.log(arr);

//for...of
//shortcut to access array elements
//it is used to access array elements
for(let i of num){
  console.log(i);
}
//for...in
//gives the keys of the array
for(let i in num){
  console.log(i);
  //console.log(num[i]);
}