try {
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if (age > 150) {
        throw new Error("This is probably not true") //Define custom error
        // Different errors can be SyntaxError,ReferenceError...for more mdn reference js errors
    }
} catch (error) {
    // Built in error, the error object has 2 properties name and message, sometimes stack too.
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

console.log("The script is still running")