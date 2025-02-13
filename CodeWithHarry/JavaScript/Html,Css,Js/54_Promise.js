// Promise is a promise of code execution, it either executes or fails(In bith cases the user is notified)
//Either resolve or reject are callback is called(Predefined in JS).
// resolve(Vaue) -> If succeds
// reject(Error) -> If fails
// Promise object returned by new promise construcotr has these properties- 
// State  - fullfiled(The job is done & can result is given) or reject 
// Result - value or error
let promise = new Promise(function(resolve, reject){
    alert("Hello")
    resolve(56)
})
console.log("Hello One")

setTimeout(function() {
    console.log("Hello Two in 2 seconds")
}, 2000)

console.log("My name is " + "Hello Three")
console.log(promise)

// The 1,2,3 can be executed paralley instead of waiting for abive precess to finish.
// Promise can help to run them parallel

// 1.Fetch google.com homepage  ==> console.log("google.com homepage done")
// 2.Fetch data from the data api 
// 3.Fetch pictures from the server 
// Print downloading 
// Rest of the script 