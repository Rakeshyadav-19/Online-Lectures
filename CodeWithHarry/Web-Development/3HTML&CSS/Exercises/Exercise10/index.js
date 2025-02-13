/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

let adjectives = {
  1: "Crazy",
  2: "Amazing",
  3: "Fire",
};
let ShopName = {
  1: "Engine",
  2: "Foods",
  3: "Garments",
};
let AnotherWord = {
  1: "Bros",
  2: "Limited",
  3: "Hub",
};

let rand1 = Math.floor(Math.random() * 3) + 1;
let rand2 = Math.floor(Math.random() * 3) + 1;
let rand3 = Math.floor(Math.random() * 3) + 1;
console.log(rand1);
console.log(rand2);
console.log(rand3);

console.log(`${adjectives[rand1]}${ShopName[rand2]}${AnotherWord[rand3]}`);
