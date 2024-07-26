// Q.1 Write a program to load  JS file in a browser using Promises, use .then() to display an alert when load is complete.
const load = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = src
        script.onload = () => {
            setTimeout(() => {
                resolve(56)
            }, 5000)
        }
        script.onerror = () => {
            new Error("Someting wrong in script")
        }
        document.body.appendChild(script)
    })
}
// let p = load("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
// p.then((value) => {
//     console.log("Load is complete " + value)
// })



// Q.2 for above question use async await
const fun = async () => {
    console.log("Script Started")
    let a = await load("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
    console.log("Scripe loaded with resolve " + a)
}
// fun()



// Q.3 Create a promise which rejects after 3 sec. use async/await to get its value , use a try catch to handel this error.
const loadsrc = async (src) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Server did not respond for src " + src)
        }, 3000);
    })
}
const fun1 = async () => {
    console.log("Started download")
    try {
        let result = await loadsrc("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
        console.log(result)

    } catch (error) {
        console.log("Result " + error)
    }
}
// fun1()




// Q.4 Write program using promise.all inside async/await to await 3 promises.Compare its result with the case where we awit the promise one by one.
let p1 = async()=>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(29)
        }, 4000);
    })
}  
let p2 = async()=>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(39)
        }, 4000);
    })
}  
let p3 = async()=>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(49)
        }, 4000);
    })
}  

let fun3 = async ()=>{
    console.time("fun3")
    // let a = await p1()
    // let b = await p2()
    // let c = await p3()
    // console.log(a,b,c) //Took approx 12 sec

    let a = p1()
    let b = p2()
    let c = p3()
    let abc = await Promise.all([a,b,c])
    console.log(abc) //Took approx 4 sec
    console.timeEnd("fun3")
}
fun3()