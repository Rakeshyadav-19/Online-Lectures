// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function multiple(arr) {
  let promises = arr.map((e) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2 * e);
      }, 500);
    });
  });

  return Promise.all(promises);
}
async function main() {
  let arr = [1, 2, 3, 4];
  let mul = await multiple(arr);
  console.log(mul);
}
main();
