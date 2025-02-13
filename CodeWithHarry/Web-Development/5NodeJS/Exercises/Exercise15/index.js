// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders
// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg
// 7. harry.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

import fs from "fs/promises";

async function readDirectory(dirPath) {
  try {
    let directories = await fs.readdir(dirPath, { withFileTypes: true });
    return directories
      .filter((directories) => directories.isFile())
      .map((directories) => directories.name);
  } catch (error) {
    console.log(error);
  }
}

async function readExtensions(path, files) {
  for (const file of files) {
    let fld = file.split(".")[1];
    let newPath = path + fld;

    try {
      await fs.access(newPath);
      // The check succeeded
      continue;
    } catch (error) {
      // The check failed
      fs.mkdir(newPath, { recursive: true });
    }
  }
}

async function moveFiles(path, files) {
  for (const file of files) {
    let fld = file.split(".")[1];
    let oldPath = path + file;
    let newPath = path + fld + "/" + file;
    if (file.split(".")[0] == "index") {
      continue;
    } else {
      fs.rename(oldPath, newPath);
    }
  }
}
let pathh =
  "/home/rax/Abyss/Online-Lectures/CodeWithHarry/Web-Development/NodeJS/Exercises/Exercise15/Exp-Folder" +
  "/";

async function main() {
  let directories = await readDirectory(pathh);
  await readExtensions(pathh, directories);
  await moveFiles(pathh, directories);
}

main();
