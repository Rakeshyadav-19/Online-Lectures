let a = 1;
let b = 2;
let c = 3;
//Function
function Avg(x,y){
  //return (x+y)/2;
  //To roundof
  return Math.round((x+y)/2);
}
console.log("Average of a and b is ", Avg(a,b));
console.log("Average of b and c is ", Avg(b,c));
console.log("Average of c and a is ", Avg(c,a));

//Arrow Function
const sum = (p,q)=>{
  return p+q;
}
console.log(sum(9,7));

const hello = ()=>{
  console.log("Hey how are you");
  return "Hi";
}
let v = hello();
console.log(v);