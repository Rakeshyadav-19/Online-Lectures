// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let array = [1, 2, 3, -4, 5, -6, 1];

function sum(arr) {
  console.log(arr);
  let su = 0;
  let stop = false;

  arr.reduce((v1, v2) => {
    // Add only positive numbers from array
    // if (!(v2 < 0)) {
    //   su = su + v2;
    // }

    if (v2 < 0) {
      stop = true;
    }
    if (!stop) {
      su += v2;
    }
  }, 0);

  // for (const num of arr) {
  //   if (num < 0) {
  //     return su;
  //   } else {
  //     su = su + num;
  //   }
  // }
  return su;
}

console.log(sum(array));
