// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function mirro(str) {
  console.log(str.split(""));
  let revarr = Array.from(str).map((v, i) => {
    return str[str.length - (i + 1)];
  });
  return str + revarr.join("");

  //   or
  const reversed = Array.from(str).reverse().join("");
  return str + reversed;
}

console.log(mirro("rax"));
