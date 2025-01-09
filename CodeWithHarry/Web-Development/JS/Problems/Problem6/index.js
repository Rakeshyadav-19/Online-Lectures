// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

let vowels = ["a", "e", "i", "o"];

function vowelsCount(string) {
  let count = 0;
  for (const char of string.toLowerCase()) {
    for (const vow of vowels) {
      if (char == vow) {
        count++;
      }
    }
  }

  //   for (const char of string.toLowerCase()) {
  //     if (vowels.includes(char)) {
  //       count++;
  //     }
  //   }

  return count;
}

console.log(vowelsCount("Rakes Is good boy"));
