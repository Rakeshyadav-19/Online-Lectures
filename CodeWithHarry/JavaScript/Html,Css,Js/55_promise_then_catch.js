let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
            // console.log("I am a promise and I am resolved") //We don't normally do this
            resolve(true)
    }, 5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
            // console.log("I am a promise and I am rejected") //We don't normally do this
            reject(new Error("I am an error"))
    }, 5000)
})
// Here p1 and p2 doesnot take 10 sec it gets executed in 5 sec paralley


// To do some action after p1 is completed
// To get the value
p1.then((value) => { //WE use .then mostly
    console.log(value)
})

// To catch the errors and handel
// p2.catch((error) => {
//         console.log("some error occurred in p2")
// })

p2.then((value)=>{
    console.log(value) 
},(error)=>{
    console.log(error) //Does not create it as error, we catched it
})