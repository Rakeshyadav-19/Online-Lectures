// const fs = require("fs/promises")
import fs from "fs/promises";

// Sice I am using module i can awiat without a async function
let a = await fs.readFile("Rax.txt")
let b = await fs.writeFile("Rax.txt", "\nFile is modified")

console.log(a.toString())
console.log(b)

