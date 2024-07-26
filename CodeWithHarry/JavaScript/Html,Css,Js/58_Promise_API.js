let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Value 1");
    }, 11000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
            // resolve("Value 2");
            reject(new Error("Error"));
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Value 3");
    }, 3000);
});
// If i want to do some work after all these 3 promises are resolved

// This does not help, as it works only on 1 promise
// p1.then((value) => {
//         console.log(value)
// })

// p2.then((value) => {
//         console.log(value)
// })

// p3.then((value) => {
//         console.log(value)
// })


// let promise = Promise.all([p1, p2, p3]) => Wiats for all promise to resolve and return array of there results, if one fails its error and all others are ignored

// let promise = Promise.allSettled([p1, p2, p3]) => Waits for all promises to settle, return there result as array of objects with status and value.

// let promise = Promise.race([p1, p2, p3]) => Waits for first promise to settle and its result/error becomes the output. [Reads error too]

// let promise = Promise.any([p1,p2,p3]) => Waits for 1st promise to fullfill(And not reject) and its reult become outcome.Throws aggregate error if all promises rejected. [reads 1st resolve]

// let promise = Promise.resolve(6) => Makes resolved promise with given value

let promise = Promise.reject(new Error("Hey")) //Make rejected promise with given error.
promise.then((value) => {
    console.log(value)
})