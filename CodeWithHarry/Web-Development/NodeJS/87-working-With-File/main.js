const fs = require("fs");

console.log("Starting");
// Writes blocking code,until the file is not written the next code will not be executed, blocks asynchronous approach.
// fs.writeFileSync("Rax4.txt", "This is qritten in text file")

// After file is created do somthing. **Use writeFile**
// File-Nmae, File-Content, Callback-Function.
fs.writeFile("Rax.txt", "Rax is OP", () => {
  console.log("done");
  //   readFile takes file, callback, callback has two arguments(error and data)
  fs.readFile("Rax.txt", (error, data) => {
    console.log(error, data.toString());
  });
});
// Noe if we want do make multiple files and do operation after thats is done it is created it will create a doom of hell.
// For eg-
// fs.writeFile("Rax.txt", "Rax is OP", () => {
//   console.log("done");
//   //   readFile takes file, callback, callback has two arguments(error and data)
//   fs.readFile("Rax.txt", (error, data) => {
//     console.log(error, data.toString());
//     //   Again some file work
//     fs.writeFile("Rax.txt", "Rax is OP", () => {
//       console.log("done");
//       //   readFile takes file, callback, callback has two arguments(error and data)
//       fs.readFile("Rax.txt", (error, data) => {
//         console.log(error, data.toString());
//         //   Again some file work
//         fs.writeFile("Rax.txt", "Rax is OP", () => {
//           console.log("done");
//           //   readFile takes file, callback, callback has two arguments(error and data)
//           fs.readFile("Rax.txt", (error, data) => {
//             console.log(error, data.toString());
//             //   Again some file work
//             fs.writeFile("Rax.txt", "Rax is OP", () => {
//               console.log("done");
//               //   readFile takes file, callback, callback has two arguments(error and data)
//               fs.readFile("Rax.txt", (error, data) => {
//                 console.log(error, data.toString());
//                 //   Again some file work
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });
// To prevent this hell fs created new module for this

// To append content to fiel
fs.appendFile("Rax.txt", "Ok this is appended", (e,d)=>{
    console.log(e,d)
})
console.log("Ending");
