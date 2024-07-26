setTimeout(() => {
    console.log("Hacking wifi.... Please wait...")
}, 1000)


// If we did not used try the script stops as soon as we get error
// try,catch helps to handel the error,it works synchronous
try {
    console.log(rahul)
}
catch (err) {
    console.log("Balle balle")
}
// If an exception/error happens in a scheduled code , like in setTimeout, then try...catch wont catch it.
// That is because the code is scheduled and there was no error hence js leavs the try catch, if there is error inside setTimeout we need handel again with try...catch
try {
    setTimeout(() => {
        console.log(rahu) //To handel error here we need to define try...catch here again
    },100)
}
catch (err) {
    console.log("Balle balle")
}


setTimeout(() => {
    console.log("Fetching username and password.... Please wait...")
}, 2000)

setTimeout(() => {
    console.log("Hacking Rahul's facebook id.... Please wait...")
}, 3000)

setTimeout(() => {
    console.log("Username and password of Rahul (+919356700001) fetched.... Please wait...")
}, 4000) 