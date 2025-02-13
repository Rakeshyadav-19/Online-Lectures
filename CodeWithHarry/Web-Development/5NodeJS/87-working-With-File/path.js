import path from "path";

let myPath =
  "~/Abyss/Online-Lectures/CodeWithHarry/Web-Development/NodeJS/87-working-With-File/main.js";

console.log(path.extname(myPath));
console.log(path.dirname(myPath));
console.log(path.basename(myPath));

// Join path name according to my system
console.log(path.join("c:/", "home\\Rax.txt"))