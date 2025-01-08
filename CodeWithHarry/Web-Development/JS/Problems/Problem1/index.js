// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.
let names = ["rax", "ramesh", "rajesh", "rakesh", "roshan", "rohan", "rock"];

let housesobj = {};
let housesarr = [];

for (const name of names) {
  if (name.length < 6) {
    housesarr.push(name + ":" + "Gryffindor");
    housesobj[name] = "Gryffindor";
  } else if (name.length < 8) {
    housesarr.push(name + ":" + "Hufflepuff");
    housesobj[name] = "Hufflepuff";
  } else if (name.length < 12) {
    housesarr.push(name + ":" + "Ravenclaw");
    housesobj[name] = "Ravenclaw";
  } else if (name.length >= 12) {
    housesarr.push(name + ":" + "Slytherin");
    housesobj[name] = "Slytherin";
  }
}

console.log(housesobj);
console.log(housesarr);

for (const name of housesarr) {
  if (name.endsWith("Gryffindor")) {
    console.log(name);
  }
}
