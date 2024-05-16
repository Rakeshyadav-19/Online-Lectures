const fs = require('fs');

// fs.readFile('file path/ name', 'encoding', callback function)

// fs.readFile('/home/rax/Documents/GIT/Online-Lectures/package.json', 'utf8', (err, data)=>{
//     console.log("Error - ", err)
//     console.log("Data - ",data)
// })

console.log("Finished") // Runs this first as the callback functtion is called only when everything is ready and nodejs does not stop the next task(Non-Blocking)

// To sync the process run one after other,to intentionaly block.
const a = fs.readFileSync('/home/rax/Documents/GIT/Online-Lectures/package.json')
console.log(a.toString())


fs.writeFile('/home/rax/Documents/GIT/Online-Lectures/NodeJS/Basic/CodeWithHarry/file.txt', "This is data", ()=>{
    console.log("done writing")
})

console.log("done")