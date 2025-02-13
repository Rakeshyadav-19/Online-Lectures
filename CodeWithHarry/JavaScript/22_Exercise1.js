//Guees the number
//Q genrate a random number between 1 and 100 and until user guess the number, tell him if the number is greater or lesser than the random number. Also give him score of 100 - number of guesses.

const getRandom = () => {
  return Math.floor(Math.random() * 100);
};

let random = getRandom();
let user = prompt("Guess the number");
let guess = 0;

while (user != random) {
  guess++;
  if (user < random) {
    console.log("Your guessed number is less than the random number");
  } else if (user > random) {
    console.log("Your guessed number is greater than the random number");
  }
  user = prompt("Guess the number again");
}

console.log("You guessed the correct number");
console.log("The number was "+random);
console.log("Your score is " + (100 - guess));