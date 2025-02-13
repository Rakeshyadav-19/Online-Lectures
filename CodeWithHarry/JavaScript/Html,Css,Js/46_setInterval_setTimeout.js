const sum = (a, b, c) => {
  console.log("Yes I am running " + (a + b + c))
  a + b
}
//sum function will be executed after 100ms and values passed will be arguments(1,2,7) and it will stop
//setTimeout(function,<timeinterval>,arg1,arg2,....)
setTimeout(sum, 1000, 1, 2, 7)

//after this many time it will execute.
let a = setTimeout(function() {
    alert("I am inside of settimeout")
}, 5000)
//will print the timer id
console.log(a)

let b = prompt("Do you want to run the settimout?")
if ("n" == b) {
    //it will stop the execution of this setTimeout
    clearTimeout(a)
}

//it will be excuted infinte after tam many time interval
// setInterval(function() {
    //   alert("setinterval")
    // }, 3000)

    
let num = 1;
const mul  = (a) =>{    
    let val = (a * num);
    
    if(num == 11){
        clearInterval(iid)
    }
    else{
        document.write(`${a} X ${num}= ${val}<br>`)
    }
    num++;
}
//setInterval(function(),<time-Interval>,arg1,arg2)
let iid = setInterval(mul, 2000, 5) 