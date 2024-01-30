//prints the console tools
console.log(console)

//Prints an error message
console.error("This is error") 

//If asertion is failed an error is thrown, if asertion works no erroe shown
//If true no problem, if false throw error
console.assert(5>10);
console.assert(55>10);

//clears the console
//console.clear();

//Shows object in tabular form
obj = {
    a: 1,
    b: 2,
    c: 3
}
console.table(obj)

//To give warning
console.warn("Hey close the tab");

//Give info
console.info("This is info")

//To check how much a process took time
let p1;
console.log('Started p1');
console.time(p1)
console.log('Almost done');
console.timeEnd(p1)

console.time("forLoop")
for (let i = 0; i < 500; i++) {
  console.log(233)
}
console.timeEnd("forLoop")


console.time("whileLoop")
let i = 0;
while (i < 500) {
  console.log(233)
  i++;
}
console.timeEnd("whileLoop")